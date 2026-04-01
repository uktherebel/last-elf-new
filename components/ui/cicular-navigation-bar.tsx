"use client";

import { useState, type ComponentType } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

interface NavItem {
  name: string;
  icon: ComponentType<{ className?: string }>;
  href: string;
}

interface CircularNavigationProps {
  navItems: NavItem[];
  isOpen: boolean;
  onOpenChange: (nextOpen: boolean) => void;
}

export default function CircularNavigation({
  navItems,
  isOpen,
  onOpenChange,
}: CircularNavigationProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  if (!isOpen) return null;

  const radius = 132;

  return (
    <div
      className="fixed inset-0 z-[10000] flex h-screen w-full items-center justify-center bg-black/85"
      onClick={() => onOpenChange(false)}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.92 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="relative aspect-square w-[360px] max-w-[calc(100vw-1.5rem)] rounded-full sm:w-[420px]"
        style={{
          background: "rgba(3, 3, 3, 0.94)",
          border: "1px solid rgba(255, 255, 255, 0.26)",
          boxShadow:
            "inset 0 0 0 1px rgba(255,255,255,0.08), 0 0 40px rgba(0,0,0,0.55)",
        }}
        onClick={(e) => e.stopPropagation()}
        onMouseLeave={() => onOpenChange(false)}
      >
        <button
          onClick={() => onOpenChange(false)}
          className="absolute left-1/2 top-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black"
          aria-label="Close navigation"
        >
          <X className="h-7 w-7" />
        </button>

        {navItems.map((item, index) => {
          const Icon = item.icon;
          const angle =
            navItems.length === 0 ? 0 : (360 / navItems.length) * index - 90;
          const radians = (angle * Math.PI) / 180;
          const x = Math.cos(radians) * radius;
          const y = Math.sin(radians) * radius;

          return (
            <div
              key={item.name}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
              }}
            >
              <Link
                href={item.href}
                className={`flex w-20 flex-col items-center justify-center gap-1 rounded-md px-1 py-1 transition-all duration-150 sm:w-24 ${
                  hoveredItem === item.name
                    ? "scale-105 text-white"
                    : "text-white/90"
                }`}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => onOpenChange(false)}
              >
                <Icon className="h-6 w-6 stroke-[2.25] sm:h-7 sm:w-7" />
                <span className="px-1 text-center text-[11px] font-semibold leading-tight sm:text-xs">
                  {item.name}
                </span>
              </Link>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
