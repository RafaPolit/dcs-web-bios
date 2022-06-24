import React from "react";
import { useRecoilValue } from "recoil";
import { dcsDataState } from "../../atoms/dcsData";
import { BRT_SELECT } from "./BRT_SELECT";

type BRTImagesProps = {
  side: string;
};

const BRTImages = ({ side }: BRTImagesProps) => {
  const dcsData = useRecoilValue(dcsDataState);

  const BRTIMode = parseInt(dcsData[`${side}_DDI_BRT_SELECT`] || "0");

  return (
    <div className="relative left-[177px] top-[8px] w-[33px] h-[32px] min-w-[33px]">
      <BRT_SELECT mode={BRTIMode} />
    </div>
  );
};

export { BRTImages };
