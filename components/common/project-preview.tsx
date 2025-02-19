import Link from "next/link";
import Image from "next/image";

export default function ProjectPreview(props: any) {
  const overlayClass = `${props.color} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full z-10 opacity-50 group-hover:opacity-0 transition-opacity duration-500`;
  const textClass = `${props.textSize} + ${props.textColor} + w-full p-4 text-center transition-all duration-500 font-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase group-hover:rotate-0 drop-shadow-lg z-20`;

  let imageClass =
    "w-full h-full opacity-50 group-hover:opacity-100 transition-all duration-500 z-0 object-cover";
  if (props.blurOnHover) {
    imageClass += " blur-0 group-hover:blur-sm";
  }

  return (
    <div className="block justify-start h-[33vh] md:h-96 md:hover:h-[36rem] border-black border-r-8 border-l-8 transition-all duration-500 relative group border-b-8">
      <Link href={props.link} className="relative h-full">
        <div className="relative w-screen h-full group-hover:h-full transition-all duration-500">
          <Image
            className={imageClass}
            src={props.image}
            alt={""}
            width={1920}
            height={720}
          />
          <div className={overlayClass}></div>
          <h2 className={textClass}>{props.name}</h2>
        </div>
      </Link>
    </div>
  );
}
