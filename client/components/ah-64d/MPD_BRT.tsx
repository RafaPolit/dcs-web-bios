import React from "react";
import { useRecoilValue } from "recoil";
import { dcsDataState } from "../../atoms/dcsData";
import { MPDBRTKnob } from "./MPDBRTKnob";

type MPD_BRTProps = {
  position: "PLT" | "CPG";
  side: "L" | "R";
};

const MPD_BRT = ({ position, side }: MPD_BRTProps) => {
  const dcsData = useRecoilValue(dcsDataState);
  const brt = parseInt(dcsData[`${position}_MPD_${side}_BRT`] || "32767");

  return (
    <div className="absolute w-[32px] h-[32px] left-[6px] top-[46px] text-left">
      <MPDBRTKnob brt={brt} />
    </div>
  );
};

export { MPD_BRT };
