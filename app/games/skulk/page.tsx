import SimpleTopbar from "@/components/common/simple-topbar";
import TitleImage from "@/components/common/title-image";

export default function Skulk() {
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
    </main>
  );
}
