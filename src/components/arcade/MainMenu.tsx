"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { menuItems, type MenuItem } from "@/data/portfolio";

type MainMenuProps = {
  selectedIndex: number;
  onSelect: (item: MenuItem) => void;
  onNavigate: (direction: "up" | "down") => void;
  onHoverIndex: (index: number) => void;
};

export function MainMenu({
  selectedIndex,
  onSelect,
  onNavigate,
  onHoverIndex,
}: MainMenuProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") {
        e.preventDefault();
        onNavigate("up");
      } else if (e.key === "ArrowDown" || e.key === "s" || e.key === "S") {
        e.preventDefault();
        onNavigate("down");
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onSelect(menuItems[selectedIndex]);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, onSelect, onNavigate]);

  return (
    <div className="flex h-full flex-col justify-center gap-1 py-2 sm:gap-2">
      <p className="mb-4 text-center font-[family-name:var(--font-pixel)] text-[8px] text-amber text-glow-amber sm:mb-6 sm:text-[10px]">
        MAIN MENU
      </p>

      <ul className="flex flex-col gap-2 sm:gap-3">
        {menuItems.map((item, index) => {
          const isSelected = index === selectedIndex;
          return (
            <li key={item.id}>
              <motion.button
                type="button"
                onClick={() => onSelect(item)}
                onMouseEnter={() => onHoverIndex(index)}
                animate={{
                  x: isSelected ? 8 : 0,
                  color: isSelected ? "#33ff33" : "#1a8c1a",
                }}
                className="flex w-full items-center gap-3 px-2 py-1 text-left font-[family-name:var(--font-arcade)] text-xl sm:gap-4 sm:text-2xl"
              >
                <span
                  className={`font-[family-name:var(--font-pixel)] text-[10px] sm:text-xs ${
                    isSelected ? "text-phosphor text-glow" : "text-transparent"
                  }`}
                >
                  ▶
                </span>
                <span className={isSelected ? "text-glow" : ""}>
                  {item.icon} {item.label}
                </span>
              </motion.button>
            </li>
          );
        })}
      </ul>

      <p className="mt-6 text-center font-[family-name:var(--font-pixel)] text-[6px] text-phosphor-dim/50 sm:mt-8 sm:text-[8px]">
        ↑↓ TO MOVE — ENTER TO SELECT
      </p>
    </div>
  );
}
