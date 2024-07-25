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
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-[220px] w-[225px] mt-20">
      <div className="h-[220px] flex items-center justify-center bg-[url('/images/light-circle.svg')] bg-no-repeat">
        <div
          className={`flex items-center justify-center animate-[weaponFadeInOut_6s_linear_infinite]`}
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
