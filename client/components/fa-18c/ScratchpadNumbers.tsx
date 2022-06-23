import React from "react";
import { UFCChar } from "./UFCChar";

type ScratchpadNumbersProps = {
  text: string;
  className?: string;
};

const ScratchpadNumbers = ({ text, className }: ScratchpadNumbersProps) => {
  const paddedText = text || "        ";

  const char1 = paddedText.substring(1, 2);
  const char2 = paddedText.substring(2, 3);
  const char3 = paddedText.substring(3, 4);
  const char4 = paddedText.substring(4, 5);
  const char5 = paddedText.substring(5, 6);
  const char6 = paddedText.substring(6, 7);
  const char7 = paddedText.substring(7, 8);

  return (
    <div className={`${className} absolute w-[108px] h-[22px]`}>
      <UFCChar className="left-[0px]" char={char1} half />
      <UFCChar className="left-[16px]" char={char2} half />
      <UFCChar className="left-[32px]" char={char3} half />
      <UFCChar className="left-[48px]" char={char4} half />
      <UFCChar className="left-[64px]" char={char5} half />
      <UFCChar className="left-[80px]" char={char6} half />
      <UFCChar className="left-[96px]" char={char7} half />
    </div>
  );
};

const memoedScratchpadNumbers = React.memo(ScratchpadNumbers);

export { memoedScratchpadNumbers as ScratchpadNumbers };
