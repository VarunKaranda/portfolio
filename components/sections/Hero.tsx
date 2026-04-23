"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, MapPin } from "lucide-react";

const LinkedInIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
import { personalInfo, stats } from "@/lib/data";

// ── Typewriter hook ──────────────────────────────────────────
function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const current = words[index];
    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && subIndex === 0) {
      const t = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }, speed / 2);
      return () => clearTimeout(t);
    }
    const t = setTimeout(
      () => {
        setSubIndex((s) => (deleting ? s - 1 : s + 1));
        setText(current.substring(0, deleting ? subIndex - 1 : subIndex + 1));
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(t);
  }, [subIndex, deleting, index, words, speed, pause]);

  return text;
}

// ── Count-up hook ────────────────────────────────────────────
function useCountUp(target: number, duration = 1400, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// ── Stable particles (no Math.random → no hydration mismatch) ─
const PARTICLES = [
  { w: 2.1, h: 2.1, l: 5,  t: 15, d: 6.2, delay: 0.5, op: 0.5, c: "#3b82f6" },
  { w: 1.5, h: 1.5, l: 18, t: 72, d: 8.1, delay: 2.1, op: 0.7, c: "#67e8f9" },
  { w: 3.0, h: 3.0, l: 32, t: 38, d: 5.4, delay: 1.3, op: 0.4, c: "#818cf8" },
  { w: 1.8, h: 1.8, l: 48, t: 55, d: 7.8, delay: 3.2, op: 0.6, c: "#3b82f6" },
  { w: 2.5, h: 2.5, l: 61, t: 22, d: 9.0, delay: 0.8, op: 0.5, c: "#67e8f9" },
  { w: 1.2, h: 1.2, l: 75, t: 80, d: 6.6, delay: 2.7, op: 0.7, c: "#818cf8" },
  { w: 2.8, h: 2.8, l: 88, t: 45, d: 4.8, delay: 1.9, op: 0.4, c: "#3b82f6" },
  { w: 1.6, h: 1.6, l: 12, t: 90, d: 7.2, delay: 0.3, op: 0.6, c: "#67e8f9" },
  { w: 2.3, h: 2.3, l: 26, t: 63, d: 8.4, delay: 3.5, op: 0.5, c: "#818cf8" },
  { w: 1.9, h: 1.9, l: 40, t: 10, d: 5.9, delay: 1.6, op: 0.7, c: "#3b82f6" },
  { w: 2.6, h: 2.6, l: 55, t: 87, d: 9.3, delay: 2.4, op: 0.4, c: "#67e8f9" },
  { w: 1.4, h: 1.4, l: 68, t: 33, d: 6.0, delay: 0.9, op: 0.6, c: "#818cf8" },
  { w: 2.0, h: 2.0, l: 82, t: 68, d: 7.5, delay: 3.0, op: 0.5, c: "#3b82f6" },
  { w: 3.0, h: 3.0, l: 95, t: 18, d: 8.7, delay: 1.2, op: 0.7, c: "#67e8f9" },
  { w: 1.7, h: 1.7, l: 8,  t: 48, d: 5.1, delay: 2.9, op: 0.4, c: "#818cf8" },
  { w: 2.4, h: 2.4, l: 22, t: 75, d: 6.8, delay: 0.6, op: 0.6, c: "#3b82f6" },
  { w: 1.3, h: 1.3, l: 36, t: 28, d: 9.6, delay: 3.7, op: 0.5, c: "#67e8f9" },
  { w: 2.9, h: 2.9, l: 52, t: 92, d: 7.0, delay: 1.8, op: 0.7, c: "#818cf8" },
  { w: 1.1, h: 1.1, l: 72, t: 12, d: 4.5, delay: 2.2, op: 0.4, c: "#3b82f6" },
  { w: 2.7, h: 2.7, l: 90, t: 58, d: 8.0, delay: 0.4, op: 0.6, c: "#67e8f9" },
];

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="particle absolute rounded-full"
          style={{
            width: `${p.w}px`, height: `${p.h}px`,
            left: `${p.l}%`, top: `${p.t}%`,
            background: p.c,
            animationDuration: `${p.d}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.op,
          }}
        />
      ))}
    </div>
  );
}

// ── Stat card ────────────────────────────────────────────────
// #4: color per stat index
const statColors = [
  "text-blue-400",   // Years Experience
  "text-cyan-400",   // Users Supported — most impressive, pops
  "text-purple-400", // REST APIs
  "text-slate-200",  // Service Modules — least impactful, neutral
];

function StatCard({ stat, index }: { stat: (typeof stats)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(stat.value, 1400, visible);
  const color = statColors[index] ?? "text-white";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }}
      className="glass glass-hover rounded-xl p-3 text-center cursor-default"
    >
      <div className={`text-xl font-heading font-bold leading-tight ${color}`}>
        {count}{stat.suffix}
      </div>
      <div className="text-[10px] text-slate-400 font-medium tracking-wide uppercase mt-0.5 leading-tight">
        {stat.label}
      </div>
    </motion.div>
  );
}

// ── Hero ─────────────────────────────────────────────────────
export default function Hero() {
  const typed = useTypewriter(personalInfo.taglines);

  return (
    /*
     * Layout: full-screen flex column
     *  ┌────────────────────────────────┐
     *  │  [flex-1]  centered content    │  ← grows to fill space between navbar & scroll cue
     *  │                                │
     *  │  [shrink-0] scroll indicator   │  ← always pinned at the true bottom
     *  └────────────────────────────────┘
     *
     * pt-16 = clears the 64px fixed navbar.
     * Content is vertically centered inside flex-1 so it sits naturally.
     */
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden grid-flow"
    >
      {/* ── Ambient gradients ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-15"
          style={{ background: "radial-gradient(circle, #3b82f6, transparent)" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-[100px] opacity-10"
          style={{ background: "radial-gradient(circle, #818cf8, transparent)" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full blur-[80px] opacity-8"
          style={{ background: "radial-gradient(circle, #67e8f9, transparent)" }}
        />
      </div>

      <Particles />

      {/* ── Main content (vertically centered, clears navbar) ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-16 px-6">
        <div className="max-w-4xl w-full mx-auto text-center">

          {/* Status badge — #8 enlarged + glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 glass border border-green-500/30 text-green-400 text-sm font-semibold px-5 py-2.5 rounded-full mb-6"
            style={{ boxShadow: '0 0 24px rgba(34,197,94,0.2), 0 0 48px rgba(34,197,94,0.08)' }}
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Open to New Opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-3"
          >
            <span className="text-white">{personalInfo.name.split(" ")[0]} </span>
            <span className="text-gradient">{personalInfo.name.split(" ")[1]}</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="text-lg md:text-xl font-heading font-medium text-slate-400 mb-2 h-8 flex items-center justify-center"
          >
            <span className="text-slate-200">{typed}</span>
            <span className="cursor-blink text-blue-400 ml-0.5">|</span>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.4 }}
            className="flex items-center justify-center gap-1.5 text-slate-500 text-sm mb-6"
          >
            <MapPin size={12} />
            <span>{personalInfo.location}</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 28px rgba(59,130,246,0.3)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-7 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors duration-200 text-sm cursor-pointer"
            >
              View My Work
            </motion.button>
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-2.5 glass glass-hover text-slate-200 font-semibold rounded-xl transition-all duration-200 text-sm cursor-pointer inline-flex items-center gap-2"
            >
              <Mail size={14} />
              Get In Touch
            </motion.a>
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-3.5 py-2.5 glass glass-hover text-slate-400 hover:text-blue-400 rounded-xl transition-all duration-200 cursor-pointer"
              title="LinkedIn"
            >
              <LinkedInIcon size={17} />
            </motion.a>
          </motion.div>

          {/* Stats — 2 cols on mobile, 4 on md+ */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-xl mx-auto">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator — lives OUTSIDE flex-1, pinned to real bottom ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="relative z-10 flex flex-col items-center gap-1 pb-5 text-slate-400 pointer-events-none shrink-0"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
