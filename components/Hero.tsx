"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-4 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="-top-4 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center  dark:bg-[#000319]">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",

            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-[#000319]" />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] lg:max-w-[60vw] md:max-w-2xl flex flex-col justify-center ">
          <h2 className="text-center tracking-widest text-xs text-blue-[#E4ECFF] uppercase max-w-80 flex flex-col">
            Dynamic web magic with next.js
          </h2>
          <TextGenerateEffect
            words="Transforming Concepts Into Seamless User Experiences"
            className="text-center lg:text-6xl md:text-5xl text-[40px]"
          />
          <p className="text-center  text-sm md:text-lg lg:text-2xl tracking-wider mb-4">
            Hi, I&apos;m Brian, a software developer based in Nyahururu
          </p>
          <a href="" className=" items-center flex flex-col">
            <MagicButton
              title="Show My Work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
