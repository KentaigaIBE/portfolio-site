"use client";

import { useState } from "react";
import Image from "next/image";

// This component allows you to click on an image to fullscreen it.
export default function InteractiveImage(props: any) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const handleImageClick = () => {
    setIsFullscreen(!isFullscreen);
  };

  const textClass = `${props.textSize} + ${props.textColor} + py-4 text-center drop-shadow-lg`;
  let imageClass =
    "max-h-[66vh] hover:scale-101 hover:cursor-zoom-in justify-self-center hover:cursor-pointer w-auto border-white transition-all duration-250 z-0 object-cover";
  if (props.blurOnHover) {
    imageClass += " blur-0 group-hover:blur-xs";
  }

  return (
    <>
      <div className="my-8 transition-all duration-500">
        <Image
          className={imageClass}
          src={props.image}
          alt={""}
          width={props.imageWidth}
          height={props.imageHeight}
          onClick={!isFullscreen ? handleImageClick : undefined}
        />
        <p className={textClass}>{props.text}</p>
      </div>
      {isFullscreen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen animate-fade-in bg-black/85 flex items-center justify-center z-50 cursor"
          onClick={handleImageClick}
        >
          <Image
            className="max-h-[90vh] max-w-[90vw] hover:scale-101 transition-all duration-250 object-contain hover:cursor-zoom-out"
            src={props.image}
            alt={""}
            width={props.imageWidth}
            height={props.imageHeight}
          />
        </div>
      )}
    </>
  );
}
