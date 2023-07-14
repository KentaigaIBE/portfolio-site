import ProjectPreview from "@/components/common/project-preview";
import SimpleTopbar from "@/components/common/simple-topbar";
import Link from "next/link";

export default function Games() {
  return (
    <main className="flex flex-col min-h-screen items-center pw-24 animated-gradient overflow-x-clip">
      <SimpleTopbar title={"Games"} upSrc={"/"}></SimpleTopbar>
      <div className="">
        <ProjectPreview
          name={"Skulk"}
          textSize={"text-[125px] group-hover:text-[175px]"}
          textColor={"text-slate-300"}
          link={"/games/skulk"}
          color={"bg-slate-200"}
          image={
            "https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/skulk-forest-screenshot.webp"
          }
        ></ProjectPreview>
        <ProjectPreview
          name={"Pride And Accomplishment"}
          textSize={"text-[75px] group-hover:text-[100px]"}
          textColor={"text-blue-300"}
          link={"/games/pride-and-accomplishment"}
          color={"bg-blue-200"}
          image={
            "https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/pride-and-accomplishment.webp"
          }
        ></ProjectPreview>
      </div>
    </main>
  );
}
