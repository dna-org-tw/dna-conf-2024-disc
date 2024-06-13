"use client";
import MessageBubble from "./MessageBubble";
import Figure from "./Figure";
import ColorfulButton from "../ColorfulButton";
import Footer from "../Footer";

export default function CoverBlock({
  onStartClick,
}: {
  onStartClick: () => void;
}) {
  return (
    <div className="w-full h-full bg-[url('/images/background/bg.png')] bg-no-repeat bg-cover bg-right-top overflow-y-scroll overflow-x-hidden">
      <div className="mt-[60px] flex flex-col justify-center items-center">
        <MessageBubble />
        <Figure />
        <div className="flex w-full justify-center items-center mt-[70px] mb-[120px]">
          <ColorfulButton href="#" onClick={onStartClick}>
            {"START"}
          </ColorfulButton>
        </div>
      </div>
      <Footer />
    </div>
  );
}
