"use client";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, scaleIn, viewportOptions } from "@/lib/animations";
import { personalInfo } from "@/lib/data";
import { Mail, Phone, MapPin } from "lucide-react";

const LinkedInIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: "varunkaranda@gmail.com",
    href: `mailto:${personalInfo.email}`,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20 hover:border-blue-500/40",
    iconBg: "bg-blue-500/15 border-blue-500/20",
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "varun-karanda",
    href: personalInfo.linkedin,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20 hover:border-cyan-500/40",
    iconBg: "bg-cyan-500/15 border-cyan-500/20",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 80759 72279",
    href: `tel:${personalInfo.phone}`,
    color: "text-green-400",
    bg: "bg-green-500/10 border-green-500/20 hover:border-green-500/40",
    iconBg: "bg-green-500/15 border-green-500/20",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kannur, Kerala",
    href: null,
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
    iconBg: "bg-purple-500/15 border-purple-500/20",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding scroll-mt-20 max-w-7xl mx-auto px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            <span className="w-8 h-px bg-blue-500/50" />
            Let&apos;s Connect
            <span className="w-8 h-px bg-blue-500/50" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mb-6" />
          <p className="text-slate-400 text-base max-w-lg mx-auto leading-relaxed">
            I&apos;m actively exploring new opportunities. Whether you have a role, a project,
            or just want to chat about React or AI — I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Status badge */}
        <motion.div variants={scaleIn} className="flex justify-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-3 glass border border-green-500/20 px-6 py-3 rounded-full">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
            </span>
            <span className="text-green-400 font-medium text-sm">
              Open to Full-time &amp; Contract Roles
            </span>
          </div>
        </motion.div>

        {/* Contact cards — equal height */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto mb-12 items-stretch"
        >
          {contactCards.map((card, i) => (
            <motion.div
              key={card.label}
              variants={fadeInUp}
              custom={i}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              {card.href ? (
                <a
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center glass border ${card.bg} rounded-2xl p-5 text-center transition-all duration-200 group h-full`}
                >
                  <div className={`w-10 h-10 mb-3 rounded-xl border ${card.iconBg} flex items-center justify-center ${card.color} shrink-0`}>
                    <card.icon size={18} />
                  </div>
                  <p className="text-slate-500 text-xs mb-1.5 shrink-0">{card.label}</p>
                  <p className={`${card.color} text-xs font-medium group-hover:underline leading-snug mt-auto break-all`}>
                    {card.value}
                  </p>
                </a>
              ) : (
                <div className={`flex flex-col items-center glass border ${card.bg} rounded-2xl p-5 text-center cursor-default h-full`}>
                  <div className={`w-10 h-10 mb-3 rounded-xl border ${card.iconBg} flex items-center justify-center ${card.color} shrink-0`}>
                    <card.icon size={18} />
                  </div>
                  <p className="text-slate-500 text-xs mb-1.5 shrink-0">{card.label}</p>
                  <p className={`${card.color} text-xs font-medium leading-snug mt-auto break-all`}>{card.value}</p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeInUp} className="text-center">
          <p className="text-slate-500 text-sm mb-5">
            Prefer a quick chat? My inbox is always open.
          </p>
          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{ scale: 1.06, boxShadow: "0 0 60px rgba(59,130,246,0.6), 0 0 100px rgba(103,232,249,0.3)" }}
            whileTap={{ scale: 0.97 }}
            className="cta-pulse inline-flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-xl transition-all duration-300 text-sm"
          >
            <Mail size={16} />
            Send Me an Email
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
