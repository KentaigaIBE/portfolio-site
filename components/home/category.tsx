"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Category(props: any) {
  const overlayClass = `${props.color} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full z-10 opacity-50 md:group-hover:bg-black transition-all duration-500`;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const dotSpacing = 40;
    const radius = 2;
    const padding = -32;
    const lineFalloff = 250;

    let mouse = { x: -1000, y: -1000 };
    let cachedLineMap = new Map<string, boolean>();
    let lastMouseActiveTime = 0;
    const cacheDuration = 1000;

    const getLineKey = (
      a: { x: number; y: number },
      b: { x: number; y: number }
    ) => {
      return `${a.x},${a.y}-${b.x},${b.y}`;
    };

    const getDots = () => {
      const dots = [];
      for (let x = padding; x < canvas.width; x += dotSpacing) {
        for (let y = padding; y < canvas.height; y += dotSpacing) {
          dots.push({ x, y });
        }
      }
      return dots;
    };

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const dots = getDots();

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();

        // Draw lines to nearby dots if close to mouse
        for (let j = i + 1; j < dots.length; j++) {
          const otherDot = dots[j];
          const dx = otherDot.x - dot.x;
          const dy = otherDot.y - dot.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < dotSpacing * 1.5) {
            const mouseDist = Math.sqrt(
              (mouse.x - (dot.x + otherDot.x) / 2) ** 2 +
                (mouse.y - (dot.y + otherDot.y) / 2) ** 2
            );

            if (mouseDist < lineFalloff) {
              const lineKey = getLineKey(dot, otherDot);
              const proximityWeight = 1 - mouseDist / lineFalloff; // 1 near mouse, 0 far
              const drawChance = proximityWeight; // 0–1 chance to draw

              if (!cachedLineMap.has(lineKey)) {
                cachedLineMap.set(lineKey, Math.random() < drawChance); // 60% chance to draw
              }

              if (cachedLineMap.get(lineKey)) {
                ctx.beginPath();
                ctx.moveTo(dot.x, dot.y);
                ctx.lineTo(otherDot.x, otherDot.y);
                ctx.strokeStyle = `rgba(253, 186, 116, ${
                  1 - mouseDist / lineFalloff
                })`;
                ctx.stroke();
              }
            }
          }
        }
      }

      requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="flex flex-col w-full md:w-1/4 h-[25vh] md:h-screen border-black border-b-4 border-t-4 md:border-b-0 md:border-t-0 md:border-r-8 md:border-l-8 md:hover:w-full transition-all duration-500 relative group overflow-hidden">
      <Link href={props.link}>
        <div className="relative h-full w-full group-hover:h-full transition-all duration-500">
          <Image
            className="w-full h-[24.3vh] md:h-screen opacity-50 md:group-hover:opacity-100 transition-all duration-500 z-0 object-cover blur-none md:group-hover:blur-sm scale-105"
            src={props.image}
            alt={""}
            width={1920}
            height={1080}
            priority
          />
          <div className={overlayClass}>
            <canvas
              className="w-screen h-screen opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 aspect-square"
              ref={canvasRef}
            />
          </div>
          <h2 className="pointer-events-none bg-[linear-gradient(120deg,rgba(255,255,255,1)0%,rgba(255,255,255,1)55%,rgba(252,165,165,1)75%,rgba(253,164,175,1)85%,rgba(253,186,116,1)100%)] bg-clip-text text-transparent animate-bg-gradient [background-position:0%_0%] md:group-hover:[background-position:100%_100%] text-[70px] md:text-[125px] md:group-hover:text-[175px] transition-all duration-500 font-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase md:rotate-90 md:group-hover:rotate-0 drop-shadow-[0_0px_50px_rgba(0,0,0,0.5)] md:group-hover:drop-shadow-[0_0px_50px_rgba(255,255,255,0.5)] z-20 motion-safe:md:group-hover:animate-[bounce_2s_ease_-1s_infinite_reverse]">
            {props.name}
          </h2>
        </div>
      </Link>
    </div>
  );
}
