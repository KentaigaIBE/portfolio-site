import ProjectPreview from "@/components/common/project-preview";
import Link from "next/link";

export default function Art() {
  return (
    <main className="flex flex-col min-h-screen items-center pw-24 animated-gradient overflow-x-clip">
      <div className="fixed h-12 w-screen bg-white drop-shadow-lg z-40">
        <Link href={"/"}>
          <button className="fixed right-12 top-6 bg-orange-400 w-12 h-12 z-50 drop-shadow-lg"></button>
        </Link>
      </div>
      <h1 className="fixed top-2 text-orange-300 font-bold text-3xl z-50">
        Art
      </h1>
      <div className="">
        <ProjectPreview
          name={"Dua Lipa Spotify Canvases"}
          textSize={"text-[75px] group-hover:text-[100px]"}
          textColor={"text-pink-300"}
          link={"/art/dua-lipa-spotify"}
          color={"bg-slate-200"}
          image={
            "https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/DuaLipaLoops.webp"
          }
        ></ProjectPreview>
        <ProjectPreview
          name={"Take a Chance"}
          textSize={"text-[125px] group-hover:text-[175px]"}
          textColor={"text-indigo-300"}
          link={"/art/take-a-chance"}
          color={"bg-blue-200"}
          image={
            "https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/skulk-forest-screenshot.webp"
          }
        ></ProjectPreview>
      </div>
    </main>
  );
}
