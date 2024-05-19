"use client";
import { useState } from "react";
import { CoverBlock } from "./components/cover";
import { IntroBlock } from "./components/intro";

export type GameStatus = "" | "intro";

export default function Home() {
  const [status, setStatus] = useState<GameStatus>("");

  function handleStartClick() {
    setStatus("intro");
  }

  return (
    <>
      {status === "" && <CoverBlock onStartClick={handleStartClick} />}
      {status === "intro" && <IntroBlock />}
    </>
  );
}
