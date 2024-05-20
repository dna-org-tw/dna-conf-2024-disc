"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function WeaponBlock() {
  const images = [
    "/images/weapon/staff.svg",
    "/images/weapon/sword.svg",
    "/images/weapon/shield.svg",
    "/images/weapon/saz.svg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-[200px] w-[200px] mt-20 relative">
      <div className="absolute inset-0 flex items-center justify-center bg-[url('/images/light-circle.svg')] bg-no-repeat bg-cover bg-center">
        <div
          className={`absolute inset-0 flex items-center justify-center animate-[weaponFadeInOut_6s_linear_infinite]`}
        >
          <Image
            src={images[currentImageIndex]}
            alt="weapon"
            width={150}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
