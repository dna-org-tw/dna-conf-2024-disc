"use Client";
import { Fragment, useState } from "react";
import questionData from "../../data/questionData.json";
import QuestionDescription from "./QuestionDescription";
import QuestionOption from "./QuestionOption";
import ProgressBlock from "./ProgressBlock";

export default function QuestionBlock() {
  const [chapter, setChapter] = useState(0);

  const backgroundUrl = `/images/background/question/${chapter + 1}.png`;
  const question = questionData[chapter];
  const questionOptions = question?.options || [
    { id: 1, description: "測試選項" },
  ];
  const questionDataLength = 27;
  const progress = Math.round(((chapter + 1) / questionDataLength) * 100);

  function handleNextQuestion() {
    if (chapter + 1 !== questionDataLength) {
      setChapter(chapter + 1);
    }
  }

  function handlePreQuestion() {
    if (chapter !== 0) {
      setChapter(chapter - 1);
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
      <div className="flex flex-col">
        <ProgressBlock
          onLeftArrowClick={handlePreQuestion}
          progress={progress}
        />
        <QuestionDescription description={question?.description} />
        {questionOptions.map((option) => (
          <Fragment key={option.id}>
            <QuestionOption
              id={option.id}
              description={option.description}
              onQuestionOptionClick={handleNextQuestion}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
