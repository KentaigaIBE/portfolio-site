import Category from "./category";

export default function CategorySelector(props: any) {
  return (
    <div className="flex items-center align-middle flex-col md:flex-row">
      <Category
        name={"Games"}
        link={"/games"}
        color={"bg-red-200"}
        image={
          "https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/skulk-forest-screenshot.webp"
        }
      ></Category>
      <Category
        name={"Art"}
        link={"/art"}
        color={"bg-blue-200"}
        image={
          "https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/Loop7.webp"
        }
      ></Category>
      <Category
        name={"Design"}
        link={"/design"}
        color={"bg-green-200"}
        image={
          "https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/virtualso-scope-analysis.webp"
        }
      ></Category>
      <Category
        name={"Essays"}
        link={"/essays"}
        color={"bg-yellow-200"}
        image={
          "https://kentaiga-portfolio-images.s3.us-east-2.amazonaws.com/psychophysiology-essay.webp"
        }
      ></Category>
    </div>
  );
}
