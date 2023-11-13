import SimpleTopbar from "@/components/common/simple-topbar";
import TitleImage from "@/components/common/title-image";

export default function Skulk() {
  const h1Class = "text-3xl font-bold mb-4 text-slate-300";

  return (
    <main className="flex min-h-screen flex-col items-center pw-24 h-screen animated-gradient">
      <SimpleTopbar title={"Skulk"} upSrc={"/games"}></SimpleTopbar>
      <TitleImage
        name={"Skulk"}
        textSize={"text-[75px] md:text-[125px]"}
        textColor={"text-slate-300"}
        color={"bg-slate-200"}
        image={
          "https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/skulk-forest-screenshot.webp"
        }
      ></TitleImage>
      {/* Body conent */}
      <div className="my-8 mx-4 w-3/4 self-center">
        <h1 className={h1Class} id="introduction">
          What is Skulk?
        </h1>
        <p>
          Skulk is an in-development 3D stealth-action game where you must
          escape the depths while avoid dangerous creatures that lurk in the
          dark. You must find whatever source of light you can in order to see
          your way through pitch-black lands and hopefully find a way back to
          the surface. The game is being created in Unreal Engine 5 and is being
          made entirely by myself.
        </p>
        <br></br>
        <p>
          Updates relating to the game&apos;s development will be posted here
          one a major milestone is reached!
        </p>
      </div>
    </main>
  );
}
