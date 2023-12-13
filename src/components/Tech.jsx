import React, { useEffect, useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [preloadedImages, setPreloadedImages] = useState([]);

  useEffect(() => {
    const preloadImages = async () => {
      const images = [];
      for (const technology of technologies) {
        const img = new Image();
        img.src = technology.icon;
        await new Promise((resolve) => {
          img.onload = resolve;
        });
        images.push({ name: technology.name, icon: img.src });
      }
      setPreloadedImages(images);
    };

    preloadImages();
  }, []);

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {preloadedImages.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
