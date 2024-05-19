import WeaponBlock from "./WeaponBlock";

export default function IntroBlock() {
  return (
    <div className="w-full h-full bg-[url('/images/background/intro-bg.png')] bg-no-repeat bg-cover bg-bottom bg-white">
      <div className="flex flex-col gap-4 items-center p-3 w-full h-full bg-[url('/images/bits.png')] bg-no-repeat bg-cover bg-right-top">
        <WeaponBlock />
      </div>
    </div>
  );
}
