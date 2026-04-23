"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, lineGrow, viewportOptions } from "@/lib/animations";
import { experience } from "@/lib/data";
import { ChevronDown, ChevronUp, MapPin, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function RoleBlock({
  role,
  isLast,
}: {
  role: (typeof experience)[0]["roles"][0];
  isLast: boolean;
}) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className={`relative pl-8 ${isLast ? "" : "pb-6"}`}>
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-blue-500 bg-[#020617] z-10">
        {role.current && (
          <span className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-40" />
        )}
      </div>

      <div className="glass glass-hover rounded-xl border border-white/6 p-5 group cursor-pointer"
           onClick={() => setExpanded(!expanded)}>
        {/* Role header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h4 className="font-heading font-semibold text-white text-sm">{role.title}</h4>
              {role.current && (
                <Badge className="bg-green-500/15 text-green-400 border border-green-500/25 text-[10px] px-2 py-0.5">
                  Current
                </Badge>
              )}
            </div>
            <p className="text-slate-500 text-xs mt-0.5">{role.period}</p>
          </div>
          <button className="text-slate-500 hover:text-slate-300 transition-colors shrink-0 mt-0.5">
            {expanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
          </button>
        </div>

        {/* Expandable bullets — #10: hover translateX micro-animation */}
        {expanded && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 space-y-2.5"
          >
            {role.bullets.map((bullet, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-2.5 text-slate-400 text-xs leading-relaxed"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.15 }}
              >
                <CheckCircle2 size={13} className="text-blue-500 shrink-0 mt-0.5" />
                <span dangerouslySetInnerHTML={{
                  __html: bullet
                    // Product / Platform
                    .replace(/K-SMART/g, '<strong class="text-blue-400">K-SMART</strong>')
                    .replace(/Hindu Marriage/g, '<strong class="text-slate-200">Hindu Marriage</strong>')
                    .replace(/Civil Registration/g, '<strong class="text-slate-200">Civil Registration</strong>')
                    .replace(/Rent Module/g, '<strong class="text-slate-200">Rent Module</strong>')
                    .replace(/Property Tax/g, '<strong class="text-slate-200">Property Tax</strong>')
                    .replace(/(Birth, Death & Marriage)/g, '<strong class="text-slate-200">Birth, Death & Marriage</strong>')
                    // Metrics
                    .replace(/35M\+ users/g, '<strong class="text-cyan-400 font-bold">35M+ users</strong>')
                    .replace(/150\+ REST APIs/g, '<strong class="text-slate-200">150+ REST APIs</strong>')
                    .replace(/team of 8/g, '<strong class="text-slate-200">team of 8</strong>')
                    .replace(/24–48 hour/g, '<strong class="text-slate-200">24–48 hour</strong>')
                    // Tech stack
                    .replace(/React Hook Form/g, '<strong class="text-slate-200">React Hook Form</strong>')
                    .replace(/Redux-?Saga/g, '<strong class="text-slate-200">Redux-Saga</strong>')
                    .replace(/Redux middleware/g, '<strong class="text-slate-200">Redux middleware</strong>')
                    .replace(/Puppeteer, Redis, and AWS S3/g, '<strong class="text-slate-200">Puppeteer, Redis, and AWS S3</strong>')
                    .replace(/Redis-based job deduplication/g, '<strong class="text-slate-200">Redis-based job deduplication</strong>')
                    .replace(/S3 caching/g, '<strong class="text-slate-200">S3 caching</strong>')
                    .replace(/K9s/g, '<strong class="text-slate-200">K9s</strong>')
                    .replace(/Kubernetes logs/g, '<strong class="text-slate-200">Kubernetes logs</strong>')
                    .replace(/React component library/g, '<strong class="text-slate-200">React component library</strong>')
                    // Time impact
                    .replace(/sub-second responses/g, '<strong class="text-slate-300">sub-second responses</strong>')
                    .replace(/multi-second rendering/g, '<strong class="text-slate-400 line-through">multi-second rendering</strong>')
                }} />
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>
    </div>
  );
}

function CompanyBlock({ company }: { company: (typeof experience)[0] }) {
  // Company letter avatar — #14 layout note from review
  const initial = company.company.charAt(0);

  return (
    <motion.div variants={fadeInUp} className="relative">
      {/* Company header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/25 flex items-center justify-center text-blue-300 font-heading font-bold text-base shrink-0">
          {initial}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-heading font-bold text-white text-base">{company.company}</h3>
          <div className="flex items-center gap-1 text-slate-500 text-xs mt-0.5">
            <MapPin size={11} />
            <span>{company.location}</span>
          </div>
        </div>
      </div>

      {/* Roles with timeline — #6: increased timeline opacity */}
      <div className="relative ml-2 pl-1">
        {/* Gradient timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-px"
          style={{ background: 'linear-gradient(180deg, #3b82f6 0%, rgba(59,130,246,0.3) 70%, transparent 100%)' }}
        />
        <motion.div
          variants={lineGrow}
          className="absolute left-0 top-0 bottom-0 w-px"
          style={{ background: 'linear-gradient(180deg, #67e8f9 0%, #3b82f6 50%, transparent 100%)' }}
        />
        <div className="space-y-3 pl-1">
          {company.roles.map((role, i) => (
            <RoleBlock
              key={role.title + role.period}
              role={role}
              isLast={i === company.roles.length - 1}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding scroll-mt-20 max-w-7xl mx-auto px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        {/* Header — centered with timeline dot motif */}
        <motion.div variants={fadeInUp} className="mb-8 md:mb-14 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400/50" />
              <span className="w-4 h-px bg-gradient-to-r from-transparent to-blue-400/40" />
              <span className="w-8 h-px bg-gradient-to-r from-blue-500/60 to-transparent" />
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 ring-2 ring-blue-500/30" />
              <span className="w-8 h-px bg-gradient-to-r from-transparent to-blue-500/60" />
              <span className="w-4 h-px bg-gradient-to-r from-blue-400/40 to-transparent" />
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400/50" />
            </div>
          </div>
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Work History
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto" />
          <p className="text-slate-500 text-sm mt-4">5 years of building production-grade applications</p>
        </motion.div>

        {/* Experience timeline */}
        <div className="max-w-3xl mx-auto space-y-8 md:space-y-12">
          {experience.map((company) => (
            <CompanyBlock key={company.company} company={company} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
