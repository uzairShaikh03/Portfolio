"use client";

import { useEffect } from "react";
import { skills } from "@/data/portfolio";

type SkillsScreenProps = {
  onBack: () => void;
};

function formatScore(score: number) {
  return score.toLocaleString("en-US").padStart(8, "0");
}

export function SkillsScreen({ onBack }: SkillsScreenProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "b" || e.key === "B") {
        e.preventDefault();
        onBack();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onBack]);

  const sorted = [...skills].sort((a, b) => b.score - a.score);

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <header className="mb-2 flex items-center justify-between border-b border-phosphor-dim/30 pb-2">
        <h2 className="font-[family-name:var(--font-pixel)] text-[8px] text-amber sm:text-[10px]">
          HIGH SCORES
        </h2>
        <button
          type="button"
          onClick={onBack}
          className="font-[family-name:var(--font-pixel)] text-[6px] text-phosphor-dim hover:text-phosphor sm:text-[8px]"
        >
          ← BACK
        </button>
      </header>

      <div className="mb-2 grid grid-cols-[2rem_1fr_5rem] gap-x-2 font-[family-name:var(--font-pixel)] text-[6px] text-phosphor-dim/60 sm:text-[8px]">
        <span>#</span>
        <span>PLAYER</span>
        <span className="text-right">SCORE</span>
      </div>

      <ul className="flex-1 overflow-y-auto">
        {sorted.map((skill, index) => (
          <li
            key={skill.name}
            className={`grid grid-cols-[2rem_1fr_5rem] gap-x-2 py-1 font-[family-name:var(--font-arcade)] text-sm sm:text-lg ${
              index === 0 ? "text-amber text-glow-amber" : "text-phosphor-dim"
            }`}
          >
            <span className="font-[family-name:var(--font-pixel)] text-[8px] sm:text-[10px]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="truncate">
              {skill.initials} — {skill.name}
            </span>
            <span className="text-right font-[family-name:var(--font-pixel)] text-[8px] sm:text-[10px]">
              {formatScore(skill.score)}
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-2 text-center font-[family-name:var(--font-pixel)] text-[6px] text-phosphor-dim/40 sm:text-[8px]">
        — ALL TIME LEADERBOARD —
      </p>
    </div>
  );
}
