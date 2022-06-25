import React from "react";
import { useRecoilValue } from "recoil";
import { dcsDataState } from "../../atoms/dcsData";
import { KUDisplayLine } from "./KUDisplayLine";

type KUDisplayProps = {
  position: "PLT" | "CPG";
};

const KUDisplay = ({ position }: KUDisplayProps) => {
  const dcsData = useRecoilValue(dcsDataState);
  const text = dcsData[`${position}_KU_DISPLAY`] || "";

  return (
    <div className="absolute w-[346px] h-[14px] left-[84px] top-[50px] text-left overflow-hidden">
      <KUDisplayLine text={text} />
    </div>
  );
};

export { KUDisplay };
