import React from "react";
import { memoedF14Image as F14Image } from "./F14Image";

type IoSwitchesProps = {
  modes: number[];
};

const IoSwitches = ({ modes }: IoSwitchesProps) => {
  return (
    <>
      <div className="absolute left-[160px] top-[54px]">
        {Boolean(modes[0]) && (
          <F14Image url="PLT_HUD_DECLUTTER" w={26} h={45} />
        )}
      </div>
      <div className="absolute left-[241px] top-[54px]">
        {Boolean(modes[1]) && <F14Image url="PLT_HUD_MODE_AWL" w={23} h={45} />}
      </div>
      <div className="absolute left-[160px] top-[125px]">
        {Boolean(modes[2]) && (
          <F14Image url="PLT_VDI_MODE_DISP" w={26} h={41} />
        )}
      </div>
      <div className="absolute left-[241px] top-[125px]">
        {Boolean(modes[3]) && (
          <F14Image url="PLT_VDI_MODE_LAND" w={23} h={41} />
        )}
      </div>
      <div className="absolute left-[160px] top-[192px]">
        {modes[4] === 2 && <F14Image url="PLT_HSD_DIS_MODE" w={26} h={48} />}
      </div>
      <div className="absolute left-[241px] top-[192px]">
        {Boolean(modes[5]) && <F14Image url="PLT_HSD_ECM_OVER" w={23} h={48} />}
      </div>
      {/* <div className="absolute left-[241px] top-[192px]">
        {Boolean(modes[6]) && <F14Image url="PLT_VDI_PW_SW" w={23} h={48} />}
      </div>
      <div className="absolute left-[241px] top-[192px]">
        {Boolean(modes[7]) && <F14Image url="PLT_HUD_PW_SW" w={23} h={48} />}
      </div>
      <div className="absolute left-[241px] top-[192px]">
        {Boolean(modes[8]) && <F14Image url="PLT_HSD_PW_SW" w={23} h={48} />}
      </div> */}
    </>
  );
};

const memoedIoSwitches = React.memo(IoSwitches);

export { memoedIoSwitches as IoSwitches };
