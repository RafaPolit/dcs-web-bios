import React from "react";
import { memoedF14Image as F14Image } from "./F14Image";

type PLT_AFCS_SWProps = {
  modes: number[];
};

const PLT_AFCS_SW = ({ modes }: PLT_AFCS_SWProps) => {
  return (
    <>
      <div className="absolute left-[38px] top-[45px]">
        {Boolean(modes[0]) && <F14Image url="PLT_AFCS_PITCH" w={25} h={43} />}
      </div>
      <div className="absolute left-[114px] top-[45px]">
        {Boolean(modes[1]) && <F14Image url="PLT_AFCS_ROLL" w={23} h={43} />}
      </div>
      <div className="absolute left-[188px] top-[45px]">
        {Boolean(modes[2]) && <F14Image url="PLT_AFCS_YAW" w={20} h={43} />}
      </div>
    </>
  );
};

const memoedPLT_AFCS_SW = React.memo(PLT_AFCS_SW);

export { memoedPLT_AFCS_SW as PLT_AFCS_SW };
