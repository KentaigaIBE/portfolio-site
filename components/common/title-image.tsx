import Image from "next/image";

export default function TitleImage(props: any) {
  const divClass = `relative w-full overflow-x-clip h-[33vh] md:h-96 mt-8 md:mt-12 ${props.className}`;
  const overlayClass = `${props.color} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full z-10 opacity-50`;
  const textClass = `${props.textSize} + ${props.textColor} + w-full p-4 text-center transition-all duration-1000 font-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase drop-shadow-lg z-20`;
  let imageClass = `w-full h-full opacity-50 z-0 object-cover`;
  if (props.blur) {
    imageClass += ` ${props.blur}`;
  }
  return (
    <div className={divClass}>
      <Image
        className={imageClass}
        src={props.image}
        priority
        alt={""}
        width={1920}
        height={540}
      />
      <div className={overlayClass}></div>
      <h2 className={textClass}>{props.name}</h2>
    </div>
  );
}
