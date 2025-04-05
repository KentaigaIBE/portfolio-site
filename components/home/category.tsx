import Link from "next/link";
import Image from "next/image";

export default function Category(props: any) {
  const overlayClass = `${props.color} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full z-10 opacity-50 md:group-hover:bg-black transition-all duration-500`;
  return (
    <div className="flex flex-col w-full md:w-1/4 h-[25vh] md:h-screen border-black border-b-4 border-t-4 md:border-b-0 md:border-t-0 md:border-r-8 md:border-l-8 md:hover:w-full transition-all duration-500 relative group">
      <Link href={props.link}>
        <div className="relative">
          <Image
            className="w-full h-[24.3vh] md:h-screen opacity-50 md:group-hover:opacity-100 transition-all duration-500 z-0 object-cover blur-none md:group-hover:blur-sm"
            src={props.image}
            alt={""}
            width={1920}
            height={1080}
            priority
          />
          <div className={overlayClass}></div>
          <h2 className="bg-[linear-gradient(120deg,rgba(255,255,255,1)0%,rgba(255,255,255,1)50%,rgba(252,165,165,1)50%,rgba(253,186,116,1)100%)] bg-clip-text text-transparent [background-size:200%_200%] [background-position:0%_0%] md:group-hover:[background-position:100%_100%] text-[70px] md:text-[125px] md:group-hover:text-[175px] transition-all duration-500 font-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase md:rotate-90 md:group-hover:rotate-0 drop-shadow-lg z-20">
            {props.name}
          </h2>
        </div>
      </Link>
    </div>
  );
}
