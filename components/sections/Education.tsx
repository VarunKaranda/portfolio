"use client";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, scaleIn, viewportOptions } from "@/lib/animations";
import { education } from "@/lib/data";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="section-padding max-w-7xl mx-auto px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-8 md:mb-14">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Academic Background
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto" />
        </motion.div>

        {/* Education card */}
        <motion.div variants={scaleIn} className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-sm" />
            <div className="relative glass border border-white/10 rounded-2xl p-5 md:p-8 flex flex-col sm:flex-row gap-5 items-start">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-blue-500/15 border border-blue-500/25 flex items-center justify-center shrink-0">
                <GraduationCap size={28} className="text-blue-400" />
              </div>

              {/* Details */}
              <div className="flex-1">
                <h3 className="font-heading font-bold text-white text-xl mb-1">
                  {education.degree}
                </h3>
                <p className="text-slate-300 font-medium text-sm mb-4">
                  {education.college}
                </p>
                <div className="flex flex-wrap gap-4 text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={12} className="text-blue-500" />
                    <span>{education.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} className="text-blue-500" />
                    <span>{education.years}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
