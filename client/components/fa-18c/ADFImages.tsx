import React from "react";
import { useRecoilValue } from "recoil";
import { dcsDataState } from "../../atoms/dcsData";
import { ADF_SW } from "./ADF_SW";

const ADFmages = () => {
  const dcsData = useRecoilValue(dcsDataState);

  const ADFMode = parseInt(dcsData["UFC_ADF"] || "1");

  return (
    <div className="relative left-[29px] top-[125px] w-[22px] h-[31px] min-w-[22px]">
      <ADF_SW mode={ADFMode} />
    </div>
  );
};

export { ADFmages };
