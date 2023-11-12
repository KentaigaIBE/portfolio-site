"use client";
{
  /* React Syntax Highlighter currently requires this */
}

import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function CodeHighlight(props: any) {
  return (
    <SyntaxHighlighter
      language={props.lang}
      style={tomorrowNightEighties}
      showLineNumbers={true}
      startingLineNumber={1}
      customStyle={props.style}
    >
      {props.codeString}
    </SyntaxHighlighter>
  );
}
