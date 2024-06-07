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

<<<<<<< HEAD
  function resetGame() {
    setStatus("");
  }

=======
>>>>>>> 62d9be4c4853f374cb5552ddade12dcabb65419a
  return (
    <>
      {status === "" && <CoverBlock onStartClick={handleStartClick} />}
      {status === "intro" && (
        <IntroBlock onEnterGameClick={handleEnterGameClick} />
      )}
      {status === "question" && <QuestionBlock onGameEnd={onGameEnd} />}
<<<<<<< HEAD
      {status === "end" && <ResultPage resetGame={resetGame} />}
=======
      {status === "end" && <ResultPage />}
>>>>>>> 62d9be4c4853f374cb5552ddade12dcabb65419a
    </>
  );
}
