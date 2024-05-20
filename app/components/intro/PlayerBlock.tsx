import { ChangeEventHandler, useState } from "react";

export default function PlayerBlock({
  onNameInputChange,
}: {
  onNameInputChange: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <div className="flex gap-3 text-lg">
      <p className="font-bold">冒險者</p>
      <input
        placeholder="請輸入你的名字"
        onChange={onNameInputChange}
        className="bg-transparent border-b-2 border-b-black outline-none placeholder-shown:text-center placeholder-black text-sm"
      />
    </div>
  );
}
