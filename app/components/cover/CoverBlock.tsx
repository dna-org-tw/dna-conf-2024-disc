"use client";
import MessageBubble from "./MessageBubble";
import Figure from "./Figure";
import ColorfulButton from "../ColorfulButton";
import Footer from "../Footer";

export default function CoverBlock() {
  return (
    <div className="w-full h-full bg-[url('/images/background/bg.png')] bg-no-repeat bg-cover bg-right-top">
      <MessageBubble />
      <Figure />
      <div className="flex w-full justify-center items-center absolute top-[450px]">
        <ColorfulButton href="#">{"START"}</ColorfulButton>
      </div>
      <Footer />
    </div>
  );
}
