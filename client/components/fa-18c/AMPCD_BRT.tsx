import React from "react";
import { useRecoilValue } from "recoil";
import { dcsDataState } from "../../atoms/dcsData";
import { AMPCDKnob } from "./AMPCDKnob";

const AMPCD_BRT = () => {
  const dcsData = useRecoilValue(dcsDataState);
  const brt = parseInt(dcsData[`AMPCD_BRT_CTL`] || "32767");

  return (
    <div className="absolute w-[28px] h-[28px] left-[42.8%] top-[13px] text-left">
      <AMPCDKnob brt={brt} />
    </div>
  );
};

export { AMPCD_BRT };
