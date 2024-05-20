function optionText(index: number) {
  return index === 1 ? "A" : index === 2 ? "B" : index === 3 ? "C" : "D";
}

export default function QuestionOption({
  id,
  description,
  onQuestionOptionClick,
}: {
  id: number;
  description: string;
  onQuestionOptionClick: () => void;
}) {
  return (
    <div
      className="flex items-center gap-2 p-4 mb-3 bg-white bg-opacity-90 rounded-3xl cursor-pointer"
      onClick={onQuestionOptionClick}
    >
      <div className="flex items-center justify-center bg-[#FFD028] rounded-full w-[40px] h-[40px]">
        <p className="text-white font-bold text-2xl">{optionText(id)}</p>
      </div>
      <p>{description}</p>
    </div>
  );
}
