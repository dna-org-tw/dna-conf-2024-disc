import Figure from "./components/Figure";
import MessageBubble from "./components/MessageBubble";

export default function Home() {
  return (
    <div className="w-full h-full bg-[url('/images/background/bg.png')] bg-no-repeat bg-cover bg-right-top">
      <MessageBubble />
      <Figure />
    </div>
  );
}
