"use client";

import type { ReactNode } from "react";
import { ArcadeButton } from "./ArcadeButton";

type ArcadeCabinetProps = {
  children: ReactNode;
  onStart?: () => void;
  showControls?: boolean;
};

export function ArcadeCabinet({
  children,
  onStart,
  showControls = true,
}: ArcadeCabinetProps) {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-2 py-4 sm:px-4 sm:py-8">
      {/* Ambient room glow */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 80%, rgba(139,26,26,0.15) 0%, transparent 60%)",
        }}
      />

      <div className="relative w-full max-w-2xl">
        {/* Marquee header */}
        <div className="relative mx-4 mb-0 rounded-t-lg bg-cabinet px-4 py-3 shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),0_-2px_8px_rgba(0,0,0,0.5)] sm:mx-8 sm:px-6 sm:py-4">
          <div className="overflow-hidden rounded border-2 border-cabinet-dark bg-black px-2 py-1.5">
            <p className="marquee-track whitespace-nowrap font-[family-name:var(--font-pixel)] text-[8px] tracking-wider text-amber sm:text-[10px]">
              ★ INSERT COIN TO PLAY ★ WELCOME TO THE ARCADE ★ PLAYER 1 ★ HIGH SCORE ★
            </p>
          </div>
          <h1 className="mt-2 text-center font-[family-name:var(--font-pixel)] text-[10px] leading-relaxed text-yellow-300 text-glow-amber sm:text-sm">
            UZAIR&apos;S
            <br />
            PORTFOLIO
          </h1>
        </div>

        {/* Screen bezel */}
        <div className="mx-2 rounded-lg bg-bezel p-3 shadow-[0_8px_32px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)] sm:mx-4 sm:p-4 md:p-5">
          <div className="pixel-border aspect-[4/3] w-full min-h-[280px] sm:min-h-[360px] md:min-h-[420px]">
            {children}
          </div>
        </div>

        {/* Control panel */}
        {showControls && (
          <div className="mx-2 rounded-b-xl bg-cabinet-dark px-4 py-5 shadow-[0_12px_40px_rgba(0,0,0,0.6),inset_0_2px_4px_rgba(255,255,255,0.1)] sm:mx-4 sm:px-8 sm:py-6">
            <div className="flex items-center justify-between">
              {/* Joystick area */}
              <div className="flex flex-col items-center gap-2">
                <div className="relative">
                  <div className="h-16 w-16 rounded-full bg-gray-800 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] sm:h-20 sm:w-20">
                    <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-700 shadow-[0_4px_0_#5c0f0f]" />
                  </div>
                  <div className="absolute -top-6 left-1/2 h-6 w-3 -translate-x-1/2 rounded-sm bg-gray-600" />
                </div>
                <span className="font-[family-name:var(--font-pixel)] text-[6px] text-gray-500 sm:text-[8px]">
                  MOVE
                </span>
              </div>

              {/* Coin slot */}
              <div className="hidden flex-col items-center gap-1 sm:flex">
                <div className="h-2 w-16 rounded-full bg-black shadow-[inset_0_2px_4px_rgba(0,0,0,1)]" />
                <span className="font-[family-name:var(--font-pixel)] text-[6px] text-gray-500">
                  COIN
                </span>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 sm:gap-4">
                <ArcadeButton label="A" color="green" onClick={onStart} />
                <ArcadeButton label="B" color="red" />
                <ArcadeButton label="START" color="yellow" size="lg" onClick={onStart} />
              </div>
            </div>
          </div>
        )}

        {/* Cabinet sides illusion */}
        <div className="absolute -left-1 top-20 bottom-20 w-2 rounded-l bg-cabinet-dark opacity-60 sm:-left-2 sm:w-3" />
        <div className="absolute -right-1 top-20 bottom-20 w-2 rounded-r bg-cabinet-light opacity-40 sm:-right-2 sm:w-3" />
      </div>

      <p className="mt-4 font-[family-name:var(--font-pixel)] text-[6px] text-gray-600 sm:text-[8px]">
        © 2026 UZAIR SHAIKH — ALL RIGHTS RESERVED
      </p>
    </div>
  );
}
