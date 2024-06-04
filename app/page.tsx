"use client";
import { useState } from "react";
import { CoverBlock } from "./components/cover";
import { IntroBlock } from "./components/intro";
import { QuestionBlock } from "./components/question";
import ResultPage from "./ResPage/page";

export type GameStatus = "" | "intro" | "question" | "end";

export default function Home() {
  const [status, setStatus] = useState<GameStatus>("");

  function handleStartClick() {
    setStatus("intro");
  }

  function handleEnterGameClick() {
    setStatus("question");
  }

  function onGameEnd() {
    setStatus("end");
  }

  return (
    <>
      {status === "" && <CoverBlock onStartClick={handleStartClick} />}
      {status === "intro" && (
        <IntroBlock onEnterGameClick={handleEnterGameClick} />
      )}
      {status === "question" && <QuestionBlock onGameEnd={onGameEnd} />}
      {status === "end" && <ResultPage />}
    </>
  );
}
