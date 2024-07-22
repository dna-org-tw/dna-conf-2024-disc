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
  const [typed, setTyped] = useState<boolean>(false);

  function handleNameChange(value: string) {
    setName(value);
    setTyped(!!value);
  }

  function handleEnterGameClick() {
    if (!!name.trim()) {
      localStorage.setItem("playerName", name);
      onEnterGameClick();
    }
  }

  return (
    <div className="w-full h-full bg-[url('/images/background/intro-bg.png')] bg-no-repeat bg-cover bg-bottom bg-white overflow-y-scroll md:overflow-hidden">
      <div className="flex flex-col gap-3 items-center p-3 w-full h-full bg-[url('/images/bits.png')] bg-no-repeat bg-cover bg-right-top">
        <link
          rel="preload"
          as="image"
          href={`/images/background/question/1.png`}
        />
        <WeaponBlock />
        <StoryBlock />
        <PlayerBlock
          onNameInputChange={(e) => handleNameChange(e.target.value)}
        />
        <p className="font-bold text-lg">你準備好了嗎？</p>
        <ColorfulButton
          href="#"
          onClick={handleEnterGameClick}
          disabled={!typed}
        >
          <p>ENTER GAME</p>
        </ColorfulButton>
      </div>
    </div>
  );
}
