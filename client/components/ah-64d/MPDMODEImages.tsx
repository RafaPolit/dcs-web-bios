import React from "react";
import { useRecoilValue } from "recoil";
import { dcsDataState } from "../../atoms/dcsData";
import { MPDMODE_SW } from "./MPDMODE_SW";

type MPDMODEImagesProps = {
  position: "PLT" | "CPG";
  side: "L" | "R";
};

const MPDMODEImages = ({ position, side }: MPDMODEImagesProps) => {
  const dcsData = useRecoilValue(dcsDataState);

  const MPDMODEMode = parseInt(dcsData[`${position}_MPD_${side}_MODE`] || "2");

  return (
    <div className="relative left-[358px] top-[9px] w-[39px] h-[31px] min-w-[39px]">
      <MPDMODE_SW mode={MPDMODEMode} />
    </div>
  );
};

export { MPDMODEImages };
