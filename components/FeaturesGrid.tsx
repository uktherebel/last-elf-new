"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sword, Scroll, User } from "lucide-react";

const features = [
  {
    icon: Sword,
    title: "Third-Person Combat",
    description: "Real-time melee. Dodge, strike, execute. Feel every hit.",
  },
  {
    icon: Scroll,
    title: "Dark Fantasy Story",
    description: "A short, focused narrative inspired by classic RPGs.",
  },
  {
    icon: User,
    title: "Solo, Story-First",
    description: "No PvP. No gacha. One character. One definitive journey.",
  },
];

export default function FeaturesGrid() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const swordY = useTransform(scrollYProgress, [0, 1], ["-22%", "10%"]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-black text-white overflow-hidden"
      id="features"
    >
      {/* Sword scroll background */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-70">
        <motion.svg
          width="120%"
          height="120%"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid meet"
          className="absolute left-1/2 top-[-10%] -translate-x-1/2"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="bladeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e6eef7" />
              <stop offset="35%" stopColor="#cfd8e4" />
              <stop offset="65%" stopColor="#a9b4c4" />
              <stop offset="100%" stopColor="#dce6f3" />
            </linearGradient>
            <linearGradient id="hiltGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1c1a1f" />
              <stop offset="100%" stopColor="#403d46" />
            </linearGradient>
            <linearGradient id="gold" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#d8b36c" />
              <stop offset="100%" stopColor="#b07f2d" />
            </linearGradient>
            <linearGradient id="scabbardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#120f16" />
              <stop offset="100%" stopColor="#261f2d" />
            </linearGradient>
            <pattern id="scabbardTexture" width="12" height="12" patternUnits="userSpaceOnUse">
              <rect width="12" height="12" fill="url(#scabbardGrad)" />
              <path d="M0 12 L12 0 M-3 9 L3 15 M9 -3 L15 3" stroke="#2f2836" strokeWidth="0.6" opacity="0.35" />
            </pattern>
            <clipPath id="scabbardMouth">
              <rect x="690" y="290" width="60" height="220" rx="18" ry="18" />
            </clipPath>
            <radialGradient id="bgGlow" cx="50%" cy="45%" r="55%">
              <stop offset="0%" stopColor="#182033" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#0b0a0f" stopOpacity="0.9" />
            </radialGradient>
          </defs>

          <g id="bg">
            <rect x="0" y="0" width="1440" height="900" fill="#05050a" />
            <rect x="0" y="0" width="1440" height="900" fill="url(#bgGlow)" />
          </g>

          <g id="scabbard">
            <rect x="690" y="260" width="60" height="360" rx="22" ry="22" fill="url(#scabbardTexture)" stroke="#3b3241" strokeWidth="4" />
            <rect x="686" y="248" width="68" height="36" rx="10" ry="10" fill="url(#gold)" stroke="#7a5720" strokeWidth="3" />
            <rect x="686" y="600" width="68" height="36" rx="10" ry="10" fill="url(#gold)" stroke="#7a5720" strokeWidth="3" />
            <rect x="700" y="276" width="40" height="36" rx="8" ry="8" fill="#0f0d13" opacity="0.6" />
          </g>

          <motion.g id="sword" clipPath="url(#scabbardMouth)" style={{ y: swordY }}>
            <rect x="704" y="70" width="32" height="480" rx="6" ry="6" fill="url(#bladeGrad)" stroke="#c7d2df" strokeWidth="2" />
            <rect x="719" y="70" width="2" height="480" fill="#ffffff" opacity="0.35" />
            <rect x="714" y="96" width="12" height="430" rx="4" ry="4" fill="#b8c2cf" opacity="0.55" />
            <rect x="672" y="530" width="96" height="16" rx="6" ry="6" fill="url(#hiltGrad)" stroke="#4c4654" strokeWidth="2" />
            <rect x="696" y="522" width="48" height="12" rx="4" ry="4" fill="url(#gold)" />
            <rect x="706" y="546" width="20" height="80" rx="6" ry="6" fill="#1d1a21" stroke="#2c2731" strokeWidth="2" />
            <path d="M706 556 h20 M706 572 h20 M706 588 h20 M706 604 h20" stroke="#3d3944" strokeWidth="3" strokeLinecap="round" opacity="0.65" />
            <circle cx="716" cy="634" r="14" fill="url(#gold)" stroke="#7a5720" strokeWidth="3" />
            <circle cx="716" cy="634" r="6" fill="#0f0d13" opacity="0.7" />
          </motion.g>

          <rect x="690" y="290" width="60" height="220" rx="18" ry="18" fill="none" stroke="#5b4a64" strokeWidth="3" opacity="0.6" />
        </motion.svg>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading mb-4 text-neutral-200">
            What is The Last Elf?
          </h2>
          <div className="h-1 w-20 bg-neutral-800 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-4 rounded-full bg-neutral-900 border border-neutral-800 group-hover:border-neutral-600 transition-colors">
                <feature.icon className="w-8 h-8 text-neutral-300" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed max-w-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
