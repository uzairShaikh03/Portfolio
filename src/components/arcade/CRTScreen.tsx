"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type CRTScreenProps = {
  children: ReactNode;
  className?: string;
};

export function CRTScreen({ children, className = "" }: CRTScreenProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-sm bg-screen-bg ${className}`}
      style={{
        background:
          "radial-gradient(ellipse at center, #0d220d 0%, #061006 60%, #020502 100%)",
      }}
    >
      <div className="crt-flicker relative z-10 h-full w-full p-3 sm:p-4 md:p-6">
        {children}
      </div>

      {/* Scanlines */}
      <div className="scanline-overlay absolute inset-0 z-20" />

      {/* Screen curvature vignette */}
      <div
        className="pointer-events-none absolute inset-0 z-20"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      {/* Phosphor glow overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-20 mix-blend-screen opacity-[0.03]"
        style={{
          background: "repeating-linear-gradient(0deg, #33ff33 0px, transparent 1px, transparent 3px)",
        }}
      />
    </div>
  );
}

export function ScreenTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}
