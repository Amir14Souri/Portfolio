"use client";

import Image from "next/image";
import { CornerDownLeft } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { SITE } from "@/app/portfolio";
import TextType from "./TextType/TextType";
import ThoughtLine from "./ThoughtLine/ThoughtLine";
import "./DiffusionPortrait.css";

type Connection = EventTarget & {
  saveData?: boolean;
  effectiveType?: "slow-2g" | "2g" | "3g" | "4g";
};
type PromptPhase = "typing" | "submitted" | "generating";
const PROMPT_TYPING_SPEED = { min: 65, max: 125 };

/** A short prompt entrance buys loading time; the priority portrait stays in HTML. */
export default function DiffusionPortrait() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const promptRef = useRef<HTMLDivElement>(null);
  const veilRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const [complete, setComplete] = useState(false);
  const [active, setActive] = useState(false);
  const [phase, setPhase] = useState<PromptPhase>("typing");
  const [paused, setPaused] = useState(true);
  const onTyped = useCallback(() => {
    promptRef.current?.dispatchEvent(new Event("portrait-prompt-complete"));
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const prompt = promptRef.current;
    const veil = veilRef.current;
    const status = statusRef.current;
    if (!video || !prompt || !veil || !status) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reducedData = window.matchMedia("(prefers-reduced-data: reduce)");
    const connection = (navigator as Navigator & { connection?: Connection }).connection;
    let disposed = false;
    let terminal = false;
    let visible = false;
    let running = false;
    let attached = false;
    let typed = false;
    let introFinished = false;
    let started = false;
    let playPending = false;
    let playGeneration = 0;
    let frame = 0;
    let openingFrame = 0;
    let flight: Animation | undefined;
    let watchdog: ReturnType<typeof setInterval> | undefined;
    let handoff: ReturnType<typeof setTimeout> | undefined;
    let holdRemaining = 240;
    let startupRemaining = 2000;
    let stallRemaining = 4000;
    let lastWatch = 0;
    let lastMediaTime = 0;
    let observer: IntersectionObserver | undefined;
    const removers: (() => void)[] = [];

    const listen = (target: EventTarget, name: string, handler: EventListener) => {
      target.addEventListener(name, handler);
      removers.push(() => target.removeEventListener(name, handler));
    };
    const stopWork = () => {
      cancelAnimationFrame(frame);
      clearInterval(watchdog);
      watchdog = undefined;
    };
    const detach = () => {
      video.pause();
      video.removeAttribute("src");
      if (attached) video.load();
    };
    const finish = (fade = false) => {
      if (disposed || terminal) return;
      terminal = true;
      stopWork();
      flight?.cancel();
      video.cancelVideoFrameCallback?.(openingFrame);
      observer?.disconnect();
      removers.forEach(remove => remove());
      setActive(false);
      setPaused(true);
      status.style.opacity = "0";
      prompt.style.opacity = "0";
      if (fade) {
        video.dataset.finished = "";
        handoff = setTimeout(() => { detach(); setComplete(true); }, 150);
      } else {
        detach();
        setComplete(true);
      }
    };
    // Give 3G a chance to load during typing. Very slow/data-saving connections
    // use the portrait; actual startup and stall budgets cover missing/stale hints.
    const skip = () => motion.matches || reducedData.matches || connection?.saveData === true ||
      connection?.effectiveType === "slow-2g" || connection?.effectiveType === "2g";
    const onPreference = () => { if (skip()) finish(); };
    const paint = () => {
      if (disposed || terminal || !running || video.paused) return;
      const progress = Math.max(0, Math.min(1, (video.currentTime - 4.5) / 0.5));
      prompt.style.opacity = String(1 - progress * progress * (3 - 2 * progress));
      frame = requestAnimationFrame(paint);
    };
    // The black prompt stays opaque until a real diffusion frame is presented.
    // This also hides the MP4's synthetic static prelude without HTTP seeking.
    const exposeOpeningFrame: VideoFrameRequestCallback = (_, metadata) => {
      if (disposed || terminal) return;
      if (running && introFinished && metadata.mediaTime >= SITE.portraitAnimationStart) {
        started = true;
        stallRemaining = 4000;
        lastMediaTime = video.currentTime;
        video.dataset.ready = "";
        veil.dataset.revealed = "";
        setPaused(false);
      } else {
        openingFrame = video.requestVideoFrameCallback(exposeOpeningFrame);
      }
    };
    const startFlight = () => {
      if (flight || terminal) return;
      const bounds = prompt.getBoundingClientRect();
      // Place the final pill, then move it from the prompt with a transform.
      // Animating top/width would count every flight frame as a layout shift.
      prompt.dataset.phase = "generating";
      const target = prompt.getBoundingClientRect();
      const offset = bounds.y + bounds.height / 2 - target.y - target.height / 2;
      flight = prompt.animate([
        { transform: `translate(-50%, calc(-50% + ${offset}px)) scale(${bounds.width / target.width})` },
        { transform: "translate(-50%, -50%) scale(1)" },
      ], { duration: 320, easing: "cubic-bezier(.22, .7, .3, 1)", fill: "forwards" });
      setPhase("generating");
      flight.onfinish = () => {
        if (disposed || terminal) return;
        introFinished = true;
        flight?.cancel();
        flight = undefined;
        lastWatch = performance.now();
        sync();
      };
    };
    const watch = () => {
      const now = performance.now();
      const delta = now - lastWatch;
      lastWatch = now;
      if (!introFinished) {
        if (typed && !flight) {
          holdRemaining -= delta;
          if (holdRemaining <= 0) startFlight();
        }
      } else if (!started) {
        startupRemaining -= delta;
        if (startupRemaining <= 0) finish();
      } else if (video.currentTime !== lastMediaTime) {
        lastMediaTime = video.currentTime;
        stallRemaining = 4000;
      } else {
        stallRemaining -= delta;
        if (stallRemaining <= 0) finish();
      }
    };
    const sync = () => {
      if (disposed || terminal) return;
      running = visible && document.visibilityState === "visible";
      setActive(running);
      if (!running) {
        playGeneration += 1;
        video.pause();
        flight?.pause();
        setPaused(true);
        stopWork();
        return;
      }
      if (flight?.playState === "paused") flight.play();
      if (!watchdog) {
        lastWatch = performance.now();
        watchdog = setInterval(watch, 50);
      }
      if (!attached) {
        if (skip()) { finish(); return; }
        attached = true;
        video.preload = "auto";
        video.src = SITE.portraitAnimationSrc;
        openingFrame = video.requestVideoFrameCallback(exposeOpeningFrame);
      }
      // Preload during the prompt, then play after its submission transition.
      if (!introFinished || !video.paused || playPending) return;
      playPending = true;
      const generation = playGeneration;
      video.play().then(() => {
        playPending = false;
        if (disposed || terminal) return;
        if (!running) video.pause();
        else if (generation !== playGeneration) sync();
      }).catch(error => {
        playPending = false;
        if (disposed || terminal) return;
        if (error?.name === "AbortError" && generation !== playGeneration) {
          if (running) sync();
          return;
        }
        finish();
      });
    };

    if (skip() || !video.canPlayType('video/mp4; codecs="avc1.42E01E"') ||
        !("IntersectionObserver" in window) || !("requestVideoFrameCallback" in video) ||
        !("animate" in prompt)) {
      queueMicrotask(() => finish());
    } else {
      listen(prompt, "portrait-prompt-complete", () => {
        if (typed || terminal) return;
        typed = true;
        setPhase("submitted");
      });
      listen(video, "error", () => finish());
      listen(video, "ended", () => finish(true));
      listen(video, "playing", () => {
        if (terminal || disposed) return;
        if (!running) { video.pause(); return; }
        stallRemaining = 4000;
        if (started) setPaused(false);
        cancelAnimationFrame(frame);
        paint();
      });
      const pauseStatus = () => {
        setPaused(true);
        cancelAnimationFrame(frame);
      };
      listen(video, "pause", pauseStatus);
      listen(video, "waiting", pauseStatus);
      listen(document, "visibilitychange", sync);
      listen(motion, "change", onPreference);
      listen(reducedData, "change", onPreference);
      if (connection) listen(connection, "change", onPreference);
      observer = new IntersectionObserver(entries => {
        visible = entries[0]?.isIntersecting === true;
        sync();
      }, { threshold: 0 });
      observer.observe(video);
    }

    return () => {
      disposed = true;
      stopWork();
      flight?.cancel();
      clearTimeout(handoff);
      video.cancelVideoFrameCallback?.(openingFrame);
      observer?.disconnect();
      removers.forEach(remove => remove());
      detach();
    };
  }, []);

  return (
    <>
      <div className="lab-photo-frame">
        <Image src={SITE.photoSrc} alt={SITE.fullName} fill className="object-cover" priority sizes="(max-width: 767px) 163px, 230px" />
        {!complete && <>
          <video ref={videoRef} className="lab-diffusion-layer" width={256} height={256}
            muted playsInline preload="none" aria-hidden="true" tabIndex={-1}
            disablePictureInPicture disableRemotePlayback />
          <div ref={veilRef} className="lab-prompt-veil" aria-hidden="true" />
        </>}
      </div>
      <div className="lab-portrait-status-space" />
      {!complete && <div ref={promptRef} className="lab-prompt-traveler" data-phase={phase}>
        <div className="lab-prompt-name" aria-hidden="true">
          <TextType text={SITE.fullName.replace(" ", "\n")} variableSpeed={PROMPT_TYPING_SPEED} initialDelay={180}
            loop={false} paused={!active || phase !== "typing"} cursorCharacter="▎"
            cursorBlinkDuration={0.4} onSentenceComplete={onTyped} />
          <CornerDownLeft className="lab-prompt-enter" strokeWidth={1.6} />
        </div>
        <div ref={statusRef} className="lab-portrait-status">
          {phase === "generating" && <ThoughtLine label="Generating…" doneLabel="Generating…"
            glyph="dot" glyphColor="var(--primary)" color="var(--muted-foreground)"
            fontSize={12} breathDepth={0.18} shimmerDuration={2.4}
            collapsible={false} showTimer={false} elapsed={0} paused={paused} />}
        </div>
      </div>}
      <noscript><style>{`.lab-diffusion-layer, .lab-prompt-veil, .lab-prompt-traveler { display: none !important; }`}</style></noscript>
    </>
  );
}
