"use client";

import { useRef, useState } from "react";
import { BsCaretRightFill } from "react-icons/bs";

export default function CollapsibleBox(props: any) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgClass = `${props.backgroundColor} flex flex-col my-4 rounded-md`;
  const barClass = `${props.barColor} flex flex-row justify-left p-2 space-x-4 items-center rounded-md`;

  const getContentHeight = () => {
    if (contentRef.current) {
      let height = contentRef.current.scrollHeight + 24;
      return height + "px";
    }
    return "0";
  };

  const contentStyle = {
    maxHeight: open ? getContentHeight() : "0",
    marginTop: open ? "0.5rem" : "0",
    padding: open ? "0.5rem" : "0",
    transition: `* ${open ? 1000 : 500}ms ease-in-out`,
  };

  return (
    <div className={bgClass}>
      <div className={barClass}>
        <button className="text-4xl font-bold" onClick={() => setOpen(!open)}>
          {open ? (
            <BsCaretRightFill className="rotate-90 transition-transform duration-500"></BsCaretRightFill>
          ) : (
            <BsCaretRightFill className="rotate-0 transition-transform duration-500"></BsCaretRightFill>
          )}
        </button>
        <h1 className="text-md">{props.title}</h1>
      </div>
      <div
        ref={contentRef}
        style={contentStyle}
        className={"overflow-hidden transition-all duration-1000"}
      >
        {props.children}
      </div>
    </div>
  );
}
