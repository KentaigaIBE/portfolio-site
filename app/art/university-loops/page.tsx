import LazyMux from "@/components/common/mux-player-passthrough";
import SimpleTopbar from "@/components/common/simple-topbar";
import TitleImage from "@/components/common/title-image";
import muxBlurHash from "@mux/blurhash";

export default async function UniversityLoops() {
  const h1Class = "text-3xl font-bold mb-4 text-red-300";

  return (
    <main className="flex bg-white dark:bg-black min-h-screen flex-col pw-24 overflow-x-clip">
      <SimpleTopbar title={"University Loops"} upSrc={"/art"}></SimpleTopbar>
      <TitleImage
        name={"University Loops"}
        textSize={"text-[20px] md:text-[70px]"}
        textColor={"text-red-300"}
        color={"text-red-200"}
        blur={"blur-[3px]"}
        image={
          "https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/Loop6Thumbnail.webp"
        }
      ></TitleImage>
      {/* Body conent */}
      <div className="flex flex-col w-[100rem] self-center mt-8 mx-4">
        <h1 className={h1Class} id="overview">
          Overview
        </h1>
        <p>
          Below are the various loops I created while attending Miami
          University. These loops were created for various classes and projects,
          and were created using a combination of Adobe After Effects, Adobe
          Premiere Pro, Notch, TouchDesigner, and Adobe Illustrator.
        </p>
        <br></br>
        <h1 className={h1Class} id="wire-tide">
          Wire Tide
        </h1>
        <p>Made using Notch.</p>
        <br></br>
        <LazyMux
          className="relative mx-4 sm:mx-8 md:mx-24 mb-4 max-h-[66vh]"
          title="Wire Tide"
          metadataVideoId="wire-tide"
          metadataVideoTitle="Wire Tide"
          streamType="on-demand"
          playbackId="9Hoh3BGx9n801o8kto01VCHOAP5VxdwH7f02Oze1uvIzfI"
          aspectRatio={16 / 9}
          thumbnailTime={0}
          placeholder={
            (
              await muxBlurHash(
                "9Hoh3BGx9n801o8kto01VCHOAP5VxdwH7f02Oze1uvIzfI",
                {
                  time: 0,
                }
              )
            ).blurHashBase64
          }
          accentColor="#F87171"
          primaryColor="#FFFFFF"
          secondaryColor="#000000"
          preload="auto"
        />
        <h1 className={h1Class} id="dark-matter-ocean">
          Dark Matter Ocean
        </h1>
        <p>Made using TouchDesigner.</p>
        <br></br>
        <LazyMux
          className="relative mx-4 sm:mx-8 md:mx-24 mb-4"
          title="Dark Matter Ocean"
          metadataVideoId="dark-matter-ocean"
          metadataVideoTitle="Dark Matter Ocean"
          streamType="on-demand"
          playbackId="nhO0279E02ViszV7VxsBgVjTYl9Yhne02Mi7ltE5qkfYxc"
          aspectRatio={16 / 9}
          thumbnailTime={0}
          placeholder={
            (
              await muxBlurHash(
                "nhO0279E02ViszV7VxsBgVjTYl9Yhne02Mi7ltE5qkfYxc",
                {
                  time: 0,
                }
              )
            ).blurHashBase64
          }
          accentColor="#F87171"
          primaryColor="#FFFFFF"
          secondaryColor="#000000"
          preload="auto"
        />
        <h1 className={h1Class} id="solar-blue">
          Solar Blue
        </h1>
        <p>Made using After Effects and Red Giant Universe.</p>
        <br></br>
        <LazyMux
          className="relative mx-4 sm:mx-8 md:mx-24 mb-4"
          title="Solar Blue"
          metadataVideoId="solar-blue"
          metadataVideoTitle="Solar Blue"
          streamType="on-demand"
          playbackId="sekzZ2Y00mPfomsH4l01JIpRr1xo100e6wg500tr4tO957o"
          aspectRatio={16 / 9}
          thumbnailTime={0}
          placeholder={
            (
              await muxBlurHash(
                "sekzZ2Y00mPfomsH4l01JIpRr1xo100e6wg500tr4tO957o",
                {
                  time: 0,
                }
              )
            ).blurHashBase64
          }
          accentColor="#F87171"
          primaryColor="#FFFFFF"
          secondaryColor="#000000"
          preload="auto"
        />
        <h1 className={h1Class} id="invasion">
          Invasion
        </h1>
        <p>Made using After Effects and Red Giant Universe.</p>
        <br></br>
        <LazyMux
          className="relative mx-4 sm:mx-8 md:mx-24 mb-4"
          title="Invasion"
          metadataVideoId="invasion"
          metadataVideoTitle="Invasion"
          streamType="on-demand"
          playbackId="f8bNBqarQjZB3cLoo5u3PQL701r5Qd3UrF8B5snSJlJE"
          aspectRatio={16 / 9}
          thumbnailTime={0}
          placeholder={
            (
              await muxBlurHash(
                "f8bNBqarQjZB3cLoo5u3PQL701r5Qd3UrF8B5snSJlJE",
                {
                  time: 0,
                }
              )
            ).blurHashBase64
          }
          accentColor="#F87171"
          primaryColor="#FFFFFF"
          secondaryColor="#000000"
          preload="auto"
        />
        <h1 className={h1Class} id="starsurfer">
          Starsurfer
        </h1>
        <p>Made using After Effects and Red Giant Universe.</p>
        <br></br>
        <LazyMux
          className="relative mx-4 sm:mx-8 md:mx-24 mb-4"
          title="Starsurfer"
          metadataVideoId="starsurfer"
          metadataVideoTitle="Starsurfer"
          streamType="on-demand"
          playbackId="dmYgQOo3ABAiY00pgOvcuGCdpQfanvYkepykoimZFatM"
          aspectRatio={16 / 9}
          thumbnailTime={0}
          placeholder={
            (
              await muxBlurHash(
                "dmYgQOo3ABAiY00pgOvcuGCdpQfanvYkepykoimZFatM",
                {
                  time: 0,
                }
              )
            ).blurHashBase64
          }
          accentColor="#F87171"
          primaryColor="#FFFFFF"
          secondaryColor="#000000"
          preload="auto"
        />
        <h1 className={h1Class} id="notahol">
          Notahol
        </h1>
        <p>Made using After Effects and Red Giant Universe.</p>
        <br></br>
        <LazyMux
          className="relative mx-4 sm:mx-8 md:mx-24 mb-4"
          title="Notahol"
          metadataVideoId="notahol"
          metadataVideoTitle="Notahol"
          streamType="on-demand"
          playbackId="pYFlYYPcMpTcsiFt6ANuXpsGK42RirZySM6szPGBRiA"
          aspectRatio={16 / 9}
          thumbnailTime={0}
          placeholder={
            (
              await muxBlurHash("pYFlYYPcMpTcsiFt6ANuXpsGK42RirZySM6szPGBRiA", {
                time: 0,
              })
            ).blurHashBase64
          }
          accentColor="#F87171"
          primaryColor="#FFFFFF"
          secondaryColor="#000000"
          preload="auto"
        />
      </div>
    </main>
  );
}
