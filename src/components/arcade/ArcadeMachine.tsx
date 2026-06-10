"use client";

import { AnimatePresence } from "framer-motion";
import { useCallback, useState } from "react";
import { menuItems, projects, type MenuItem } from "@/data/portfolio";
import { AboutScreen } from "./AboutScreen";
import { ArcadeCabinet } from "./ArcadeCabinet";
import { AttractMode } from "./AttractMode";
import { ContactScreen } from "./ContactScreen";
import { CRTScreen, ScreenTransition } from "./CRTScreen";
import { MainMenu } from "./MainMenu";
import { ProjectsScreen } from "./ProjectsScreen";
import { SkillsScreen } from "./SkillsScreen";

type GameState = "attract" | "menu" | MenuItem["id"];

export function ArcadeMachine() {
  const [gameState, setGameState] = useState<GameState>("attract");
  const [coins, setCoins] = useState(0);
  const [menuIndex, setMenuIndex] = useState(0);
  const [projectIndex, setProjectIndex] = useState(0);

  const insertCoin = useCallback(() => {
    setCoins((c) => Math.min(c + 1, 9));
  }, []);

  const startGame = useCallback(() => {
    if (coins >= 1) {
      setGameState("menu");
      setCoins((c) => c - 1);
    }
  }, [coins]);

  const goToMenu = useCallback(() => {
    setGameState("menu");
  }, []);

  const selectMenuItem = useCallback((item: MenuItem) => {
    setGameState(item.id);
    if (item.id === "projects") setProjectIndex(0);
  }, []);

  const navigateMenu = useCallback((direction: "up" | "down") => {
    setMenuIndex((i) => {
      if (direction === "up") return (i - 1 + menuItems.length) % menuItems.length;
      return (i + 1) % menuItems.length;
    });
  }, []);

  const setMenuIndexDirect = useCallback((index: number) => {
    setMenuIndex(index);
  }, []);

  const navigateProjects = useCallback((direction: "up" | "down") => {
    setProjectIndex((i) => {
      if (direction === "up") return (i - 1 + projects.length) % projects.length;
      return (i + 1) % projects.length;
    });
  }, []);

  const setProjectIndexDirect = useCallback((index: number) => {
    setProjectIndex(index);
  }, []);

  const isAttract = gameState === "attract";

  return (
    <ArcadeCabinet onStart={isAttract ? startGame : goToMenu} showControls>
      <CRTScreen className="h-full">
        <AnimatePresence mode="wait">
          {gameState === "attract" && (
            <ScreenTransition key="attract">
              <AttractMode
                coins={coins}
                onInsertCoin={insertCoin}
                onStart={startGame}
              />
            </ScreenTransition>
          )}

          {gameState === "menu" && (
            <ScreenTransition key="menu">
              <MainMenu
                selectedIndex={menuIndex}
                onSelect={selectMenuItem}
                onNavigate={navigateMenu}
                onHoverIndex={setMenuIndexDirect}
              />
            </ScreenTransition>
          )}

          {gameState === "projects" && (
            <ScreenTransition key="projects">
              <ProjectsScreen
                selectedIndex={projectIndex}
                onNavigate={navigateProjects}
                onSelectIndex={setProjectIndexDirect}
                onBack={goToMenu}
              />
            </ScreenTransition>
          )}

          {gameState === "skills" && (
            <ScreenTransition key="skills">
              <SkillsScreen onBack={goToMenu} />
            </ScreenTransition>
          )}

          {gameState === "about" && (
            <ScreenTransition key="about">
              <AboutScreen onBack={goToMenu} />
            </ScreenTransition>
          )}

          {gameState === "contact" && (
            <ScreenTransition key="contact">
              <ContactScreen onBack={goToMenu} />
            </ScreenTransition>
          )}
        </AnimatePresence>
      </CRTScreen>
    </ArcadeCabinet>
  );
}
