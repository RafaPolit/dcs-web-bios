import React from "react";
import { useRecoilValue } from "recoil";
import { dcsDataState } from "../../atoms/dcsData";
import { UFCChar } from "./UFCChar";

const CommDisplays = () => {
  const dcsData = useRecoilValue(dcsDataState);
  const comm1 = dcsData["UFC_COMM1_DISPLAY"];
  const comm2 = dcsData["UFC_COMM2_DISPLAY"];

  return (
    <div className="absolute left-[25px] top-[294px] w-[489px] h-[22px]">
      <UFCChar className="left-[0px] top-[1px]" char={comm1} />
      <UFCChar className="left-[468px] top-[0px]" char={comm2} />
    </div>
  );
};

export { CommDisplays };
