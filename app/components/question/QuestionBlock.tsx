"use Client";
import { useState } from "react";

export default function QuestionBlock() {
  const [chapter, setChapter] = useState(0);

  const backgroundUrl = `/images/background/question/${chapter + 1}.png`;
  const questionDataLength = 27;

  function handleNextQuestion() {
    if (chapter + 1 !== questionDataLength) {
      setChapter(chapter + 1);
    }
  }

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "right top",
      }}
      className="w-full h-full p-3 bg-white"
    >
      <p>題目描述</p>
      <p onClick={handleNextQuestion}>題目選項</p>
    </div>
  );
}
