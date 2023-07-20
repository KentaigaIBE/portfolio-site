"use client";
{
  /* Vidstack requires this until version 0.8 comes out */
}

import SimpleTopbar from "@/components/common/simple-topbar";
import TitleImage from "@/components/common/title-image";
import { MediaPlayer, MediaOutlet } from "@vidstack/react";

export default function DuaLipaSpotify() {
  const h1Class = "text-3xl font-bold mb-4 text-pink-300";

  return (
    <main className="flex bg-white dark:bg-black min-h-screen flex-col items-center pw-24 overflow-x-clip">
      <SimpleTopbar
        title={"Dua Lipa Spotify Canvases"}
        upSrc={"/art"}
      ></SimpleTopbar>
      <TitleImage
        name={"Dua Lipa Spotify Canvases"}
        textSize={"text-[75px]"}
        textColor={"text-pink-300"}
        color={"text-pink-200"}
        blur={"blur-[3px]"}
        image={
          "https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/DuaLipaLoops.webp"
        }
      ></TitleImage>
      {/* Body conent */}
      <div className="text-black dark:text-white my-8 mx-4">
        <h1 className={h1Class} id="overview">
          Overview
        </h1>
        <p className="mb-4">
          The video loops you see on this page were created for a project where
          we needed to make concept Spotify Canvases for an artist of our
          choice. If you&apos;re unfamiliar, a Spotify Canvas is a simple
          looping video that shows up in the background of the app while on the
          now playing screen. The songs these videos were made for were all from
          Dua Lipa; &quot;Leviatating&quot;, &quot;Break My Heart&quot;, and
          &quot;Physical&quot; were the ones I chose. These videos were built
          using Cinema 4D and Adobe After Effects. I also used a lot of plugins
          from Maxon&apos;s great Universe suite.
        </p>
        <h1 className={h1Class} id="videos">
          Videos
        </h1>
        <div className="flex flex-row mt-8 w-[98vw] justify-between">
          <MediaPlayer
            className="w-1/4"
            title="Levitating Loop"
            src="https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/LevitatingLoop.webm"
            load="eager"
            controls
            autoplay
            muted
            loop
          >
            <MediaOutlet />
          </MediaPlayer>
          <MediaPlayer
            className="w-1/4"
            title="Break My Heart Loop"
            src="https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/BreakMyHeartLoop.webm"
            load="eager"
            controls
            autoplay
            muted
            loop
          >
            <MediaOutlet />
          </MediaPlayer>
          <MediaPlayer
            className="w-1/4"
            title="Physical Loop"
            src="https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/PhysicalLoop.webm"
            load="eager"
            controls
            autoplay
            muted
            loop
          >
            <MediaOutlet />
          </MediaPlayer>
        </div>
      </div>
    </main>
  );
}