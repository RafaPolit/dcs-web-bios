import React from "react";
import { useRecoilValue } from "recoil";
import { dcsDataState } from "../../atoms/dcsData";
import { KUKnob } from "./KUKnob";

type KU_BRTProps = {
  position: "PLT" | "CPG";
};

const KU_BRT = ({ position }: KU_BRTProps) => {
  const dcsData = useRecoilValue(dcsDataState);
  const brt = parseInt(dcsData[`${position}_KU_BRT`] || "32767");

  return (
    <div className="absolute w-[44px] h-[44px] left-[36px] top-[333px] text-left">
      <KUKnob brt={brt} />
    </div>
  );
};

export { KU_BRT };
