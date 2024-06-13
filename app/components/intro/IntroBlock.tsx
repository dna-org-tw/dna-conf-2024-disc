"use client";
import { useState } from "react";
import ColorfulButton from "../ColorfulButton";
import PlayerBlock from "./PlayerBlock";
import StoryBlock from "./StoryBlock";
import WeaponBlock from "./WeaponBlock";

export default function IntroBlock({
  onEnterGameClick,
}: {
  onEnterGameClick: () => void;
}) {
  const [name, setName] = useState<string>("");

  function handleNameChange(value: string) {
    setName(value);
  }

  function handleEnterGameClick() {
    if (!!name.trim()) {
      localStorage.setItem("playerName", name);
      onEnterGameClick();
    }
  }

  return (
    <div className="w-full h-full bg-[url('/images/background/intro-bg.png')] bg-no-repeat bg-cover bg-bottom bg-white overflow-y-scroll overflow-x-hidden">
      <div className="flex flex-col gap-3 items-center p-3 w-full h-full bg-[url('/images/bits.png')] bg-no-repeat bg-cover bg-right-top">
        <WeaponBlock />
        <StoryBlock />
        <PlayerBlock
          onNameInputChange={(e) => handleNameChange(e.target.value)}
        />
        <p className="font-bold text-lg">你準備好了嗎？</p>
        <ColorfulButton href="#" onClick={handleEnterGameClick}>
          <p>ENTER GAME</p>
        </ColorfulButton>
      </div>
    </div>
  );
}
