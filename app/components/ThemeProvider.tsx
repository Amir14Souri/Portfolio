"use client";

import { createContext, useContext, useEffect, useRef, type ReactNode } from "react";
import { flushSync } from "react-dom";
import { ThemeProvider as NextThemesProvider, useTheme, type ThemeProviderProps } from "next-themes";

const ThemeTransitionContext = createContext<() => void>(() => {});
const THEME_TRANSITION_DURATION = 750;

/** Reveal square tiles along successive diagonals, from top left to bottom right. */
function tileMaskFrames(width: number, height: number): Keyframe[] {
  const tileSize = 80;
  const columns = Math.ceil(width / tileSize);
  const rows = Math.ceil(height / tileSize);
  const diagonals = Math.max(1, columns + rows - 2);
  const steps = Math.ceil(THEME_TRANSITION_DURATION / (1000 / 60));
  const tileSpan = .45;

  return Array.from({ length: steps + 1 }, (_, frame) => {
    const progress = frame / steps;
    const tiles: string[] = [];
    for (let row = 0; row < rows; row++) {
      for (let column = 0; column < columns; column++) {
        const delay = ((column + row) / diagonals) * (1 - tileSpan);
        const phase = Math.max(0, Math.min(1, (progress - delay) / tileSpan));
        // Ease each tile in and out, with enough overlap to soften the reveal.
        const amount = phase * phase * (3 - 2 * phase);
        if (!amount) continue;
        const size = tileSize * amount;
        const inset = (tileSize - size) / 2;
        tiles.push(`<rect x="${column * tileSize + inset}" y="${row * tileSize + inset}" width="${size}" height="${size}" fill="white"/>`);
      }
    }
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${tiles.join("")}</svg>`;
    return { offset: progress, maskImage: `url("data:image/svg+xml,${encodeURIComponent(svg)}")` };
  });
}

function ThemeTransitionController({ children }: { children: ReactNode }) {
  const { setTheme } = useTheme();
  const running = useRef<{
    generation: number;
    requested?: "light" | "dark";
    transition?: ViewTransition;
    animation?: Animation;
  }>({ generation: 0 });

  useEffect(() => {
    const state = running.current;
    const cancel = () => {
      state.animation?.cancel();
      state.transition?.skipTransition();
    };
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotionChange = () => { if (motion.matches) cancel(); };
    window.addEventListener("resize", cancel);
    motion.addEventListener("change", onMotionChange);
    return () => {
      state.generation++;
      cancel();
      delete document.documentElement.dataset.themeTransition;
      window.removeEventListener("resize", cancel);
      motion.removeEventListener("change", onMotionChange);
    };
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const state = running.current;
    // Remember the requested theme even before the previous snapshot is ready.
    const current = state.requested ?? (root.classList.contains("dark") ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    state.requested = next;
    const generation = ++state.generation;
    state.animation?.cancel();
    state.transition?.skipTransition();
    state.animation = undefined;
    state.transition = undefined;
    delete root.dataset.themeTransition;

    const update = () => {
      if (generation === state.generation) flushSync(() => setTheme(next));
    };
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof document.startViewTransition !== "function" ||
      typeof root.animate !== "function" ||
      !CSS.supports("mask-image", "linear-gradient(black, black)")
    ) {
      update();
      state.requested = undefined;
      return;
    }

    const frames = tileMaskFrames(window.innerWidth, window.innerHeight);
    root.dataset.themeTransition = "tiles";
    try {
      const transition = document.startViewTransition(update);
      state.transition = transition;
      void transition.ready.then(() => {
        if (generation !== state.generation) return;
        const animation = root.animate(frames, {
          duration: THEME_TRANSITION_DURATION,
          easing: "linear",
          fill: "both",
          pseudoElement: "::view-transition-new(root)",
        });
        state.animation = animation;
        return animation.finished.finally(() => transition.skipTransition());
      }).catch(() => {
        // An interrupted or unsupported pseudo-element animation switches directly.
        transition.skipTransition();
      });
      void transition.finished.finally(() => {
        if (generation !== state.generation) return;
        state.animation?.cancel();
        state.animation = undefined;
        state.transition = undefined;
        state.requested = undefined;
        delete root.dataset.themeTransition;
      }).catch(() => {});
    } catch {
      delete root.dataset.themeTransition;
      update();
      state.requested = undefined;
    }
  };

  return <ThemeTransitionContext.Provider value={toggleTheme}>{children}</ThemeTransitionContext.Provider>;
}

export const useThemeTransition = () => useContext(ThemeTransitionContext);

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <ThemeTransitionController>{children}</ThemeTransitionController>
    </NextThemesProvider>
  );
}
