import ProjectPreview from "@/components/common/project-preview";
import SimpleTopbar from "@/components/common/simple-topbar";

export default function Essays() {
  return (
    <main className="flex flex-col min-h-screen items-center overflow-x-clip">
      <SimpleTopbar title={"Essays"} upSrc={"/"}></SimpleTopbar>
      <div className="mt-8 md:mt-12">
        <ProjectPreview
          name={"Psychophysiology and Design"}
          textSize={
            "text-[20px] sm:text-[25px] md:text-[65px] md:group-hover:text-[100px]"
          }
          textColor={"text-amber-300"}
          link={"/essays/psychophysiology-and-design"}
          color={"bg-blue-200"}
          blurOnHover
          image={
            "https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/eyetracking_header.webp"
          }
        ></ProjectPreview>
      </div>
    </main>
  );
}
