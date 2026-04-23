"use client";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, staggerContainerFast, viewportOptions } from "@/lib/animations";
import { certifications } from "@/lib/data";
import { ExternalLink, BadgeCheck, CircleDashed } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding scroll-mt-20 max-w-7xl mx-auto px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        {/* Header — centered with badge icon above — #2 */}
        <motion.div variants={fadeInUp} className="mb-8 md:mb-14 text-center">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/25 mb-4">
            <BadgeCheck size={18} className="text-blue-400" />
          </div>
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Credentials
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto" />
          <p className="text-slate-500 text-sm mt-4">
            Advancing into AI — certified by Microsoft, Anthropic, Google &amp; DeepLearning.AI
          </p>
        </motion.div>

        {/* Cert grid */}
        <motion.div
          variants={staggerContainerFast}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              variants={fadeInUp}
              custom={i}
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ duration: 0.25 }}
              className={`relative glass border border-white/8 rounded-2xl p-5 group cursor-default overflow-hidden`}
            >
              {/* Gradient bg */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-60`} />

              <div className="relative z-10">
                {/* Icon + verified — #9: consistent layout, CircleDashed for unverified */}
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{cert.icon}</span>
                  {cert.verified ? (
                    <BadgeCheck size={16} className="text-blue-400 mt-1" />
                  ) : (
                  <CircleDashed size={16} className="text-slate-600 mt-1" aria-label="No credential link" />
                  )}
                </div>

                {/* Cert name */}
                <h3 className="font-heading font-semibold text-white text-sm leading-snug mb-2 group-hover:text-blue-300 transition-colors">
                  {cert.name}
                </h3>

                {/* Issuer */}
                <p className="text-slate-500 text-xs mb-4">— {cert.issuer}</p>

                {/* Credential link — always renders a slot for consistent height */}
                <div className="h-5 flex items-center">
                  {cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-xs font-medium transition-colors"
                    >
                      <ExternalLink size={11} />
                      View Credential
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-slate-600 text-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500/60" />
                      In Progress
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* AI focus note */}
        <motion.div
          variants={fadeInUp}
          className="mt-6 md:mt-10 glass rounded-xl p-4 border border-purple-500/15 flex items-center gap-4"
        >
          <div className="text-2xl">🚀</div>
          <div>
            <p className="text-slate-300 text-sm font-medium mb-0.5">
              Deep focus on AI &amp; Agentic Workflows
            </p>
            <p className="text-slate-500 text-xs">
              Committed to staying at the frontier — combining 5 years of production frontend expertise
              with emerging AI capabilities to build smarter, more autonomous applications.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
