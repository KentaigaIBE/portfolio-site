import ProjectPreview from "@/components/common/project-preview";
import SimpleTopbar from "@/components/common/simple-topbar";

export default function Games() {
  return (
    <main className="flex flex-col min-h-screen items-center overflow-x-clip">
      <SimpleTopbar title={"Games"} upSrc={"/"}></SimpleTopbar>
      <div className="mt-8 md:mt-12">
        <ProjectPreview
          name={"Skulk"}
          textSize={"text-[75px] md:text-[125px] md:group-hover:text-[175px]"}
          textColor={"text-slate-300"}
          link={"/games/skulk"}
          color={"bg-slate-200"}
          image={
            "https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/skulk-forest-screenshot.webp"
          }
        ></ProjectPreview>
        <ProjectPreview
          name={"Blessed are the Meek"}
          textSize={
            "text-[25px] sm:text-[35px] md:text-[75px] md:group-hover:text-[100px]"
          }
          textColor={"text-blue-400"}
          link={"/games/blessed-are-the-meek"}
          color={"bg-blue-300"}
          image={
            "https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/blessed-are-the-meek-library.webp"
          }
        ></ProjectPreview>
        <ProjectPreview
          name={"Pride And Accomplishment"}
          textSize={
            "text-[25px] sm:text-[35px] md:text-[75px] md:group-hover:text-[100px]"
          }
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
