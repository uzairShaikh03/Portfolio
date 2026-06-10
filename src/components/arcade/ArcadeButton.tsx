"use client";

import { motion } from "framer-motion";

type ArcadeButtonProps = {
  label: string;
  color?: "red" | "blue" | "yellow" | "green";
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const colorMap = {
  red: "bg-red-600 shadow-[0_4px_0_#8b0000,inset_0_2px_4px_rgba(255,255,255,0.3)]",
  blue: "bg-blue-600 shadow-[0_4px_0_#003d82,inset_0_2px_4px_rgba(255,255,255,0.3)]",
  yellow: "bg-yellow-500 shadow-[0_4px_0_#b8860b,inset_0_2px_4px_rgba(255,255,255,0.3)]",
  green: "bg-green-600 shadow-[0_4px_0_#1a5c1a,inset_0_2px_4px_rgba(255,255,255,0.3)]",
};

const sizeMap = {
  sm: "h-8 w-8",
  md: "h-10 w-10 sm:h-12 sm:w-12",
  lg: "h-14 w-14 sm:h-16 sm:w-16",
};

export function ArcadeButton({
  label,
  color = "red",
  onClick,
  size = "md",
  className = "",
}: ArcadeButtonProps) {
  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <motion.button
        type="button"
        aria-label={label}
        onClick={onClick}
        whileTap={{ y: 3, boxShadow: "0 1px 0 #000" }}
        className={`rounded-full ${colorMap[color]} ${sizeMap[size]} border-2 border-black/40 transition-shadow`}
      />
      <span className="font-[family-name:var(--font-pixel)] text-[6px] text-gray-400 sm:text-[8px]">
        {label}
      </span>
    </div>
  );
}
