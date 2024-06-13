"use Client";
import { Fragment, useState } from "react";
import questionData from "../../data/questionData.json";
import QuestionDescription from "./QuestionDescription";
import QuestionOption from "./QuestionOption";
import ProgressBlock from "./ProgressBlock";
import { useRouter } from "next/navigation";

export default function QuestionBlock({
  onGameEnd,
}: {
  onGameEnd: () => void;
}) {
  const initChapter = 1;
  const questionDataLength = 27;

  const [chapter, setChapter] = useState(initChapter);
  const [preChapterArray, setPreChapterArray] = useState<number[]>([
    initChapter,
  ]);

  const backgroundUrl = `/images/background/question/${chapter}.png`;
  const question = questionData.find((question) => question.id === chapter);
  const questionOptions = question?.options || [
    { id: 1, description: "測試選項", nextQuestion: null },
  ];
  const progress = Math.round((chapter / questionDataLength) * 100);

  function handleNextQuestion(nextQuestion: number | null) {
    if (!!nextQuestion) {
      setChapter(nextQuestion);
      setPreChapterArray([...preChapterArray, nextQuestion]);
    } else {
      onGameEnd();
    }
  }

  function handlePreQuestion() {
    if (preChapterArray.length !== 1) {
      const newPreChapterArray = preChapterArray.slice(
        0,
        preChapterArray.length - 1
      );
      setPreChapterArray(newPreChapterArray);
      setChapter(preChapterArray[preChapterArray.length - 2]);
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
      {questionOptions
        .filter((option) => !!option.nextQuestion)
        .map((option) => (
          <link
            rel="preload"
            as="image"
            href={`/images/background/question/${option.nextQuestion}.png`}
          />
        ))}
      <div className="flex flex-col overflow-y-scroll h-full">
        <ProgressBlock
          onLeftArrowClick={handlePreQuestion}
          progress={progress}
        />
        <QuestionDescription description={question?.description || ""} />
        <div className="overflow-y-scroll">
          {questionOptions.map((option) => (
            <Fragment key={option.id}>
              <QuestionOption
                id={option.id}
                description={option.description}
                onQuestionOptionClick={() =>
                  handleNextQuestion(option?.nextQuestion)
                }
              />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
