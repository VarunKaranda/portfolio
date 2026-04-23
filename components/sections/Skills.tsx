"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeInUp, viewportOptions } from "@/lib/animations";
import { skills, type SkillCategory } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

const categoryColors: Record<SkillCategory, string> = {
  Frontend: "bg-blue-500/15 text-blue-300 border-blue-500/25 hover:bg-blue-500/25",
  "Backend & APIs": "bg-green-500/15 text-green-300 border-green-500/25 hover:bg-green-500/25",
  Tools: "bg-amber-500/15 text-amber-300 border-amber-500/25 hover:bg-amber-500/25",
  Testing: "bg-purple-500/15 text-purple-300 border-purple-500/25 hover:bg-purple-500/25",
  "AI & Emerging": "bg-cyan-500/15 text-cyan-300 border-cyan-500/25 hover:bg-cyan-500/25",
  Practices: "bg-rose-500/15 text-rose-300 border-rose-500/25 hover:bg-rose-500/25",
};

// Active tab glow colors — #7
const tabGlow: Record<SkillCategory, string> = {
  Frontend: "rgba(59,130,246,0.25)",
  "Backend & APIs": "rgba(34,197,94,0.25)",
  Tools: "rgba(245,158,11,0.25)",
  Testing: "rgba(168,85,247,0.25)",
  "AI & Emerging": "rgba(103,232,249,0.25)",
  Practices: "rgba(244,63,94,0.25)",
};

const tabDots: Record<SkillCategory, string> = {
  Frontend: "bg-blue-400",
  "Backend & APIs": "bg-green-400",
  Tools: "bg-amber-400",
  Testing: "bg-purple-400",
  "AI & Emerging": "bg-cyan-400",
  Practices: "bg-rose-400",
};

const categories = Object.keys(skills) as SkillCategory[];

export default function Skills() {
  const [active, setActive] = useState<SkillCategory>("Frontend");

  return (
    <section id="skills" className="section-padding scroll-mt-20 max-w-7xl mx-auto px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        {/* Header — left-aligned with vertical accent bar — #2 */}
        <motion.div variants={fadeInUp} className="mb-8 md:mb-12 text-center">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            What I Know
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto" />
        </motion.div>

        {/* Tab buttons — #7 improved active state */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-2 mb-6 md:mb-10"
        >
          {categories.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? categoryColors[cat] + " scale-105"
                    : "border-white/8 text-slate-400 hover:text-slate-200 hover:border-white/15"
                }`}
                style={
                  isActive
                    ? {
                        boxShadow: `0 0 0 1px ${tabGlow[cat].replace("0.25", "0.6")}, 0 4px 20px ${tabGlow[cat]}`,
                      }
                    : undefined
                }
              >
                {/* Pulse dot — larger + animated when active */}
                <span
                  className={`rounded-full transition-all duration-200 ${tabDots[cat]} ${
                    isActive ? "w-2 h-2 animate-pulse" : "w-1.5 h-1.5"
                  }`}
                />
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* Skills display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="glass rounded-2xl p-8 border border-white/8 min-h-[180px]"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className={`w-2 h-2 rounded-full ${tabDots[active]} animate-pulse`} />
              <span className="font-heading font-semibold text-white text-sm">{active}</span>
              <span className="text-xs text-slate-500 ml-1">
                — {skills[active].length} technologies
              </span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {skills[active].map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.04, duration: 0.25 }}
                >
                  <Badge
                    className={`${categoryColors[active]} border text-xs font-medium px-3 py-1.5 rounded-lg cursor-default transition-all duration-200`}
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Current focus callout — replaces redundant summary grid */}
        <motion.div
          variants={fadeInUp}
          className="mt-8 grid sm:grid-cols-3 gap-3"
        >
          {[
            { label: "Primary Stack", value: "React · TypeScript · Redux", color: "text-blue-400", dot: "bg-blue-400" },
            { label: "Current Focus", value: "LangChain · Agentic AI · LLMs", color: "text-cyan-400", dot: "bg-cyan-400" },
            { label: "Experience Level", value: "5 Years · Production Scale", color: "text-purple-400", dot: "bg-purple-400" },
          ].map((item) => (
            <div
              key={item.label}
              className="glass border border-white/6 rounded-xl px-5 py-4 flex items-center gap-3"
            >
              <span className={`w-2 h-2 rounded-full shrink-0 ${item.dot}`} />
              <div>
                <p className="text-slate-500 text-[10px] uppercase tracking-wider mb-0.5">{item.label}</p>
                <p className={`${item.color} text-xs font-semibold`}>{item.value}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
