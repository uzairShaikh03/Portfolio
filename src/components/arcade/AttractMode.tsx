"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { player } from "@/data/portfolio";

type AttractModeProps = {
  coins: number;
  onInsertCoin: () => void;
  onStart: () => void;
};

export function AttractMode({ coins, onInsertCoin, onStart }: AttractModeProps) {
  const [showPressStart, setShowPressStart] = useState(false);
  const canStart = coins >= 1;

  useEffect(() => {
    if (!canStart) {
      setShowPressStart(false);
      return;
    }
    const timer = setTimeout(() => setShowPressStart(true), 600);
    return () => clearTimeout(timer);
  }, [canStart]);

  useEffect(() => {
    if (!canStart || !showPressStart) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onStart();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [canStart, showPressStart, onStart]);

  return (
    <div className="flex h-full flex-col items-center justify-between py-2 text-center">
      {/* Title */}
      <div className="flex flex-col items-center gap-3 pt-2 sm:gap-4 sm:pt-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <h2 className="font-[family-name:var(--font-pixel)] text-sm text-phosphor text-glow sm:text-lg md:text-xl">
            {player.name}
          </h2>
        </motion.div>
        <p className="font-[family-name:var(--font-arcade)] text-xl text-phosphor-dim sm:text-2xl">
          {player.title}
        </p>
        <p className="max-w-xs font-[family-name:var(--font-arcade)] text-base text-phosphor-dim/80 sm:text-lg">
          {player.tagline}
        </p>
      </div>

      {/* Coin slot area */}
      <div className="flex flex-col items-center gap-4">
        {/* Animated coin */}
        <motion.button
          type="button"
          onClick={onInsertCoin}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="group relative cursor-pointer"
          aria-label="Insert coin"
        >
          <div
            className="coin-spin flex h-12 w-12 items-center justify-center rounded-full border-4 border-amber bg-gradient-to-br from-yellow-300 via-amber to-yellow-600 shadow-[0_0_20px_rgba(255,170,0,0.5)] sm:h-16 sm:w-16"
            style={{ transformStyle: "preserve-3d" }}
          >
            <span className="font-[family-name:var(--font-pixel)] text-[10px] text-yellow-900 sm:text-xs">
              25¢
            </span>
          </div>
          <p className="mt-2 font-[family-name:var(--font-pixel)] text-[8px] text-amber blink group-hover:text-glow-amber sm:text-[10px]">
            INSERT COIN
          </p>
        </motion.button>

        <p className="font-[family-name:var(--font-arcade)] text-lg text-phosphor-dim">
          CREDITS: {coins}
        </p>
      </div>

      {/* Press start */}
      <div className="pb-2 sm:pb-4">
        {canStart && showPressStart ? (
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={onStart}
            className="font-[family-name:var(--font-pixel)] text-[10px] text-cyan blink text-glow-cyan sm:text-sm"
          >
            PRESS START
          </motion.button>
        ) : (
          <p className="font-[family-name:var(--font-arcade)] text-base text-phosphor-dim/50 sm:text-lg">
            {coins < 1 ? "— AWAITING CREDIT —" : "— LOADING —"}
          </p>
        )}
        <p className="mt-3 font-[family-name:var(--font-pixel)] text-[6px] text-phosphor-dim/40 sm:text-[8px]">
          TAP COIN OR PRESS ENTER
        </p>
      </div>
    </div>
  );
}
