import ProjectPreview from "@/components/common/project-preview";
import SimpleTopbar from "@/components/common/simple-topbar";

export default function Art() {
  return (
    <main className="flex flex-col min-h-screen items-center overflow-x-clip">
      <SimpleTopbar title={"Art"} upSrc={"/"}></SimpleTopbar>
      <div className="mt-8 md:mt-12">
        <ProjectPreview
          name={"Dua Lipa Spotify Canvases"}
          textSize={"text-[30px] md:text-[75px] md:group-hover:text-[100px]"}
          textColor={"text-pink-300"}
          link={"/art/dua-lipa-spotify"}
          color={"bg-slate-200"}
          image={
            "https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/DuaLipaLoops.webp"
          }
        ></ProjectPreview>
        <ProjectPreview
          name={"Take a Chance"}
          textSize={"text-[50px] md:text-[125px] md:group-hover:text-[175px]"}
          textColor={"text-indigo-300"}
          link={"/art/take-a-chance"}
          color={"bg-blue-200"}
          image={
            "https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/take-a-chance-wormhole.webp"
          }
        ></ProjectPreview>
      </div>
    </main>
  );
}
