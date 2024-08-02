import FloatQuote from "@/components/common/float-quote";
import LazyMux from "@/components/common/mux-player-passthrough";
import SimpleTopbar from "@/components/common/simple-topbar";
import TitleImage from "@/components/common/title-image";
import muxBlurHash from "@mux/blurhash";
import Image from "next/image";

export default async function PrideAndAccomplishment() {
  const h1Class = "text-3xl font-bold mb-4 text-blue-400";
  return (
    <main className="flex min-h-screen flex-col items-center pw-24 overflow-x-clip">
      <SimpleTopbar
        title={"Blessed are the Meek"}
        upSrc={"/games"}
      ></SimpleTopbar>
      <TitleImage
        name={"Blessed are the Meek"}
        textSize={"text-[25px] sm:text-[35px] md:text-[75px]"}
        textColor={"text-blue-400"}
        color={"bg-blue-300"}
        blur={"blur-[3px]"}
        image={
          "https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/blessed-are-the-meek-library.webp"
        }
      ></TitleImage>
      {/* Body conent */}
      <div className="text-black dark:text-white my-8 mx-4 w-3/4 p-4">
        <h1 className={h1Class} id="introduction">
          Introduction
        </h1>
        <p>
          Blessed are the Meek is a video game I created for my final project in
          Professor Geoffrey Long&apos;s Writing for Games class at Miami
          University. A small team of classmates came together to create a
          narrative and world for our games to explore. The larger project we
          created is titled Scriptum Stellarum, which follows the aventures of
          Lyra Doxapatris, a young woman with the power to use astrology to
          manipulate the world her.
        </p>
        <br></br>
        <p>
          The project my group created was split up similar to how it would be
          in a professional setting. We went through a development and design
          timeline that mirroed that of what AAA game studios use. We split up
          work when neccessary and came together to discuss the project as a
          whole. In this project, I served as both a narrative designer and game
          programmer. In the following sections I wlll explain the overall work
          my team did, what I did personally, and the final result of our work.
        </p>
        <br></br>
        <h1 className={h1Class} id="scriptum-stellarum">
          Scriptum Stellarum
        </h1>
        <p>
          The bulk of the work for this prodject was written into a narrative
          design document. We split up the work each team memeber would do based
          on what they felt they were best at. I was tasked with creating the
          the lore surrounding the world of Scriptum Stellarum. I created the
          main timelime the world follows, as well as anything related to
          governmental affairs and geopolitics. The world we crafted focused on
          embracing the astrological history of different regions in the real
          world. The main three nations of Alexandria, Europa, and China each
          represent different zodiac systems and each society interacts with
          astrology differently, which drives conflict among them. Most of the
          events that led up to the main story are based on alternate history,
          where we ask how things would be different if you could harness
          astrological power.
        </p>
        <br></br>
        <p>
          In addition to the lore, I also designed certain societal aspects and
          norms. In particular I wrote what the language and literature of each
          nation is like, as well as what their music sounds like and what it
          means to the people. I also created the character of Praefectus Sadiki
          Mustaf who serves as one of the main antagnositc forces in the game.
          Additonally, I wrote for the character of King Bambe Tun of the Mayan
          Kingdom, an ally during Lyra&apos;s journey. Certain organizations
          like The One Million Faces, China&apos;s spy operation, are my
          creation. Other miscellaneous things like the writing some character
          arcs and the creation of certain locations like Turris Caeli and the
          Ancient Observatory were also my ideas.
        </p>
        <br></br>
        <p>
          Below is a synopsis of the main story as seen in our narrative design
          document. If you&apos;re interested in reading the full 58-page
          document, you can find it{" "}
          <a
            className="text-blue-500 hover:underline hover:text-blue-700 visited:text-purple-600"
            href="https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/ScriptumStellarumNDD.pdf"
          >
            here
          </a>
          .
        </p>
        <br></br>
        <FloatQuote
          quote={
            "“Lyra Doxapatris is a young woman who has been graced with the ability to harness the power of all of the zodiac signs. One day, Lyra&apos;s rejected sibling Blair is discovered to be a part of a cult known as the Restoration of Nature&apos;s Order, who have tasked themselves with ridding the world of astrology for good. Lyra sets out with her friend Basil to save her sibling from the cult. Throughout this journey, the pair get themselves involved in everything from the current war between rival nations Alexandria and China to the secret magic of the isolated nation of the Maya, tracking Blair all the while. Eventually, Lyra is able to track down where the Restoration of Nature&apos;s Order is hiding and confronts them, but ends up being captured. From there, the friends Lyra made along her journey come to rescue her, but by the time they reach her, the astrological marks grant her power have been burned off. In this final confrontation, Blair betrays the Order and fights alongside Lyra&apos;s friends to defeat the cult once and for all. After the dust settles, Lyra is freed and the group heads home having rid the world of a great threat.”"
          }
          attribution={
            "— Excerpt from the Scriptum Stellarum Narrative Design Document"
          }
          lineColor={"bg-orange-300"}
        ></FloatQuote>
        <h1 className={h1Class} id="blessed-are-the-meek">
          Blessed are the Meek
        </h1>
        <p>
          In addition to the narrative design document, we were each tasked with
          creating a game that represented a snippet of the story we wanted to
          tell. For my game, I chose to center it around a certain chapter of
          the story that involves Lyra visiting an abandoned observatory in
          search of a powerful artifact. The game features enemies known as
          “Umbrae” that are corrupted entities that used to be citizens of this
          desolate city. You must get the artifact and escape before falling to
          the Umbrae.
        </p>
        <br></br>
        <p>
          The engine I chose to create this game in was Unity. Unity is a very
          versatile engine that allows you to build and run games quickly on a
          variety of platforms. Unity uses the C# coding language for most of
          what a game requires, so that is the language I adopted as well. I
          used Microsoft Visual Studio 2022 as my IDE (integrated development
          environment) where I wrote most of the code for this game. Aseprite
          was used to create all of the textures used in the game, no asset
          packs were added, everything is original. All these tools were used on
          the Windows 11 operating system.
        </p>
        <br></br>
        <p>
          The game itself is a top-down action game where you must interact with
          your allies and fight using astrological powers. There are multiple
          dialouge options availble so each playthough can provide unique story
          experiences. There is also optional lore to be found in the game that
          will teach you more about the lore of the world.
        </p>
        <br></br>
        <p>
          The dialouge system in the game is powered by the “Text Animator for
          Unity” plugin by Febucci. This plugin allows for easy creation of
          dialouge boxes by using a custom programming language to automate the
          process of making dialouge trees. The plugin also allows for text
          effects to be added to help control the pace of line delivery. You can
          see in the images below examples of what the dialouge system looks
          like.
        </p>
        <Image
          alt="dialouge screenshot"
          src={
            "https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/blessed-are-the-meek-dialouge-option.webp"
          }
          width={3440}
          height={1440}
          className="float-none md:float-right my-4 self-center rounded-md border-blue-500 border-8 shadow-lg shadow-zinc-800"
        />
        <p>See below how dialouge pops up as it is tpyed out on the screen:</p>
        <Image
          alt="dialouge popup text"
          src={
            "https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/blessed-are-the-meek-dialouge-popin.webp"
          }
          width={3440}
          height={450}
          className="float-none md:float-right my-4 self-center rounded-md border-blue-500 border-8 shadow-lg shadow-zinc-800"
        />
        <p>
          Dialouge also pauses the game, shows additonal hidden characters, and
          zooms the camera to an appropriate distance.
        </p>
        <Image
          alt="dialouge camera zoom"
          src={
            "https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/blessed-are-the-meek-dynamic-camera.webp"
          }
          width={3440}
          height={1440}
          className="float-none md:float-right my-4 self-center rounded-md border-blue-500 border-8 shadow-lg shadow-zinc-800"
        />
        <p>
          Interact points like the in the following image serve as a way to add
          optional dialouge to a scene. See also how light rays are used to
          effect the underlying color of the sprites. You can also see how
          particle effects are used to add visual detail to the scene.
        </p>
        <span className="flex w-full h-fit justify-between my-4">
          <Image
            alt="dialouge interact point"
            src={
              "https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/blessed-are-the-meek-interact.webp"
            }
            width={880}
            height={764}
            className="aspect-square object-cover w-[45%] self-center rounded-md border-blue-500 border-8 shadow-lg shadow-zinc-800"
          />
          <Image
            alt="light rays"
            src={
              "https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/blessed-are-the-meek-light-rays.webp"
            }
            width={1090}
            height={1042}
            className="aspect-square object-cover w-[45%] self-center rounded-md border-blue-500 border-8 shadow-lg shadow-zinc-800"
          />
        </span>
        <p>
          And what would an action game be without combat? The combat system in
          Blessed are the Meek is based on a mana system where using abilities
          cost mana. Mana and health rengen slowly over time, so management of
          those stats is important. Lyra&apos;s main ability is a magic sword
          with long range, useful for doing big damage to large groups of
          enemies. She also has a very short range punch that costs no mana to
          use, making it a useful backup option.
        </p>
        <Image
          alt="dialouge camera zoom"
          src={
            "https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/blessed-are-the-meek-combat.webp"
          }
          width={3440}
          height={1440}
          className="float-none md:float-right my-4 self-center rounded-md border-blue-500 border-8 shadow-lg shadow-zinc-800"
        />
        <h1 className={h1Class} id="conclusion">
          Conclusion
        </h1>
        <p>
          This project served as a trial by fire for my team and I. We had to
          follow real-world processes and had similar timelines to professional
          teams. I learned a lot about the process of creating a game from start
          to finish, working with others, and writing interesing and engaging
          stories.
        </p>
        <br></br>
        <p>
          As of writing this it has been a couple of years since I last worked
          on this project. I can say that the skills I gained while designing
          and developing Scriptum Stellarum are still used in my work today.
          Without what I learned here, my ability to work with a team and write
          collaborative living documents like narrative design docs and game
          design docs would be much less refined.
        </p>
        <br></br>
        <h1 className={h1Class} id="download">
          Download
        </h1>
        <p>
          Blessed are the Meek is free and available to anyone using a browser.
          The online version is powered by WebGL and thus must be run on an
          actual computer (not a phone).
        </p>
        <iframe
          className="mt-4 max-w-full"
          src="https://itch.io/embed/1511741?bg_color=222222&amp;fg_color=eeeeee&amp;border_color=363636"
          width="552"
          height="167"
        ></iframe>
      </div>
    </main>
  );
}
