import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {gridItems.map(
          ({
            id,
            className,
            description,
            title,
            img,
            imgClassName,
            spareImg,
            titleClassName,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              spareImg={spareImg}
              titleClassName={titleClassName}
              imgClassName={imgClassName}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
