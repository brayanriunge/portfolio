import { projects } from "@/data";
import React from "react";

export const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of {""}
        <span className="text-purple"> recent projects</span>
      </h1>
      <div className="p-4 gap-16 flex flex-wrap items-center justify-between">
        {projects.map(({ id, title, des, iconLists, img, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5 rem] h-[25rem] flex justify-between items-center w-[80vw] sm:w-96"
          >
            {title}
          </div>
        ))}
      </div>
    </div>
  );
};
