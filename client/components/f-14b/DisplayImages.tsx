import React from "react";
import { useRecoilValue } from "recoil";
import { dcsDataState } from "../../atoms/dcsData";
import { IoSwitches } from "./IoSwitches";
import { PLT_HUD_MODES } from "./PLT_HUD_MODES";
import { PLT_STEER_MODES } from "./PLT_STEER_MODES";

const DisplayImages = () => {
  const dcsData = useRecoilValue(dcsDataState);
  const hudMode = dcsData["PLT_HUD_MODE"] || "1";
  const steerMode = dcsData["PLT_STEER_MODE"] || "1";

  const ioSwitchesModes = [
    parseInt(dcsData["PLT_HUD_DECLUTTER"] || "0"),
    parseInt(dcsData["PLT_HUD_MODE_AWL"] || "0"),
    parseInt(dcsData["PLT_VDI_MODE_DISP"] || "0"),
    parseInt(dcsData["PLT_VDI_MODE_LAND"] || "0"),
    parseInt(dcsData["PLT_HSD_DIS_MODE"] || "1"),
    parseInt(dcsData["PLT_HSD_ECM_OVER"] || "0"),
    parseInt(dcsData["PLT_VDI_PW_SW"] || "0"),
    parseInt(dcsData["PLT_HUD_PW_SW"] || "0"),
    parseInt(dcsData["PLT_HSD_PW_SW"] || "0"),
  ];

  return (
    <div className="relative top-0 left-0 w-[311px] h-[420px] min-w-[311px]">
      <PLT_HUD_MODES mode={hudMode} />
      <IoSwitches modes={ioSwitchesModes} />
      <PLT_STEER_MODES mode={steerMode} />
    </div>
  );
};

export { DisplayImages };
