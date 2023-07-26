import ProjectPreview from "@/components/common/project-preview";
import SimpleTopbar from "@/components/common/simple-topbar";

export default function Essays() {
  return (
    <main className="flex flex-col min-h-screen items-center pw-24 animated-gradient overflow-x-clip">
      <SimpleTopbar title={"Essays"} upSrc={"/"}></SimpleTopbar>
      <div className="">
        <ProjectPreview
          name={"Psychophysiology and Design"}
          textSize={"text-[75px] group-hover:text-[100px]"}
          textColor={"text-blue-300"}
          link={"/essays/psychophysiology-and-design"}
          color={"bg-blue-200"}
          image={
            "https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/eyetracking_header.webp"
          }
        ></ProjectPreview>
      </div>
    </main>
  );
}
