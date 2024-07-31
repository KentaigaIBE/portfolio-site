import SimpleTopbar from "@/components/common/simple-topbar";
import TitleImage from "@/components/common/title-image";
import Link from "next/link";

export default function Portfolio() {
  const h1Class = "text-3xl font-bold mb-4 text-orange-300";

  return (
    <main className="flex min-h-screen flex-col items-center">
      <SimpleTopbar title={"Portfolio Site"} upSrc={"/design"}></SimpleTopbar>
      <TitleImage
        name={"Portfolio Site"}
        textSize={"text-[35px] sm:text-[50px] md:text-[125px]"}
        textColor={"text-white"}
        color={"bg-orange-200"}
        image={
          "https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/portfolio-home.webp"
        }
      ></TitleImage>
      {/* Body conent */}
      <div className="text-black dark:text-white my-8 mx-4 w-3/4 self-center">
        <h1 className={h1Class} id="my-portfolio-site">
          My Portfolio Site
        </h1>
        <p>
          If you&apos;ve made it here, it means you&apos;ve already explored my
          portfolio! This site is developed in React using the Next.JS
          framework. Images and videos are hosted on Amazon S3. The site is
          deployed via Vercel. The site is designed to be responsive yet smooth
          in its presentation and show off my skills in web development.
        </p>
        <br></br>
        <p>
          Want to see more on how this site is made? This site has a public
          GitHub repository! Find it here:{" "}
          <Link
            href="https://www.github.com/KentaigaIBE/portfolio-site"
            className="text-blue-600 visited:text-orange-200"
          >
            Kentaiga&apos;s GitHub
          </Link>
        </p>
      </div>
    </main>
  );
}
