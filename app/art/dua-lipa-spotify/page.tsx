"use client";

import SimpleTopbar from "@/components/common/simple-topbar";
import TitleImage from "@/components/common/title-image";
import MuxPlayer from "@mux/mux-player-react/lazy";

export default async function DuaLipaSpotify() {
  const h1Class = "text-3xl font-bold mb-4 text-pink-300";

  return (
    <main className="flex min-h-screen flex-col overflow-x-clip">
      <SimpleTopbar
        title={"Dua Lipa Spotify Canvases"}
        upSrc={"/art"}
      ></SimpleTopbar>
      <TitleImage
        name={"Dua Lipa Spotify Canvases"}
        textSize={"text-[30px] md:text-[75px]"}
        textColor={"text-pink-300"}
        color={"text-pink-200"}
        blur={"blur-[3px]"}
        image={
          "https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/DuaLipaLoops.webp"
        }
      ></TitleImage>
      {/* Body conent */}
      <div className="my-8 mx-8">
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
        <div className="flex flex-col sm:flex-row mt-8 justify-between items-center space-y-4">
          <MuxPlayer
            className="w-2/3 sm:w-1/4 aspect-[9/16]"
            title="Break My Heart Loop"
            metadataVideoId="break-my-heart-loop"
            metadataVideoTitle="Break My Heart Loop"
            streamType="on-demand"
            playbackId="fhYkZu800tdeAV1guFhfvchqxAQ4rU7AVmht8VojyNNU"
            thumbnailTime={0}
            placeholder="https://image.mux.com/fhYkZu800tdeAV1guFhfvchqxAQ4rU7AVmht8VojyNNU/thumbnail.webp?time=0&width=360&height=640"
            accentColor="#F9A8D4"
            primaryColor="#FFFFFF"
            secondaryColor="#000000"
            preload="auto"
            muted
            loop
          />
          <MuxPlayer
            className="w-2/3 sm:w-1/4 aspect-[9/16]"
            title="Levitating Loop"
            metadataVideoId="levitating-loop"
            metadataVideoTitle="Levitating Loop"
            streamType="on-demand"
            playbackId="Ebb00cM5sj7zw021DdZPyAbPQlYYdWRoM1YKGolrEjuvw"
            thumbnailTime={0}
            placeholder="https://image.mux.com/Ebb00cM5sj7zw021DdZPyAbPQlYYdWRoM1YKGolrEjuvw/thumbnail.webp?time=0&width=360&height=640"
            accentColor="#F9A8D4"
            primaryColor="#FFFFFF"
            secondaryColor="#000000"
            preload="auto"
            muted
            loop
          />
          <MuxPlayer
            className="w-2/3 sm:w-1/4 aspect-[9/16]"
            title="Physical Loop"
            metadataVideoId="physical-loop"
            metadataVideoTitle="Physical Loop"
            streamType="on-demand"
            playbackId="Ebb00cM5sj7zw021DdZPyAbPQlYYdWRoM1YKGolrEjuvw"
            thumbnailTime={0}
            placeholder="https://image.mux.com/Ebb00cM5sj7zw021DdZPyAbPQlYYdWRoM1YKGolrEjuvw/thumbnail.webp?time=0&width=360&height=640"
            accentColor="#F9A8D4"
            primaryColor="#FFFFFF"
            secondaryColor="#000000"
            preload="auto"
            muted
            loop
          />
        </div>
      </div>
    </main>
  );
}
