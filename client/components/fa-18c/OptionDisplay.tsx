import React from "react";
import { UFCChar } from "./UFCChar";

type OptionDisplayProps = {
  text: string;
  cue: string;
  className?: string;
};

const OptionDisplay = ({ text, cue, className }: OptionDisplayProps) => {
  const char1 = text.split("")[0] || " ";
  const char2 = text.split("")[1] || " ";
  const char3 = text.split("")[2] || " ";
  const char4 = text.split("")[3] || " ";

  return (
    <div className={`${className} absolute w-[132px] h-[22px]`}>
      <UFCChar className="left-0" char={cue} cue />
      <UFCChar className="left-[11px]" char={char1} />
      <UFCChar className="left-[44px]" char={char2} />
      <UFCChar className="left-[77px]" char={char3} />
      <UFCChar className="left-[110px]" char={char4} />
    </div>
  );
};

const memoedOptionDisplay = React.memo(OptionDisplay);

export { memoedOptionDisplay as OptionDisplay };
