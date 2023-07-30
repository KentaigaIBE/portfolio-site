import Link from "next/link";
import Image from "next/image";

export default function Category(props: any) {
  const overlayClass = `${props.color} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full z-10 opacity-50 md:group-hover:opacity-0 transition-opacity duration-1000`;
  return (
    <div className="flex flex-col w-full md:w-1/4 h-[25vh] md:h-screen border-black border-b-4 border-t-4 md:border-b-0 md:border-t-0 md:border-r-8 md:border-l-8 md:hover:w-full transition-all duration-1000 relative group">
      <Link href={props.link}>
        <div className="relative">
          <Image
            className="w-full h-[24.3vh] md:h-screen opacity-50 md:group-hover:opacity-100 transition-opacity duration-1000 z-0 object-cover"
            src={props.image}
            alt={""}
            width={1920}
            height={1080}
            priority
          />
          <div className={overlayClass}></div>
          <h2 className="text-orange-300 text-[70px] md:text-[125px] md:group-hover:text-[175px] transition-all duration-1000 font-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase md:-rotate-90 md:group-hover:rotate-0 drop-shadow-lg z-20">
            {props.name}
          </h2>
        </div>
      </Link>
    </div>
  );
}
