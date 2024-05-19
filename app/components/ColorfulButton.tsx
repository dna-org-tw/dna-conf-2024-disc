import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ColorfulButton({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <div className="bg-[url('/images/background/button-bg.png')] bg-cover rounded-[40px] p-2">
      <Button
        asChild
        variant="ghost"
        className="bg-white rounded-[40px] text-2xl font-bold tracking-wider px-20 py-6"
        onClick={onClick}
      >
        <Link href={href}>{children}</Link>
      </Button>
    </div>
  );
}
