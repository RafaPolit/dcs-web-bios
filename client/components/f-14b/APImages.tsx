import React from "react";
import { useRecoilValue } from "recoil";
import { dcsDataState } from "../../atoms/dcsData";
import { PLT_AFCS_SW } from "./PLT_AFCS_SW";
import { PLT_AUTOPLT_SW } from "./PLT_AUTOPLT_SW";

const APImages = () => {
  const dcsData = useRecoilValue(dcsDataState);

  const afcsModes = [
    parseInt(dcsData["PLT_AFCS_PITCH"] || "0"),
    parseInt(dcsData["PLT_AFCS_ROLL"] || "0"),
    parseInt(dcsData["PLT_AFCS_YAW"] || "0"),
  ];

  const autopilotModes = [
    parseInt(dcsData["PLT_AUTOPLT_VECTOR_CARRIER"] || "0"),
    parseInt(dcsData["PLT_AUTOPLT_ALT"] || "0"),
    parseInt(dcsData["PLT_AUTOPLT_HDG"] || "0"),
    parseInt(dcsData["PLT_AUTOPLT_ENGAGE"] || "0"),
  ];

  return (
    <div className="relative top-0 left-0 w-[265px] h-[190px] min-w-[265px]">
      <PLT_AFCS_SW modes={afcsModes} />
      <PLT_AUTOPLT_SW modes={autopilotModes} />
    </div>
  );
};

export { APImages };
