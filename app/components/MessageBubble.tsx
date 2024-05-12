import Image from "next/image";

export default function MessageBubble() {
  return (
    <section className="flex justify-center items-center absolute w-full top-[80px] ">
      <Image
        src="/images/background/message-bubble.svg"
        alt="Who are you"
        width={257}
        height={50}
        className="w-full max-w-[257px] animate-[messageBubbleMoveDownUp_1s_infinite]"
      />
      <p className="absolute text-5xl font-bold text-[#0E5A7E] animate-[messageBubbleMoveDownUp_1s_infinite] mb-5">
        你是誰？
      </p>
    </section>
  );
}
