"use client";
import { motion } from "framer-motion";
import { personalInfo, experience, skills, certifications, projects } from "@/lib/data";
import {
  Mail, Phone, MapPin, Heart, ArrowUp,
  Code2, ExternalLink, Briefcase, Award,
  FolderOpen, GraduationCap, User, Wrench,
} from "lucide-react";

// ── Icons ────────────────────────────────────────────────────
const LinkedInIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// ── Data ─────────────────────────────────────────────────────
const navSections = [
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Wrench },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: FolderOpen },
  { label: "Certifications", href: "#certifications", icon: Award },
  { label: "Education", href: "#education", icon: GraduationCap },
  { label: "Contact", href: "#contact", icon: Mail },
];

const techStack = [
  { name: "Next.js 15", href: "https://nextjs.org", badge: "Framework" },
  { name: "TypeScript", href: "https://www.typescriptlang.org", badge: "Language" },
  { name: "Tailwind CSS 4", href: "https://tailwindcss.com", badge: "Styling" },
  { name: "Framer Motion", href: "https://www.framer.com/motion", badge: "Animation" },
  { name: "shadcn/ui", href: "https://ui.shadcn.com", badge: "Components" },
  { name: "Vercel", href: "https://vercel.com", badge: "Hosting" },
];

const highlights = [
  { value: "5+", label: "Years Experience", color: "text-blue-400" },
  { value: "35M+", label: "Users Served", color: "text-cyan-400" },
  { value: "150+", label: "APIs Integrated", color: "text-purple-400" },
  { value: `${certifications.length}`, label: "Certifications", color: "text-amber-400" },
  { value: `${projects.length}`, label: "Key Projects", color: "text-green-400" },
  { value: `${Object.values(skills).flat().length}+`, label: "Technologies", color: "text-rose-400" },
];

// ── Footer ───────────────────────────────────────────────────
export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/8 bg-[#020617]">
      {/* Top gradient glow — w-full prevents overflow at <600px viewports */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.5), rgba(103,232,249,0.5), transparent)" }}
      />

      {/* ── Stats bar ── */}
      <div className="border-b border-white/5 py-6 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-4"
          >
            {highlights.map((h) => (
              <div key={h.label} className="text-center">
                <div className={`font-heading font-bold text-xl ${h.color}`}>{h.value}</div>
                <div className="text-slate-600 text-[10px] uppercase tracking-wider mt-0.5">{h.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Main footer grid ── */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >

          {/* ── Col 1: Brand ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-heading text-2xl font-bold mb-4 cursor-pointer inline-block"
            >
              <span className="text-gradient">Varun</span>
              <span className="text-slate-400 text-lg font-normal ml-1">.Karanda</span>
            </button>

            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              Frontend Engineer crafting scalable, production-grade web applications
              with React &amp; modern JS. Core contributor to K-SMART serving 35M+ users.
            </p>

            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 bg-green-500/8 border border-green-500/20 px-3 py-1.5 rounded-full mb-5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
              </span>
              <span className="text-green-400 text-xs font-medium">Open to opportunities</span>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-9 h-9 rounded-xl glass border border-white/8 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-200"
                title="Email"
              >
                <Mail size={15} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl glass border border-white/8 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200"
                title="LinkedIn"
              >
                <LinkedInIcon size={15} />
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="w-9 h-9 rounded-xl glass border border-white/8 flex items-center justify-center text-slate-400 hover:text-green-400 hover:border-green-500/30 transition-all duration-200"
                title="Phone"
              >
                <Phone size={15} />
              </a>
            </div>
          </div>

          {/* ── Col 2: Navigation ── */}
          <div>
            <p className="text-white text-xs font-bold tracking-widest uppercase mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {navSections.map((s) => (
                <li key={s.label}>
                  <button
                    onClick={() => scrollTo(s.href)}
                    className="text-slate-500 hover:text-blue-400 text-sm transition-all duration-200 cursor-pointer flex items-center gap-2.5 group w-full"
                  >
                    <s.icon
                      size={13}
                      className="text-slate-700 group-hover:text-blue-400 transition-colors shrink-0"
                    />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                      {s.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Contact ── */}
          <div>
            <p className="text-white text-xs font-bold tracking-widest uppercase mb-5">
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-slate-500 hover:text-blue-400 text-sm transition-colors duration-200 flex items-start gap-2.5 group"
                >
                  <Mail size={13} className="text-slate-700 group-hover:text-blue-400 transition-colors shrink-0 mt-0.5" />
                  <span className="break-all">{personalInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-cyan-400 text-sm transition-colors duration-200 flex items-start gap-2.5 group"
                >
                  <LinkedInIcon size={13} />
                  <span>linkedin.com/in/varun-karanda</span>
                  <ExternalLink size={10} className="text-slate-700 group-hover:text-slate-400 transition-colors shrink-0 mt-0.5 ml-auto" />
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-slate-500 hover:text-green-400 text-sm transition-colors duration-200 flex items-center gap-2.5 group"
                >
                  <Phone size={13} className="text-slate-700 group-hover:text-green-400 transition-colors shrink-0" />
                  {personalInfo.phone}
                </a>
              </li>
              <li>
                <span className="text-slate-600 text-sm flex items-center gap-2.5">
                  <MapPin size={13} className="text-slate-700 shrink-0" />
                  {personalInfo.location}
                </span>
              </li>
            </ul>

            {/* Resume download */}
            <div className="mt-6">
              <a
                href="/Varun_Karanda_Resume.pdf"
                download
                className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 border border-blue-500/25 bg-blue-500/8 hover:bg-blue-500/15 hover:border-blue-500/40 px-4 py-2 rounded-lg transition-all duration-200"
              >
                <ArrowUp size={12} className="rotate-180" />
                Download Resume
              </a>
            </div>
          </div>

          {/* ── Col 4: Built With ── */}
          <div>
            <p className="text-white text-xs font-bold tracking-widest uppercase mb-5">
              Built With
            </p>
            <ul className="space-y-3">
              {techStack.map((tech) => (
                <li key={tech.name}>
                  <a
                    href={tech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 group"
                  >
                    <Code2 size={13} className="text-slate-700 group-hover:text-blue-400 transition-colors shrink-0" />
                    <span className="text-slate-500 group-hover:text-slate-300 text-sm transition-colors duration-200 flex-1">
                      {tech.name}
                    </span>
                    <span className="text-[9px] font-medium text-slate-700 bg-white/5 border border-white/8 px-1.5 py-0.5 rounded group-hover:text-slate-500 transition-colors">
                      {tech.badge}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/5 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Varun Karanda &middot; Built with{" "}
            <Heart size={10} className="text-red-500 fill-red-500 inline mx-0.5" />
            {" "}in Kerala, India.
          </p>

          <div className="flex items-center gap-5">
            <span className="text-xs text-slate-700 hidden sm:block">
              {experience.reduce((acc, c) => acc + c.roles.length, 0)} roles &middot; {projects.length} projects &middot; {certifications.length} certifications
            </span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-blue-400 transition-colors cursor-pointer group border border-white/8 hover:border-blue-500/30 px-3 py-1.5 rounded-lg glass"
            >
              <ArrowUp size={11} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
