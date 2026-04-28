"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { staggerContainer, fadeInUp, viewportOptions } from "@/lib/animations";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Lock } from "lucide-react";

function ProjectCard({ project, index, isLast }: { project: (typeof projects)[0]; index: number; isLast?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { stiffness: 200, damping: 20 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(relX);
    y.set(relY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // span full width if featured OR if it’s the last card in an odd-count grid
  const spanFull = project.featured || isLast;

  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      className={`relative ${spanFull ? "md:col-span-2" : ""}`}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d" as const,
          ...(project.featured
            ? { boxShadow: "0 0 0 1px rgba(59,130,246,0.4), 0 0 40px rgba(59,130,246,0.15), 0 0 80px rgba(59,130,246,0.05)" }
            : {}),
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className={`relative glass border rounded-2xl overflow-hidden cursor-default group h-full ${
          project.featured
            ? "border-blue-500/50"
            : `${project.borderColor}`
        }`}
      >
        {/* Gradient bg */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50`} />

        {/* Extra glow layer on featured — #3 */}
        {project.featured && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/8 to-cyan-600/8" />
        )}

        <div className="relative z-10 p-6">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-start gap-3">
              {/* Larger icon on featured — #3 */}
              <span className={`${project.featured ? "text-4xl" : "text-3xl"}`}>{project.icon}</span>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-heading font-bold text-white text-base leading-tight">
                    {project.name}
                  </h3>
                  {project.featured && (
                    <Badge className="bg-blue-500/20 text-blue-300 border border-blue-500/30 text-[10px] px-2 py-0.5">
                      Featured
                    </Badge>
                  )}
                </div>
                <p className="text-slate-500 text-xs mt-0.5 italic">{project.tag}</p>
              </div>
            </div>
            {/* Live link OR Private badge — never a dead icon */}
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                title="View Live Site"
                className="text-slate-500 hover:text-blue-400 transition-colors shrink-0 mt-1"
              >
                <ExternalLink size={14} />
              </a>
            ) : (
              <span className="inline-flex items-center gap-1 text-slate-600 text-[10px] font-medium shrink-0 mt-1 select-none">
                <Lock size={10} />
                Private
              </span>
            )}
          </div>

          {/* Description — looser leading on featured */}
          <p 
            className={`text-slate-400 text-sm mb-5 ${project.featured ? "leading-loose" : "leading-relaxed"}`}
            dangerouslySetInnerHTML={{
              __html: project.description
                // Metrics
                .replace(/35M\+ users/g, '<strong class="text-cyan-400 font-bold">35M+ users</strong>')
                // Tech stack
                .replace(/Puppeteer, Redis, and AWS S3/g, '<strong class="text-slate-200">Puppeteer, Redis, and AWS S3</strong>')
                .replace(/Puppeteer/g, '<strong class="text-slate-200">Puppeteer</strong>')
                .replace(/Redis/g, '<strong class="text-slate-200">Redis</strong>')
                .replace(/AWS S3/g, '<strong class="text-slate-200">AWS S3</strong>')
                // Key concepts
                .replace(/caching and request deduplication/gi, '<strong class="text-slate-300">caching and request deduplication</strong>')
            }}
          />

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] font-medium bg-white/5 border border-white/10 text-slate-400 px-2.5 py-1 rounded-md"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding scroll-mt-20 max-w-7xl mx-auto px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        {/* Header — centered with oversized faint number behind */}
        <motion.div variants={fadeInUp} className="mb-8 md:mb-14 relative text-center">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[120px] font-heading font-black text-white/[0.025] leading-none select-none pointer-events-none">
            01
          </div>
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3 relative">
            What I&apos;ve Built
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 relative">
            Key Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto" />
          <p className="text-slate-500 text-sm mt-4">
            Production systems built at scale — from government platforms to global marketplaces
          </p>
        </motion.div>

        {/* Bento grid */}
        <div
          className="grid md:grid-cols-2 gap-5"
          style={{ perspective: "1200px" }}
        >
          {projects.map((project, i) => {
            // Detect if this non-featured card is the last in an odd-count non-featured group
            const nonFeaturedProjects = projects.filter(p => !p.featured);
            const nonFeaturedIndex = nonFeaturedProjects.indexOf(project);
            const isLastOdd = !project.featured
              && nonFeaturedProjects.length % 2 !== 0
              && nonFeaturedIndex === nonFeaturedProjects.length - 1;
            return (
              <ProjectCard
                key={project.name}
                project={project}
                index={i}
                isLast={isLastOdd}
              />
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
