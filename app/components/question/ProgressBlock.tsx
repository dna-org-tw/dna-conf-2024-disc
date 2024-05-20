import { MdKeyboardArrowLeft } from "react-icons/md";
import Progress from "@/components/ui/Progress";

export default function ProgressBlock({
  onLeftArrowClick,
  progress,
}: {
  onLeftArrowClick: () => void;
  progress: number;
}) {
  return (
    <div className="flex items-center gap-1">
      <div
        className="text-2xl text-white pt-2 cursor-pointer"
        onClick={onLeftArrowClick}
      >
        <MdKeyboardArrowLeft />
      </div>
      <Progress progress={progress} />
    </div>
  );
}
