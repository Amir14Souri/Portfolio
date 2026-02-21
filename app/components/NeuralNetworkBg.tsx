"use client";

import { useEffect, useRef, useCallback } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

/* ─── Types ─── */
interface PathPoint { x: number; y: number; d: number }

interface Phase {
    type: "move" | "drain" | "dwell";
    startFrame: number;
    endFrame: number;
    nodeIdx: number;        // index into nodeDists: node being approached / dwelled at
}

interface Flow {
    points: PathPoint[];    // single continuous polyline
    totalLen: number;
    nodeDists: number[];    // distance of each node on the route [0, d1, d2, d3]
    phases: Phase[];        // timeline: move→drain→dwell → move→drain→dwell → move→drain
    totalFrames: number;
    frame: number;          // current frame
    segLen: number;         // colored tail length (px)
    colorIdx: number;       // 0 = cyan, 1 = blue
}

/* ─── Layout: [3 → 5 → 5 → 3] ─── */
const LAYERS = [3, 5, 5, 3];
const LAYER_X = [0.06, 0.26, 0.74, 0.94];
const NODE_R = 9;
const V_MARGIN = 0.1;

interface Vec2 { x: number; y: number }

const NODES: Vec2[] = [];
const LAYER_STARTS: number[] = [];
for (let l = 0; l < LAYERS.length; l++) {
    LAYER_STARTS.push(NODES.length);
    const c = LAYERS[l];
    for (let i = 0; i < c; i++) {
        NODES.push({
            x: LAYER_X[l],
            y: V_MARGIN + (1 - 2 * V_MARGIN) * ((i + 1) / (c + 1)),
        });
    }
}

// Edges
const EDGES: [number, number][] = [];
for (let l = 0; l < LAYERS.length - 1; l++) {
    const cA = LAYERS[l], cB = LAYERS[l + 1];
    const sA = LAYER_STARTS[l], sB = LAYER_STARTS[l + 1];
    for (let a = 0; a < cA; a++) {
        for (let b = 0; b < cB; b++) {
            if (Math.abs(NODES[sA + a].y - NODES[sB + b].y) < 0.28) {
                EDGES.push([sA + a, sB + b]);
            }
        }
    }
}

const ADJ = new Map<number, number[]>();
for (const [a, b] of EDGES) {
    if (!ADJ.has(a)) ADJ.set(a, []);
    ADJ.get(a)!.push(b);
}

/* ─── Cubic Bezier ─── */
function evalCubic(
    x0: number, y0: number, x1: number, y1: number,
    x2: number, y2: number, x3: number, y3: number, t: number,
): [number, number] {
    const m = 1 - t;
    return [
        m * m * m * x0 + 3 * m * m * t * x1 + 3 * m * t * t * x2 + t * t * t * x3,
        m * m * m * y0 + 3 * m * m * t * y1 + 3 * m * t * t * y2 + t * t * t * y3,
    ];
}

/* ─── Build continuous polyline for full route ─── */
function buildFullPath(route: number[], w: number, h: number): { points: PathPoint[]; legEnds: number[] } {
    const points: PathPoint[] = [];
    const legEnds: number[] = [];
    let cum = 0;

    const addPt = (x: number, y: number) => {
        if (points.length > 0) {
            const prev = points[points.length - 1];
            const dd = Math.hypot(x - prev.x, y - prev.y);
            if (dd < 0.1) return; // skip near-duplicate
            cum += dd;
        }
        points.push({ x, y, d: cum });
    };

    for (let i = 0; i < route.length - 1; i++) {
        const a = NODES[route[i]], b = NODES[route[i + 1]];
        const ax = a.x * w, ay = a.y * h;
        const bx = b.x * w, by = b.y * h;
        const dx = bx - ax;
        const c1x = ax + dx * 0.4, c1y = ay;
        const c2x = bx - dx * 0.4, c2y = by;

        const N = 40;
        for (let s = (i === 0 ? 0 : 1); s <= N; s++) {
            const [px, py] = evalCubic(ax, ay, c1x, c1y, c2x, c2y, bx, by, s / N);
            addPt(px, py);
        }
        legEnds.push(cum); // distance at end of this leg (= node center)
    }
    return { points, legEnds };
}

/* ─── Random route ─── */
function randomRoute(): number[] {
    const start = LAYER_STARTS[0] + Math.floor(Math.random() * LAYERS[0]);
    const route = [start];
    let cur = start;
    for (let l = 1; l < LAYERS.length; l++) {
        const nb = ADJ.get(cur);
        if (!nb || nb.length === 0) break;
        cur = nb[Math.floor(Math.random() * nb.length)];
        route.push(cur);
    }
    return route;
}

/* ─── Sample point on polyline at distance d ─── */
function sampleAt(points: PathPoint[], d: number): { x: number; y: number } {
    const clamped = Math.max(0, Math.min(d, points[points.length - 1].d));
    // Binary search for efficiency
    let lo = 0, hi = points.length - 1;
    while (lo < hi - 1) {
        const mid = (lo + hi) >> 1;
        if (points[mid].d <= clamped) lo = mid; else hi = mid;
    }
    const p0 = points[lo], p1 = points[hi];
    const seg = p1.d - p0.d;
    if (seg < 0.001) return { x: p0.x, y: p0.y };
    const frac = (clamped - p0.d) / seg;
    return { x: p0.x + (p1.x - p0.x) * frac, y: p0.y + (p1.y - p0.y) * frac };
}

/* ─── Colors ─── */
const COLORS = [
    { dk: "rgba(6,182,212,", lt: "rgba(8,145,178," },
    { dk: "rgba(59,130,246,", lt: "rgba(37,99,235," },
];

/* — get head & tail distances from frame — */
const getPositions = (flow: Flow): { headDist: number; tailDist: number } => {
    const { frame, phases, nodeDists, segLen } = flow;
    for (const p of phases) {
        if (frame >= p.startFrame && frame < p.endFrame) {
            const t = (frame - p.startFrame) / (p.endFrame - p.startFrame);
            const nodeDist = nodeDists[p.nodeIdx];
            const prevNodeDist = p.nodeIdx > 0 ? nodeDists[p.nodeIdx - 1] : 0;

            switch (p.type) {
                case "move": {
                    // ease-in only: slow departure from source node, full speed into destination
                    const head = prevNodeDist + (nodeDist - prevNodeDist) * (t * t);
                    const tail = Math.max(prevNodeDist, head - segLen);
                    return { headDist: head, tailDist: tail };
                }
                case "drain": {
                    const drainStart = Math.max(prevNodeDist, nodeDist - segLen);
                    const tail = drainStart + (nodeDist - drainStart) * t;
                    return { headDist: nodeDist, tailDist: tail };
                }
                case "dwell":
                    return { headDist: nodeDist, tailDist: nodeDist };
            }
        }
    }
    // Past all phases — fully drained
    const last = nodeDists[nodeDists.length - 1];
    return { headDist: last, tailDist: last };
};

/* ─── Component ─── */
export default function NeuralNetworkBg({ className }: { className?: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme ? resolvedTheme === "dark" : true;

    const animRef = useRef(0);
    const flowsRef = useRef<Flow[]>([]);
    const sizeRef = useRef({ w: 0, h: 0 });
    const isDarkRef = useRef(isDark);
    isDarkRef.current = isDark;

    /* — spawn — */
    const spawnFlow = useCallback(() => {
        const { w, h } = sizeRef.current;
        if (w === 0) return;
        const route = randomRoute();
        if (route.length < 2) return;
        const { points, legEnds } = buildFullPath(route, w, h);
        if (points.length < 2) return;
        const totalLen = points[points.length - 1].d;
        const segLen = 60 + Math.random() * 60;

        // Node distances: [0, legEnd0, legEnd1, legEnd2]
        const nodeDists = [0, ...legEnds];

        // Build phase timeline: move → drain → dwell → move → drain → dwell → move → drain
        const moveDur = 250 + Math.floor(Math.random() * 100); // 250-350 frames per leg
        const dwellDur = 30; // ~0.5s at 60fps
        const phases: Phase[] = [];
        let f = 0;
        for (let i = 1; i < nodeDists.length; i++) {
            const legLen = nodeDists[i] - nodeDists[i - 1];
            const avgSpeed = legLen / moveDur;
            const drainDist = Math.min(segLen, legLen);
            const drainDur = Math.ceil(drainDist / Math.max(avgSpeed, 0.01));

            // Move: head travels from previous node to this node
            phases.push({ type: "move", startFrame: f, endFrame: f + moveDur, nodeIdx: i });
            f += moveDur;
            // Drain: head stays, tail catches up into this node
            phases.push({ type: "drain", startFrame: f, endFrame: f + drainDur, nodeIdx: i });
            f += drainDur;
            // Dwell: pause inside circle (skip after final node)
            if (i < nodeDists.length - 1) {
                phases.push({ type: "dwell", startFrame: f, endFrame: f + dwellDur, nodeIdx: i });
                f += dwellDur;
            }
        }

        flowsRef.current.push({
            points,
            totalLen,
            nodeDists,
            phases,
            totalFrames: f,
            frame: 0,
            segLen,
            colorIdx: Math.random() < 0.5 ? 0 : 1,
        });
    }, []);

    /* — animation loop — */
    const animate = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const { w, h } = sizeRef.current;
        if (w === 0) { animRef.current = requestAnimationFrame(animate); return; }
        const dark = isDarkRef.current;

        ctx.clearRect(0, 0, w, h);

        /* ── radial glow ── */
        const bg = ctx.createRadialGradient(w * 0.5, h * 0.45, 0, w * 0.5, h * 0.45, w * 0.65);
        bg.addColorStop(0, dark ? "rgba(6,182,212,0.035)" : "rgba(6,182,212,0.025)");
        bg.addColorStop(0.5, dark ? "rgba(59,130,246,0.018)" : "rgba(59,130,246,0.012)");
        bg.addColorStop(1, dark ? "rgba(0,0,0,0)" : "rgba(255,255,255,0)");
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, w, h);

        /* ── base edges ── */
        ctx.strokeStyle = dark ? "rgba(148,163,184,0.40)" : "rgba(100,116,139,0.40)";
        ctx.lineWidth = 0.8;
        for (const [fi, ti] of EDGES) {
            const a = NODES[fi], b = NODES[ti];
            const ax = a.x * w, ay = a.y * h;
            const bx = b.x * w, by = b.y * h;
            const dx = bx - ax;
            ctx.beginPath();
            ctx.moveTo(ax, ay);
            ctx.bezierCurveTo(ax + dx * 0.4, ay, bx - dx * 0.4, by, bx, by);
            ctx.stroke();
        }

        /* ── flows (clipped outside node circles) ── */
        ctx.save();
        ctx.beginPath();
        ctx.rect(0, 0, w, h);
        for (const n of NODES) {
            const px = n.x * w, py = n.y * h;
            ctx.moveTo(px + NODE_R + 1, py);
            ctx.arc(px, py, NODE_R + 1, 0, Math.PI * 2, true);
        }
        ctx.clip("evenodd");

        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        const alive: Flow[] = [];

        for (const fl of flowsRef.current) {
            fl.frame++;
            const { headDist, tailDist } = getPositions(fl);

            // Flow is done when both head and tail are at the last node
            if (fl.frame > fl.totalFrames) continue;
            alive.push(fl);

            if (headDist <= 0) continue;

            // Sample trail points from head → tail along the continuous polyline
            const numSamples = 30;
            const trail: { x: number; y: number }[] = [];
            for (let s = 0; s <= numSamples; s++) {
                const d = headDist - (headDist - tailDist) * (s / numSamples);
                trail.push(sampleAt(fl.points, d));
            }

            if (trail.length < 2) continue;
            const p0 = trail[0], pN = trail[trail.length - 1];
            if (Math.hypot(pN.x - p0.x, pN.y - p0.y) < 1) continue;

            const base = dark ? COLORS[fl.colorIdx].dk : COLORS[fl.colorIdx].lt;

            // Glow pass
            const gG = ctx.createLinearGradient(p0.x, p0.y, pN.x, pN.y);
            gG.addColorStop(1, `${base}0)`);
            ctx.strokeStyle = gG;
            ctx.lineWidth = 8;
            ctx.beginPath();
            ctx.moveTo(trail[0].x, trail[0].y);
            for (let i = 1; i < trail.length; i++) ctx.lineTo(trail[i].x, trail[i].y);
            ctx.stroke();

            // Core pass
            const cG = ctx.createLinearGradient(p0.x, p0.y, pN.x, pN.y);
            const ca = dark ? 0.75 : 0.58;
            cG.addColorStop(0, `${base}${ca})`);
            cG.addColorStop(0.6, `${base}${(ca * 0.5).toFixed(3)})`);
            cG.addColorStop(1, `${base}0)`);
            ctx.strokeStyle = cG;
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(trail[0].x, trail[0].y);
            for (let i = 1; i < trail.length; i++) ctx.lineTo(trail[i].x, trail[i].y);
            ctx.stroke();
        }
        flowsRef.current = alive;
        ctx.restore();

        /* ── node circles ── */
        let nIdx = 0;
        for (let l = 0; l < LAYERS.length; l++) {
            for (let ni = 0; ni < LAYERS[l]; ni++) {
                const n = NODES[nIdx++];
                const px = n.x * w, py = n.y * h;
                const isCyan = l === 0 || l === 3;

                ctx.beginPath();
                ctx.arc(px, py, NODE_R, 0, Math.PI * 2);
                ctx.fillStyle = dark ? "rgb(15,23,42)" : "white";
                ctx.fill();

                ctx.fillStyle = isCyan ? "#00b8db33" : "#2b7fff33";
                ctx.fill();

                ctx.strokeStyle = isCyan ? "#00b8dbcc" : "#2b7fffcc";
                ctx.lineWidth = 2;
                ctx.stroke();
            }
        }

        animRef.current = requestAnimationFrame(animate);
    }, []);

    /* — spawn — */
    useEffect(() => {
        for (let i = 0; i < 2; i++) setTimeout(() => spawnFlow(), i * 1800);
        const iv = setInterval(() => {
            if (flowsRef.current.length < 4) spawnFlow();
        }, 2000);
        return () => clearInterval(iv);
    }, [spawnFlow]);

    /* — canvas sizing — */
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.parentElement!.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;
            const ctx = canvas.getContext("2d");
            if (ctx) ctx.scale(dpr, dpr);
            sizeRef.current = { w: rect.width, h: rect.height };
        };
        resize();
        window.addEventListener("resize", resize);
        animRef.current = requestAnimationFrame(animate);
        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animRef.current);
        };
    }, [animate]);

    return (
        <canvas
            ref={canvasRef}
            className={cn(
                "absolute inset-0 h-full w-full",
                "[mask-image:linear-gradient(to_right,theme(colors.white)_0%,transparent_40%,transparent_60%,theme(colors.white)_100%)]",
                className
            )}
            aria-hidden
        />
    );
}
