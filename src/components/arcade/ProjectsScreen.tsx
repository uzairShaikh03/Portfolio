"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { projects, type Project } from "@/data/portfolio";

type ProjectsScreenProps = {
  selectedIndex: number;
  onNavigate: (direction: "up" | "down") => void;
  onSelectIndex: (index: number) => void;
  onBack: () => void;
};

function formatScore(score: number) {
  return score.toLocaleString("en-US").padStart(8, "0");
}

export function ProjectsScreen({
  selectedIndex,
  onNavigate,
  onSelectIndex,
  onBack,
}: ProjectsScreenProps) {
  const project = projects[selectedIndex];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" || e.key === "w") {
        e.preventDefault();
        onNavigate("up");
      } else if (e.key === "ArrowDown" || e.key === "s") {
        e.preventDefault();
        onNavigate("down");
      } else if (e.key === "Escape" || e.key === "b" || e.key === "B") {
        e.preventDefault();
        onBack();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onNavigate, onBack]);

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <header className="mb-2 flex items-center justify-between border-b border-phosphor-dim/30 pb-2">
        <h2 className="font-[family-name:var(--font-pixel)] text-[8px] text-amber sm:text-[10px]">
          SELECT GAME
        </h2>
        <button
          type="button"
          onClick={onBack}
          className="font-[family-name:var(--font-pixel)] text-[6px] text-phosphor-dim hover:text-phosphor sm:text-[8px]"
        >
          ← BACK
        </button>
      </header>

      <div className="flex min-h-0 flex-1 gap-2 sm:gap-4">
        {/* Game list */}
        <ul className="w-2/5 shrink-0 overflow-y-auto border-r border-phosphor-dim/20 pr-2">
          {projects.map((p, i) => (
            <li key={p.id}>
              <button
                type="button"
                onClick={() => onSelectIndex(i)}
                className={`block w-full truncate py-1 text-left font-[family-name:var(--font-arcade)] text-sm sm:text-base ${
                  i === selectedIndex ? "text-phosphor text-glow" : "text-phosphor-dim"
                }`}
              >
                {i === selectedIndex ? "► " : "  "}
                {p.title}
              </button>
            </li>
          ))}
        </ul>

        {/* Game detail */}
        <motion.div
          key={project.id}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex min-w-0 flex-1 flex-col gap-2 overflow-y-auto"
        >
          <ProjectDetail project={project} />
        </motion.div>
      </div>
    </div>
  );
}

function ProjectDetail({ project }: { project: Project }) {
  return (
    <>
      <div>
        <h3 className="font-[family-name:var(--font-pixel)] text-[8px] text-cyan text-glow-cyan sm:text-[10px]">
          {project.title}
        </h3>
        <p className="font-[family-name:var(--font-arcade)] text-base text-phosphor-dim sm:text-lg">
          {project.subtitle}
        </p>
      </div>

      <div className="rounded border border-phosphor-dim/30 bg-black/30 p-2">
        <p className="mb-1 font-[family-name:var(--font-pixel)] text-[6px] text-amber sm:text-[8px]">
          HIGH SCORE
        </p>
        <p className="font-[family-name:var(--font-pixel)] text-xs text-phosphor text-glow sm:text-sm">
          {formatScore(project.score)}
        </p>
      </div>

      <p className="font-[family-name:var(--font-arcade)] text-sm leading-relaxed text-phosphor-dim sm:text-base">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="border border-phosphor-dim/40 px-1.5 py-0.5 font-[family-name:var(--font-pixel)] text-[6px] text-phosphor-dim sm:text-[8px]"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-auto flex gap-3 pt-2">
        {project.demo && (
          <a
            href={project.demo}
            className="font-[family-name:var(--font-pixel)] text-[6px] text-cyan hover:text-glow-cyan sm:text-[8px]"
          >
            [ PLAY DEMO ]
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            className="font-[family-name:var(--font-pixel)] text-[6px] text-magenta hover:opacity-80 sm:text-[8px]"
          >
            [ VIEW CODE ]
          </a>
        )}
      </div>
    </>
  );
}
