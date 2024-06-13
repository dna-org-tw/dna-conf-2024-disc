import { MdKeyboardArrowLeft } from "react-icons/md";
import Progress from "@/components/ui/Progress";

export default function ProgressBlock({
  onLeftArrowClick,
  progress,
  chapter,
}: {
  onLeftArrowClick: () => void;
  progress: number;
  chapter: number;
}) {
  return (
    <div className="flex items-center gap-1">
      <div
        className="text-2xl text-white pt-2 cursor-pointer"
        onClick={onLeftArrowClick}
      >
        {chapter !== 1 && <MdKeyboardArrowLeft />}
      </div>
      <Progress progress={progress} />
    </div>
  );
}
