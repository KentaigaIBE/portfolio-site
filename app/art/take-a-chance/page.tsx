"use client";
{
  /* Vidstack requires this until version 0.8 comes out */
}

import SimpleTopbar from "@/components/common/simple-topbar";
import TitleImage from "@/components/common/title-image";
import MuxPlayer from "@mux/mux-player-react/lazy";
import Image from "next/image";

export default function TakeAChance() {
  const h1Class = "text-3xl font-bold mb-4 text-indigo-300";

  return (
    <main className="flex bg-white dark:bg-black min-h-screen flex-col pw-24 overflow-x-clip">
      <SimpleTopbar title={"Take a Chance"} upSrc={"/art"}></SimpleTopbar>
      <TitleImage
        name={"Take a Chance Projection Mapping Project"}
        textSize={"text-[20px] md:text-[70px]"}
        textColor={"text-indigo-300"}
        color={"text-indigo-200"}
        blur={"blur-[3px]"}
        image={
          "https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/take-a-chance-wormhole.webp"
        }
      ></TitleImage>
      {/* Body conent */}
      <div className="flex flex-col mt-8 mx-4">
        <h1 className={h1Class} id="overview">
          Overview
        </h1>
        <p>
          This project was the culmination of eveything my classmates and I
          learned throughout Ben Nicholson&apos;s Entertainment Design class.
          For this, we were tasked with creating a music video to be projected
          within Miami University&apos;s Kumler Chapel. My project partners,
          Vishal Sharma and Madison Cox, and I, decided to use the song
          &quot;Take a Chance&quot; by Flume. We split up the work, each of us
          takling a different section of the song. I was responsible for the
          outro of the song as well as some of the VFX work seen throughout the
          video. The tools used include TouchDesigner, After Effects, and the
          Universe suite of plugins.
        </p>
        <br></br>
        <h1 className={h1Class} id="my-contributions">
          My Contributions
        </h1>
        <p>
          The first thing I spent my time on was collaborating with my team on
          the direction of the project. Togehter we created a small spreadhseet
          that would serve as our storyboard as we created each shot.
          That&apos;s where we assigned ourselves individual roles.
        </p>
        <br></br>
        <p>
          I then began to work on the video itself. In order to add some flavor
          to centerpiece of our video, the floating man, I created a reactive
          acid shader in TouchDesigner. It ebbs and flows with the music and
          adds some color to the scene. This shader was then plugged into the
          floating man model so it would appear on top of him.
        </p>
        <br></br>
        <p>
          Next I created a visualizer to occupy the borders of the chapel. These
          were made by referencing a layered image of the building (pictured
          below) and using After Effects to place some audio visualizer layers
          in the correct spots. These were then exported indipedently and
          composited within TouchDesigner.
        </p>
        <br></br>
        <Image
          src="https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/kumler-depth.webp"
          alt="A layered representation of Kumler Chapel"
          width={540}
          height={360}
          className="float-none md:float-right mt-4 md:mt-0 md:ml-4 self-center rounded-md border-indigo-400 border-8 shadow-lg shadow-zinc-800"
        />
        <br></br>
        <p>
          Finally, I got to work on the outro itself. This required some work in
          both After Effects and TouchDesigner to accomplish. First in
          TouchDesigner I created a simple animation of our floating man getting
          closer to camera. Then I used After Effects to create the bulk of the
          effects. The particle effects were created using the Universe plugin
          from Maxon. I also used the acid shader I created to add more volume
          to the scene as the outro builds up. Finally, I composited everything
          within After Effects and we added that to our final video. The end
          result of my work can be seen below.
        </p>
        <br></br>
        <div className="relative mx-4 sm:mx-8 md:mx-24 mb-4 fullscreen:h-screen">
          <MuxPlayer
            title="Take a Chance Outro"
            src="https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/take-a-chance-projection-map-outro.webm"
            load="idle"
            playsinline
            controls
            className="aspect-video"
          />
        </div>
        <h1 className={h1Class} id="final-product">
          Final Product
        </h1>
        <p>
          After all was done, we presented the creation live at Kumler Chapel to
          an auidence. Here is a recording of it:
        </p>
        <br></br>
        <div className="relative mx-4 sm:mx-8 md:mx-24 mb-4 fullscreen:h-screen">
          <VideoPlayer
            title="Take a Chance Live @ Kumler Chapel"
            src="https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/kumler-chapel-take-a-chance.webm"
            backupSrc="https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/kumler-chapel-take-a-chance.mp4"
            load="idle"
            playsinline
            controls
            className="aspect-video"
          />
        </div>
        <p>And here is the final video output that was projected:</p>
        <div className="relative mx-4 sm:mx-8 md:mx-24 mt-4 fullscreen:h-screen">
          <VideoPlayer
            title="Take a Chance Projection Map"
            src="https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/take-a-chance-projection-map-final.webm"
            backupSrc="https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/take-a-chance-projection-map-final.mp4"
            load="idle"
            playsinline
            controls
            className="aspect-video"
          />
        </div>
      </div>
    </main>
  );
}
