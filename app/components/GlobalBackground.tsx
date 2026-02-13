"use client";

import { useTheme } from "next-themes";

export default function GlobalBackground() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme ? resolvedTheme === "dark" : true;

  // --- colour helpers (keep it readable) ---
  const line = isDark ? "stroke-blue-400/[0.2]" : "stroke-blue-400/[0.32]";
  const line2 = isDark
    ? "stroke-purple-400/[0.16]"
    : "stroke-purple-400/[0.28]";
  const line3 = isDark
    ? "stroke-indigo-400/[0.14]"
    : "stroke-indigo-400/[0.24]";
  const dot = isDark ? "fill-blue-400/[0.24]" : "fill-blue-400/[0.40]";
  const dot2 = isDark ? "fill-purple-400/[0.20]" : "fill-purple-400/[0.36]";
  const dot3 = isDark ? "fill-indigo-400/[0.18]" : "fill-indigo-400/[0.32]";
  const code = isDark ? "fill-zinc-500/[0.18]" : "fill-zinc-400/[0.30]";
  const amber = isDark ? "fill-amber-400/[0.18]" : "fill-amber-400/[0.30]";
  const green = isDark ? "fill-emerald-400/[0.16]" : "fill-emerald-400/[0.28]";
  const overlay = isDark
    ? "bg-[linear-gradient(to_right,transparent_0%,theme(colors.black/60)_35%,theme(colors.black/60)_65%,transparent_100%)]"
    : "bg-gradient-to-r from-white/80 via-transparent to-white/80";

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none">
        <defs>
          <pattern
            id="global-pattern"
            width="1060"
            height="1100"
            patternUnits="userSpaceOnUse">
            {/* ─── NEURAL-NETWORK CONSTELLATION (scattered) ─── */}
            {/* Connections */}
            {(
              [
                [60, 120, 180, 200],
                [180, 200, 340, 160],
                [340, 160, 500, 240],
                [500, 240, 660, 180],
                [660, 180, 820, 120],
                [820, 120, 960, 210],
                [100, 400, 250, 500],
                [250, 500, 420, 450],
                [420, 450, 580, 520],
                [580, 520, 740, 460],
                [740, 460, 900, 530],
                [180, 200, 100, 400],
                [500, 240, 420, 450],
                [660, 180, 740, 460],
                [120, 700, 280, 780],
                [280, 780, 460, 730],
                [460, 730, 640, 800],
                [640, 800, 800, 740],
                [800, 740, 950, 810],
                [250, 500, 280, 780],
                [580, 520, 640, 800],
                [80, 900, 220, 1020],
                [220, 1020, 400, 960],
                [400, 960, 560, 1050],
                [560, 1050, 720, 980],
                [720, 980, 900, 1060],
                [100, 400, 80, 900],
                [420, 450, 400, 960],
                [740, 460, 720, 980],
              ] as [number, number, number, number][]
            ).map(([x1, y1, x2, y2], i) => (
              <line
                key={`gl-${i}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                className={i % 3 === 0 ? line : i % 3 === 1 ? line2 : line3}
                strokeWidth="0.8"
              />
            ))}

            {/* Nodes */}
            {(
              [
                [60, 120, 3],
                [180, 200, 3.5],
                [340, 160, 3],
                [500, 240, 4],
                [660, 180, 3],
                [820, 120, 3.5],
                [960, 210, 3],
                [100, 400, 3],
                [250, 500, 3.5],
                [420, 450, 3],
                [580, 520, 4],
                [740, 460, 3],
                [900, 530, 3.5],
                [120, 700, 3],
                [280, 780, 3.5],
                [460, 730, 3],
                [640, 800, 4],
                [800, 740, 3],
                [950, 810, 3],
                [80, 900, 3],
                [220, 1020, 3.5],
                [400, 960, 3],
                [560, 1050, 4],
                [720, 980, 3],
                [900, 1060, 3],
              ] as [number, number, number][]
            ).map(([cx, cy, r], i) => (
              <circle
                key={`gn-${i}`}
                cx={cx}
                cy={cy}
                r={r}
                className={i % 3 === 0 ? dot : i % 3 === 1 ? dot2 : dot3}
              />
            ))}

            {/* ─── CODE SYMBOLS (scattered watermarks) ─── */}
            {[
              { x: 50, y: 330, t: "</>" },
              { x: 920, y: 300, t: "{ }" },
              { x: 70, y: 620, t: "//" },
              { x: 880, y: 650, t: "=>" },
              { x: 480, y: 350, t: "[ ]" },
              { x: 760, y: 870, t: "( )" },
              { x: 150, y: 950, t: "</>" },
              { x: 600, y: 150, t: "{ }" },
              { x: 300, y: 880, t: "=>" },
              { x: 850, y: 1030, t: "//" },
              { x: 200, y: 1100, t: "< >" },
              { x: 700, y: 600, t: "./" },
            ].map((item, i) => (
              <text
                key={`gt-${i}`}
                x={item.x}
                y={item.y}
                fontSize={14}
                fontFamily="var(--font-mono), monospace"
                className={code}
                textAnchor="middle">
                {item.t}
              </text>
            ))}

            {/* ─── DIAMOND SCATTER ─── */}
            {(
              [
                [930, 380, 6],
                [40, 480, 5],
                [500, 580, 7],
                [780, 200, 5],
                [150, 780, 6],
                [650, 1000, 5],
                [350, 1100, 6],
                [960, 900, 5],
              ] as [number, number, number][]
            ).map(([cx, cy, s], i) => (
              <rect
                key={`gd-${i}`}
                x={cx}
                y={cy}
                width={s}
                height={s}
                rx={1}
                className={amber}
                transform={`rotate(45, ${cx}, ${cy})`}
              />
            ))}

            {/* ─── SIGNAL DOTS (emerald) ─── */}
            {(
              [
                [30, 260],
                [200, 310],
                [400, 280],
                [600, 310],
                [800, 260],
                [980, 310],
                [100, 560],
                [320, 590],
                [540, 560],
                [760, 590],
                [950, 560],
                [60, 850],
                [240, 880],
                [440, 850],
                [640, 880],
                [840, 850],
                [1000, 880],
                [180, 1080],
                [380, 1050],
                [580, 1080],
                [780, 1050],
                [960, 1080],
              ] as [number, number][]
            ).map(([cx, cy], i) => (
              <circle key={`gs-${i}`} cx={cx} cy={cy} r={2} className={green} />
            ))}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#global-pattern)" />
      </svg>
      <div className={`absolute inset-0 ${overlay}`} />
      <div className={"absolute inset-0 bg-gradient-to-b from-transparent from-30% to-black/60"} />
    </div>
  );
}
