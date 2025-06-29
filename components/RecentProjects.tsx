import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";

export const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of {""}
        <span className="text-purple"> recent projects</span>
      </h1>
      <div className="p-4 gap-16 flex flex-wrap items-center justify-center">
        {projects.map(({ id, title, des, iconLists, img, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5 rem] h-[25rem] flex justify-center items-center w-[80vw] sm:w-96"
          >
            <PinContainer title={link} href={link}>
              <div className=" flex items-center justify-center relative overflow-hidden sm:w-96 w-[80vw] h-[20vh] lg:h-[30vh] mb-10">
                <div className="relative w-full h-full lg:rounded-3xl bg-[#13162d] overflow-hidden">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img src={img} alt={title} className="z-10 absolute bottom-0" />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3  ">
                <div className="flex items-center">
                  {iconLists.map((icon) => (
                    <div
                      key={icon}
                      className="boder border-white/[0.2] rounded-full lg:w-10 lg:h-10 h-8 w-8 flex justify-center items-center bg-black "
                      style={{ transform: `translateX(-$(5 * index * 2) px)` }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center ">
                  <p className="flex text-sm lg:text-xl md:text-xs text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};
