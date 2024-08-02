import LazyMux from "@/components/common/mux-player-passthrough";
import SimpleTopbar from "@/components/common/simple-topbar";
import TitleImage from "@/components/common/title-image";
import muxBlurHash from "@mux/blurhash";
import MuxPlayer from "@mux/mux-player-react/lazy";
import Image from "next/image";

export default async function TakeAChance() {
  const h1Class = "text-3xl font-bold mb-4 text-indigo-300";

  return (
    <main className="flex bg-white dark:bg-black min-h-screen flex-col pw-24 overflow-x-clip items-center">
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
      <div className="flex flex-col mt-8 mx-4 w-3/4 ">
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
        <LazyMux
          className="relative mx-4 sm:mx-8 md:mx-24 mb-4"
          title="Take a Chance Outro"
          metadataVideoId="take-a-chance-outro"
          metadataVideoTitle="Take a Chance Outro"
          streamType="on-demand"
          playbackId="Ink88jXmD1ZAEaE8UCSvI95RY018zXHagTTnLjnPQ4N4"
          aspectRatio={16 / 9}
          thumbnailTime={45}
          placeholder={
            (
              await muxBlurHash(
                "Ink88jXmD1ZAEaE8UCSvI95RY018zXHagTTnLjnPQ4N4",
                {
                  time: 45,
                }
              )
            ).blurHashBase64
          }
          accentColor="#818CF8"
          primaryColor="#FFFFFF"
          secondaryColor="#000000"
          preload="auto"
        />
        <h1 className={h1Class} id="final-product">
          Final Product
        </h1>
        <p>
          After all was done, we presented the creation live at Kumler Chapel to
          an auidence. Here is a recording of it:
        </p>
        <br></br>
        <LazyMux
          className="relative mx-4 sm:mx-8 md:mx-24 mb-4"
          title="Take a Chance Live @ Kumler Chapel"
          metadataVideoId="take-a-chance-live"
          metadataVideoTitle="Take a Chance Live @ Kumler Chapel"
          streamType="on-demand"
          playbackId="2qX1VevXcZKxJf2yUjdX7GwCMrBc3Ak7PpTxk487csU"
          aspectRatio={16 / 9}
          thumbnailTime={30}
          placeholder={
            (
              await muxBlurHash("2qX1VevXcZKxJf2yUjdX7GwCMrBc3Ak7PpTxk487csU", {
                time: 30,
              })
            ).blurHashBase64
          }
          accentColor="#818CF8"
          primaryColor="#FFFFFF"
          secondaryColor="#000000"
          preload="auto"
        />
        <p>And here is the final video output that was projected:</p>
        <LazyMux
          className="relative mx-4 sm:mx-8 md:mx-24 my-4"
          title="Take a Chance Projection Map"
          metadataVideoId="take-a-chance-projection-map"
          metadataVideoTitle="Take a Chance Projection Map"
          streamType="on-demand"
          playbackId="Lk7Na0202FYU01Kg202GL3z7VyUtchd3zugVKDefNkwna9Q"
          aspectRatio={8 / 5}
          thumbnailTime={15}
          placeholder={
            (
              await muxBlurHash(
                "Lk7Na0202FYU01Kg202GL3z7VyUtchd3zugVKDefNkwna9Q",
                {
                  time: 15,
                }
              )
            ).blurHashBase64
          }
          accentColor="#818CF8"
          primaryColor="#FFFFFF"
          secondaryColor="#000000"
          preload="auto"
        />
      </div>
    </main>
  );
}
