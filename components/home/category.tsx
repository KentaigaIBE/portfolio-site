import Link from "next/link";
import Image from "next/image";

export default function Category(props: any) {
  const overlayClass = `${props.color} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full z-10 opacity-50 group-hover:opacity-0 transition-opacity duration-1000`;
  return (
    <div className="flex flex-col w-1/4 min-h-screen border-black border-r-8 border-l-8 hover:w-full transition-all duration-1000 relative group">
      <Link href={props.link}>
        <div className="relative">
          <Image
            className="w-full h-screen opacity-50 group-hover:opacity-100 transition-opacity duration-1000 z-0 object-cover"
            src={props.image}
            alt={""}
            width={1920}
            height={1080}
          />
          <div className={overlayClass}></div>
          <h2 className="text-orange-300 text-[125px] group-hover:text-[175px] transition-all duration-1000 font-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase -rotate-90 group-hover:rotate-0 drop-shadow-lg z-20">
            {props.name}
          </h2>
        </div>
      </Link>
    </div>
  );
}
