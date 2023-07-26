export default function FloatQuote(props: any) {
  const lineClass = `${props.lineColor} absolute -left-4 top-0 bottom-0 w-0.5 bg-white`;
  const quoteClass = `${props.italicize ? "italic" : ""}`;
  return (
    <div className="flex flex-col ml-4 mb-4">
      <div className="relative">
        <div className={lineClass}></div>
        <p className={quoteClass}>{props.quote}</p>
        <p className="text-gray-500">{props.attribution}</p>
      </div>
    </div>
  );
}
