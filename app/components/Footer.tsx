import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0E5A7E] pb-4 fixed bottom-0 w-screen sm:w-[402px]">
      <div className="mx-auto pt-6 pb-1 px-8">
        <section className="flex justify-center items-center">
          <Image
            src="/footer-logo.svg"
            alt="Taiwan Digital Nomad Association 台灣數位遊牧協會"
            width={150}
            height={50}
            className="w-full max-w-[150px]"
          />
        </section>
      </div>
    </footer>
  );
}
