import ProjectPreview from "@/components/common/project-preview";
import SimpleTopbar from "@/components/common/simple-topbar";

export default function Apps() {
  return (
    <main className="flex flex-col min-h-screen items-center overflow-x-clip">
      <SimpleTopbar title={"Design"} upSrc={"/"}></SimpleTopbar>
      <div className="mt-8 md:mt-12">
        <ProjectPreview
          name={"Virtualso"}
          textSize={
            "text-[35px] sm:text-[50px] md:text-[125px] md:group-hover:text-[175px]"
          }
          textColor={"text-blue-300"}
          link={"/design/virtualso"}
          color={"bg-blue-200"}
          blurOnHover
          image={
            "https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/virtualso-scope-analysis.webp"
          }
        ></ProjectPreview>
        <ProjectPreview
          name={"Aureus"}
          textSize={
            "text-[35px] sm:text-[50px] md:text-[125px] md:group-hover:text-[175px]"
          }
          textColor={"text-pink-200"}
          link={"/design/aureus"}
          color={"bg-red-300"}
          blurOnHover
          image={
            "https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/AureusBanner.webp"
          }
        ></ProjectPreview>
        <ProjectPreview
          name={"My Portfolio"}
          textSize={
            "text-[35px] sm:text-[50px] md:text-[125px] md:group-hover:text-[175px]"
          }
          textColor={"text-white"}
          link={"/design/portfolio"}
          color={"bg-orange-200"}
          blurOnHover
          image={
            "https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/portfolio-home.webp"
          }
        ></ProjectPreview>
      </div>
    </main>
  );
}
