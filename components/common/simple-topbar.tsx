import Link from "next/link";
import { HiHome } from "react-icons/hi2";
import { HiArrowUturnUp } from "react-icons/hi2";

export default function SimpleTopbar(props: any) {
  return (
    <div className="fixed flex h-8 md:h-12 w-full bg-white dark:bg-zinc-900 drop-shadow-lg z-40 justify-between items-center">
      <Link href={"/"} className="h-full">
        <button className="flex justify-center items-center bg-orange-400 hover:bg-white w-8 md:w-12 h-full z-50 drop-shadow-lg transition-colors duration-1000 group">
          <HiHome className="text-white text-lg md:text-2xl group-hover:text-orange-400 group-hover:rotate-[360deg] transition-all duration-1000"></HiHome>
        </button>
      </Link>
      <div className="">
        <h1 className="text-orange-300 font-bold text-sm md:text-3xl z-50">
          {props.title}
        </h1>
      </div>
      <Link href={props.upSrc} className="h-full">
        <button className="flex justify-center items-center bg-orange-400 hover:bg-white w-8 md:w-12 h-full z-50 drop-shadow-lg transition-colors duration-1000 group">
          <HiArrowUturnUp className="text-white stroke-2 text-lg md:text-2xl group-hover:text-orange-400 group-hover:rotate-[360deg] transition-all duration-1000"></HiArrowUturnUp>
        </button>
      </Link>
    </div>
  );
}
