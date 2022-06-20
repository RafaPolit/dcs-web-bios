import React from "react";
import { memoedF14Image as F14Image } from "./F14Image";

type PLT_AUTOPLT_SWProps = {
  modes: number[];
};

const PLT_AUTOPLT_SW = ({ modes }: PLT_AUTOPLT_SWProps) => {
  return (
    <>
      <div className="absolute left-[28px] top-[121px]">
        {modes[0] === 1 && (
          <F14Image url="PLT_AUTOPLT_VECTOR-1" w={24} h={58} />
        )}
      </div>
      <div className="absolute left-[28px] top-[121px]">
        {modes[0] === 2 && (
          <F14Image url="PLT_AUTOPLT_VECTOR-2" w={24} h={58} />
        )}
      </div>
      <div className="absolute left-[90px] top-[121px]">
        {Boolean(modes[1]) && <F14Image url="PLT_AUTOPLT_ALT" w={18} h={58} />}
      </div>
      <div className="absolute left-[151px] top-[121px]">
        {modes[2] === 1 && <F14Image url="PLT_AUTOPLT_HDG-1" w={18} h={58} />}
      </div>
      <div className="absolute left-[151px] top-[121px]">
        {modes[2] === 2 && <F14Image url="PLT_AUTOPLT_HDG-2" w={18} h={58} />}
      </div>
      <div className="absolute left-[212px] top-[121px]">
        {Boolean(modes[3]) && (
          <F14Image url="PLT_AUTOPLT_ENGAGE" w={18} h={58} />
        )}
      </div>
    </>
  );
};

const memoedPLT_AUTOPLT_SW = React.memo(PLT_AUTOPLT_SW);

export { memoedPLT_AUTOPLT_SW as PLT_AUTOPLT_SW };
