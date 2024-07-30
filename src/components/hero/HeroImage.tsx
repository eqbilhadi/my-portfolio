import Image from "next/image";
import React from "react";

export default function HeroImage() {
  return (
    <div className="relative">
      <Image
        src="/eqtada.png"
        width={500}
        height={500}
        alt="my picture"
        className="hidden xl:flex"
      />
      <div className="flex justify-center xl:hidden mb-10">
        <Image src="/eqtada.png" width={350} height={350} alt="my picture" />
      </div>
    </div>
  );
}
