import ProjectPreview from "@/components/common/project-preview";
import SimpleTopbar from "@/components/common/simple-topbar";

export default function Apps() {
  return (
    <main className="flex flex-col min-h-screen items-center pw-24 overflow-x-clip">
      <SimpleTopbar title={"Apps & Sites"} upSrc={"/"}></SimpleTopbar>
      <div className="">
        <ProjectPreview
          name={"Virtualso"}
          textSize={"text-[125px] group-hover:text-[175px]"}
          textColor={"text-blue-300"}
          link={"/apps/virtualso"}
          color={"bg-blue-200"}
          blurOnHover
          image={
            "https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/virtualso-scope-analysis.webp"
          }
        ></ProjectPreview>
        <ProjectPreview
          name={"My Portfolio"}
          textSize={"text-[125px] group-hover:text-[175px]"}
          textColor={"text-white"}
          link={"/apps/portfolio"}
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
