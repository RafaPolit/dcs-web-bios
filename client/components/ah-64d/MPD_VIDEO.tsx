import React from "react";
import { useRecoilValue } from "recoil";
import { dcsDataState } from "../../atoms/dcsData";
import { MPDBRTKnob } from "./MPDBRTKnob";

type MPD_VIDEOProps = {
  position: "PLT" | "CPG";
  side: "L" | "R";
};

const MPD_VIDEO = ({ position, side }: MPD_VIDEOProps) => {
  const dcsData = useRecoilValue(dcsDataState);
  const brt = parseInt(dcsData[`${position}_MPD_${side}_VIDEO`] || "32767");

  return (
    <div className="absolute w-[33px] h-[33px] left-[60px] top-[-8px] text-left">
      <MPDBRTKnob brt={brt} />
    </div>
  );
};

export { MPD_VIDEO };
