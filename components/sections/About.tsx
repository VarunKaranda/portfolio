"use client";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, staggerContainer, viewportOptions } from "@/lib/animations";
import { personalInfo } from "@/lib/data";
import { Sparkles, Code2, Brain, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "React Ecosystem Expert",
    desc: "Deep expertise in Redux, React Hook Form, complex state management architectures and multi-step form workflows.",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
    glow: "rgba(59,130,246,0.12)",
  },
  {
    icon: Sparkles,
    title: "Gov-Scale Engineering",
    desc: "Core contributor to K-SMART — Kerala's flagship e-governance platform serving 35M+ users.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
    glow: "rgba(103,232,249,0.12)",
  },
  {
    icon: Brain,
    title: "AI-Augmented Developer",
    desc: "Expanding into LangChain, LLM apps, and agentic AI — certified by Anthropic, Google & DeepLearning.AI.",
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
    glow: "rgba(168,85,247,0.12)",
  },
];

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    display: "varunkaranda@gmail.com",
    href: `mailto:${personalInfo.email}`,
    color: "text-blue-400",
  },
  {
    icon: Phone,
    label: "Phone",
    display: "+91 80759 72279",
    href: `tel:${personalInfo.phone}`,
    color: "text-green-400",
  },
  {
    icon: ExternalLink,
    label: "LinkedIn",
    display: "linkedin.com/in/varun-karanda",
    href: personalInfo.linkedin,
    color: "text-cyan-400",
  },
  {
    icon: MapPin,
    label: "Location",
    display: "Kannur, Kerala, India",
    href: null,
    color: "text-purple-400",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding scroll-mt-20 max-w-7xl mx-auto px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        {/* Section header */}
        <motion.div variants={fadeInUp} className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-lg">👋</span>
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase">
              Who I Am
            </p>
            <span className="text-lg">👋</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-start">

          {/* ── Left: Bio card ── */}
          <motion.div variants={fadeInLeft} className="flex flex-col gap-5">
            {/* Profile card */}
            <div className="relative">
              <div className="absolute -inset-px bg-gradient-to-r from-blue-600/40 to-cyan-400/40 rounded-2xl blur opacity-30" />
              <div className="relative glass rounded-2xl p-6 border border-white/10">
                {/* Identity row */}
                <div className="flex items-center gap-4 mb-5 pb-5 border-b border-white/8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/30 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center text-2xl shrink-0">
                    👨‍💻
                  </div>
                  <div>
                    <p className="text-white font-bold font-heading text-lg leading-tight">
                      {personalInfo.name}
                    </p>
                    <p className="text-blue-400 text-sm font-medium mt-0.5">
                      {personalInfo.title}
                    </p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-green-400 text-xs">Open to Opportunities</span>
                    </div>
                  </div>
                </div>

                {/* Summary — split into two paragraphs for breathing room */}
                <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
                  <p>
                    Frontend Engineer with <strong className="text-white">5 years</strong> of experience building
                    scalable, production-grade web applications using React and modern JavaScript ecosystems.
                  </p>
                  <p>
                    Core contributor to <strong className="text-blue-400">K-SMART</strong> — a state-scale platform
                    serving <strong className="text-cyan-400">35M+ users</strong>. Strong expertise in complex form workflows,
                    state management, and large-scale API integrations.
                  </p>
                  <p>
                    Currently exploring AI-powered applications using{" "}
                    <strong className="text-purple-400">LangChain and agentic workflows</strong>.
                  </p>
                </div>

                {/* Currently badge */}
                <div className="mt-5 inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium px-3 py-2 rounded-full">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
                  Currently exploring: Agentic AI &amp; LLM Applications
                </div>
              </div>
            </div>

            {/* Contact mini-cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {contactItems.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 glass border border-white/8 hover:border-blue-500/25 rounded-xl p-3 transition-all duration-200 group"
                    >
                      <div className={`${item.color} shrink-0`}>
                        <item.icon size={14} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-slate-600 text-[10px] uppercase tracking-wider">{item.label}</p>
                        <p className={`${item.color} text-xs font-medium truncate group-hover:underline`}>{item.display}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 glass border border-white/8 rounded-xl p-3">
                      <div className={`${item.color} shrink-0`}>
                        <item.icon size={14} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-slate-600 text-[10px] uppercase tracking-wider">{item.label}</p>
                        <p className={`${item.color} text-xs font-medium truncate`}>{item.display}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Highlight cards ── */}
          <motion.div variants={staggerContainer} className="flex flex-col gap-4">
            {/* Top label */}
            <motion.p variants={fadeInUp} className="text-slate-500 text-xs font-semibold tracking-widest uppercase">
              What makes me stand out
            </motion.p>

            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                variants={fadeInUp}
                custom={i}
                whileHover={{ y: -2, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className={`glass glass-hover rounded-xl p-5 border ${h.bg} cursor-default`}
                style={{ boxShadow: `0 4px 24px ${h.glow}` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-9 h-9 rounded-lg ${h.bg} border flex items-center justify-center ${h.color} shrink-0`}>
                    <h.icon size={17} />
                  </div>
                  <div>
                    <p className={`font-heading font-semibold ${h.color} mb-1.5 text-sm`}>
                      {h.title}
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quote/value prop */}
            <motion.div
              variants={fadeInUp}
              className="glass border border-white/5 rounded-xl p-4 mt-1"
            >
              <p className="text-slate-500 text-xs leading-relaxed italic">
                &ldquo;I build things that scale — from zero to 35M+ users. Now I&apos;m pairing that production
                expertise with AI to build the next generation of smarter applications.&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
