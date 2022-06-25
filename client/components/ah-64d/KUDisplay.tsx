import React from "react";
import { useRecoilValue } from "recoil";
import { dcsDataState } from "../../atoms/dcsData";
import { KUDisplayLine } from "./KUDisplayLine";

type KUDisplayProps = {
  position: "PLT" | "CPG";
};

const regionSize = Math.floor(0xffff / 12);

const KUDisplay = ({ position }: KUDisplayProps) => {
  const dcsData = useRecoilValue(dcsDataState);
  const text = dcsData[`${position}_KU_DISPLAY`] || "";
  const brt = parseInt(dcsData[`${position}_KU_BRT`] || (0x8888).toString());
  const brtRegion = Math.floor(brt / regionSize);

  return (
    <div className="absolute w-[346px] h-[18px] left-[84px] top-[50px] text-left overflow-hidden">
      <KUDisplayLine text={text} brtRegion={brtRegion} />
    </div>
  );
};

export { KUDisplay };
