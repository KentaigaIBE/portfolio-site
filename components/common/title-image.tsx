import Image from "next/image";

export default function TitleImage(props: any) {
  const overlayClass = `${props.color} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full z-10 opacity-50 group-hover:opacity-0 transition-opacity duration-1000`;
  const textClass = `${props.textSize} + ${props.textColor} + w-full text-center transition-all duration-1000 font-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase group-hover:rotate-0 drop-shadow-lg z-20`;
  let imageClass = `w-full h-full opacity-50 z-0 object-cover`;
  if (props.blur) {
    imageClass += ` ${props.blur}`;
  }
  return (
    <div className="relative top-12 w-screen h-96 mb-12">
      <Image
        className={imageClass}
        src={props.image}
        priority
        alt={""}
        width={1920}
        height={720}
      />
      <div className={overlayClass}></div>
      <h2 className={textClass}>{props.name}</h2>
    </div>
  );
}
