"use client";

import { useEffect } from "react";
import { player } from "@/data/portfolio";

type ContactScreenProps = {
  onBack: () => void;
};

const links = [
  { label: "GITHUB", url: player.links.github, color: "text-phosphor" },
  { label: "LINKEDIN", url: player.links.linkedin, color: "text-cyan" },
  { label: "EMAIL", url: `mailto:${player.links.email}`, color: "text-amber" },
];

export function ContactScreen({ onBack }: ContactScreenProps) {
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
    <div className="relative flex h-full flex-col items-center justify-center text-center">
      <header className="absolute left-3 top-3 right-3 flex items-center justify-between sm:left-4 sm:top-4 sm:right-4">
        <h2 className="font-[family-name:var(--font-pixel)] text-[8px] text-amber sm:text-[10px]">
          CREDITS
        </h2>
        <button
          type="button"
          onClick={onBack}
          className="font-[family-name:var(--font-pixel)] text-[6px] text-phosphor-dim hover:text-phosphor sm:text-[8px]"
        >
          ← BACK
        </button>
      </header>

      <div className="flex flex-col items-center gap-6 px-4">
        <p className="font-[family-name:var(--font-pixel)] text-[8px] text-magenta sm:text-[10px]">
          THANK YOU FOR PLAYING!
        </p>

        <div className="space-y-1">
          <p className="font-[family-name:var(--font-arcade)] text-lg text-phosphor-dim sm:text-xl">
            DIRECTED BY
          </p>
          <p className="font-[family-name:var(--font-pixel)] text-[10px] text-phosphor text-glow sm:text-xs">
            {player.name}
          </p>
        </div>

        <div className="w-full max-w-xs space-y-3">
          <p className="font-[family-name:var(--font-pixel)] text-[6px] text-phosphor-dim/60 sm:text-[8px]">
            CONTINUE?
          </p>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target={link.label !== "EMAIL" ? "_blank" : undefined}
              rel={link.label !== "EMAIL" ? "noopener noreferrer" : undefined}
              className={`block font-[family-name:var(--font-pixel)] text-[8px] transition-opacity hover:opacity-80 sm:text-[10px] ${link.color}`}
            >
              ► {link.label}
            </a>
          ))}
        </div>

        <p className="mt-4 font-[family-name:var(--font-arcade)] text-sm text-phosphor-dim/50 sm:text-base">
          INSERT COIN TO PLAY AGAIN
        </p>
      </div>
    </div>
  );
}
