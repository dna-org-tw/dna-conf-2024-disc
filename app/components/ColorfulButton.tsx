import { Button } from "@/components/ui/button";
import clsx from "clsx";
import Link from "next/link";

export default function ColorfulButton({
  href,
  children,
  onClick,
  disabled,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}) {
  disabled = disabled || false;

  return (
    <div
      className={clsx(
        "rounded-[40px] p-2",
        disabled
          ? "bg-[#808080]"
          : "bg-[url('/images/background/button-bg.png')] bg-cover"
      )}
    >
      <Button
        asChild
        variant="ghost"
        onClick={disabled ? () => {} : onClick}
        className={clsx(
          "rounded-[40px] text-2xl font-bold tracking-wider px-20 py-6 bg-white",
          disabled ? "bg-[#808080] opacity-50" : "bg-white"
        )}
      >
        <Link href={href}>{children}</Link>
      </Button>
    </div>
  );
}
