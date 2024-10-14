import React from "react";
import Image from "next/image";
import { EmblaOptionsType } from "embla-carousel";
import Carousel from "./carousel/Carousel";
import { Protest_Strike } from "next/font/google";

const protestStrike = Protest_Strike({ subsets: ["latin"], weight: "400" });

const Hero = () => {
  const SLIDES: React.ReactNode[] = [
    {
      src: "hero1.webp",
      text: "One Community, endless opportunities",
    },
    {
      src: "hero2.webp",
      text: "Empower freedom of mind",
    },
    {
      src: "hero3.webp",
      text: "Mental and physical health walk side by side",
    },
    {
      src: "hero4.webp",
      text: "Jump into Fitness, One Skip at a Time!",
    },
  ].map((item, index) => (
    <div className="w-full" key={index}>
      <div className="w-full absolute inset-0 z-1">
        <Image
          src={`/images/${item.src}`}
          alt="hero"
          width={1200}
          height={1200}
          className="w-full aspect-square sm:aspect-video object-cover rounded-lg"
        />
      </div>

      <div className="w-full absolute inset-0 z-2 bg-black opacity-60 flex justify-center items-center">
        <h2
          className={`${protestStrike.className} xl:text-6xl lg:text-5xl text-lg font-bold text-[#fff]`}
        >
          {item.text}
        </h2>
      </div>
    </div>
  ));
  const OPTIONS: EmblaOptionsType = { loop: true };

  return (
    <div className="w-full">
      <Carousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default Hero;
