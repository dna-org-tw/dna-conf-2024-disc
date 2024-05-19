"use client";
import { useState } from "react";
import { CoverBlock } from "./components/cover";
import { IntroBlock } from "./components/intro";
import { QuestionBlock } from "./components/question";

export type GameStatus = "" | "intro" | "question";

export default function Home() {
  const [status, setStatus] = useState<GameStatus>("");

  function handleStartClick() {
    setStatus("intro");
  }

  function handleEnterGameClick() {
    setStatus("question");
  }

  return (
    <>
      {status === "" && <CoverBlock onStartClick={handleStartClick} />}
      {status === "intro" && (
        <IntroBlock onEnterGameClick={handleEnterGameClick} />
      )}
      {status === "question" && <QuestionBlock />}
    </>
  );
}
