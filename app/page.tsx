import TimelineProject from "@/components/home/timeline-project";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pw-24 h-screen animated-gradient">
      <div className="absolute bg-orange-400 w-5 h-full z-[5] drop-shadow-lg"></div>
      <TimelineProject
        name={"Skulk"}
        link={"/skulk"}
        position={"left"}
        date={"June 28th, 2023"}
        imageSrc={
          "https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/portfolio-site.png"
        }
        backgroundColor={
          "linear-gradient(-45deg, #eeaeca, #94bbe9, #eeaeca, #eeaeca)"
        }
        colorA={"rgb(238, 174, 202)"}
        colorB={"rgb(148, 187, 233)"}
        colorC={"rgb(238, 174, 202)"}
        colorD={"rgb(238, 174, 202)"}
      ></TimelineProject>
      <TimelineProject
        name={"My Portfolio"}
        link={"/portfolio"}
        position={"right"}
        date={"June 13th, 2023"}
        imageSrc={
          "https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/portfolio-site.png"
        }
        backgroundColor={
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)"
        }
        colorA={"rgb(238, 119, 82)"}
        colorB={"rgb(231, 60, 126)"}
        colorC={"rgb(35, 166, 213)"}
        colorD={"rgb(35, 213, 171)"}
      ></TimelineProject>
    </main>
  );
}
