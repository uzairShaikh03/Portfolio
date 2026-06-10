"use client";

import { useEffect } from "react";
import { player } from "@/data/portfolio";

type AboutScreenProps = {
  onBack: () => void;
};

export function AboutScreen({ onBack }: AboutScreenProps) {
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

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <header className="mb-3 flex items-center justify-between border-b border-phosphor-dim/30 pb-2">
        <h2 className="font-[family-name:var(--font-pixel)] text-[8px] text-amber sm:text-[10px]">
          PLAYER INFO
        </h2>
        <button
          type="button"
          onClick={onBack}
          className="font-[family-name:var(--font-pixel)] text-[6px] text-phosphor-dim hover:text-phosphor sm:text-[8px]"
        >
          ← BACK
        </button>
      </header>

      <div className="flex flex-1 flex-col gap-4 overflow-y-auto sm:flex-row sm:gap-6">
        {/* Character sprite placeholder */}
        <div className="flex shrink-0 flex-col items-center gap-2">
          <div className="flex h-24 w-20 items-end justify-center border-2 border-phosphor-dim/40 bg-black/40 sm:h-32 sm:w-24">
            <div className="mb-1 flex flex-col items-center">
              <div className="h-6 w-6 rounded-sm bg-cyan sm:h-8 sm:w-8" />
              <div className="h-8 w-10 bg-phosphor-dim sm:h-10 sm:w-12" />
              <div className="flex gap-1">
                <div className="h-4 w-3 bg-phosphor-dim sm:h-5 sm:w-4" />
                <div className="h-4 w-3 bg-phosphor-dim sm:h-5 sm:w-4" />
              </div>
            </div>
          </div>
          <p className="font-[family-name:var(--font-pixel)] text-[6px] text-phosphor-dim sm:text-[8px]">
            LVL 99
          </p>
        </div>

        {/* Stats */}
        <div className="flex min-w-0 flex-1 flex-col gap-3">
          <div>
            <p className="font-[family-name:var(--font-pixel)] text-[6px] text-phosphor-dim/60 sm:text-[8px]">
              NAME
            </p>
            <p className="font-[family-name:var(--font-pixel)] text-[8px] text-phosphor text-glow sm:text-[10px]">
              {player.name}
            </p>
          </div>
          <div>
            <p className="font-[family-name:var(--font-pixel)] text-[6px] text-phosphor-dim/60 sm:text-[8px]">
              CLASS
            </p>
            <p className="font-[family-name:var(--font-arcade)] text-lg text-cyan sm:text-xl">
              {player.title}
            </p>
          </div>
          <div>
            <p className="font-[family-name:var(--font-pixel)] text-[6px] text-phosphor-dim/60 sm:text-[8px]">
              LOCATION
            </p>
            <p className="font-[family-name:var(--font-arcade)] text-lg text-phosphor-dim sm:text-xl">
              {player.location}
            </p>
          </div>

          <div className="mt-2 space-y-1">
            {player.bio.map((line) => (
              <p
                key={line}
                className="font-[family-name:var(--font-arcade)] text-sm leading-relaxed text-phosphor-dim sm:text-base"
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
