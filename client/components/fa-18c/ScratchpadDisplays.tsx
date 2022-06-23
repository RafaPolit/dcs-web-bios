import React from "react";
import { useRecoilValue } from "recoil";
import { dcsDataState } from "../../atoms/dcsData";
import { ScratchpadNumbers } from "./ScratchpadNumbers";
import { UFCChar } from "./UFCChar";

const ScratchpadDisplays = () => {
  const dcsData = useRecoilValue(dcsDataState);
  const str1 = dcsData["UFC_SCRATCHPAD_STRING_1_DISPLAY"] || "";
  const str2 = dcsData["UFC_SCRATCHPAD_STRING_2_DISPLAY"] || "";
  const numbers = dcsData["UFC_SCRATCHPAD_NUMBER_DISPLAY"] || "";

  return (
    <div className="absolute left-[83px] top-[45px] w-[168px] h-[22px]">
      <UFCChar className="left-[0px] top-0" char={str1} />
      <UFCChar className="left-[33px] top-0" char={str2} />
      <ScratchpadNumbers className="left-[63px] top-0" text={numbers} />
    </div>
  );
};

export { ScratchpadDisplays };
