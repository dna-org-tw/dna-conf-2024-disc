import Image from "next/image";

export default function Figure() {
  return (
    <section className="flex justify-center absolute top-[160px] w-full ml-1 gap-3 md:gap-5">
      <Image
        src="/images/figure/cavalier.svg"
        alt="cavalier"
        width={92}
        height={50}
        className="w-full max-w-[92px] animate-[figureMoveUpDown_1s_infinite]"
      />
      <Image
        src="/images/figure/assassin.svg"
        alt="assassin"
        width={98}
        height={50}
        className="w-full max-w-[98px] animate-[figureMoveUpDown_1s_infinite]"
      />
      <Image
        src="/images/figure/magician.svg"
        alt="magician"
        width={85}
        height={50}
        className="w-full max-w-[85px] animate-[figureMoveDownUp_1s_infinite]"
      />
      <Image
        src="/images/figure/poet.svg"
        alt="poet"
        width={54}
        height={50}
        className="w-full mt-24 max-w-[54px] animate-[figureMoveDownUp_1s_infinite]"
      />
    </section>
  );
}
