"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TimelineProject(props: any) {
  // Position
  let style =
    "relative w-1/3 h-1/3 m-4 p-4 bg-white z-10 flex flex-col items-center rounded-xl cursor-pointer drop-shadow-lg tl-project";
  if (props.position === "left") {
    style += " right-[19%]";
  } else if (props.position === "right") {
    style += " left-[19%]";
  }

  return (
    <motion.div
      whileHover={{ scale: [null, 1.07, 1.05] }}
      transition={{ duration: 0.3 }}
      className={style}
    >
      <Link href={props.link}>
        <Image
          className="w-full h-full"
          src={props.imageSrc}
          alt={""}
          width={400}
          height={260}
        />
        <h2 className="text-black text-xl font-bold">{props.name}</h2>
      </Link>
    </motion.div>
  );
}

function SwapBackground(
  colorA: string,
  colorB: string,
  colorC: string,
  colorD: string
) {
  const root = document.documentElement;

  // Get current background colors
  const oldColorA = root.style.getPropertyValue("--color-a");
  const oldColorB = root.style.getPropertyValue("--color-b");
  const oldColorC = root.style.getPropertyValue("--color-c");
  const oldColorD = root.style.getPropertyValue("--color-d");

  // Set new background colors
  root.style.setProperty("--new-color-a", colorA);
  root.style.setProperty("--new-color-b", colorB);
  root.style.setProperty("--new-color-c", colorC);
  root.style.setProperty("--new-color-d", colorD);
  root.style.setProperty("--new-gradient-opacity", "100%");
}

function RemoveBackground() {
  const root = document.documentElement;
  root.style.setProperty("--new-color-a", "rgb(0, 0, 0)");
  root.style.setProperty("--new-color-b", "rgb(0, 0, 0)");
  root.style.setProperty("--new-color-c", "rgb(0, 0, 0)");
  root.style.setProperty("--new-color-d", "rgb(0, 0, 0)");
  root.style.setProperty("--new-gradient-opacity", "0%");
}
