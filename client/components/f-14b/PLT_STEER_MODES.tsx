import React from "react";
import { F14Image } from "./F14Image";

type PLT_STEER_MODESProps = {
  mode: string;
};

const PLT_STEER_MODES = ({ mode }: PLT_STEER_MODESProps) => {
  return (
    <>
      {mode === "1" && (
        <div className="absolute left-[66px] top-[358px]">
          <F14Image url="steer-mode-1" w={43} h={46} />
        </div>
      )}
      {mode === "2" && (
        <div className="absolute left-[103px] top-[358px]">
          <F14Image url="steer-mode-2" w={46} h={46} />
        </div>
      )}
      {mode === "3" && (
        <div className="absolute left-[143px] top-[358px]">
          <F14Image url="steer-mode-3" w={48} h={46} />
        </div>
      )}
      {mode === "4" && (
        <div className="absolute left-[184px] top-[358px]">
          <F14Image url="steer-mode-4" w={46} h={46} />
        </div>
      )}
      {mode === "5" && (
        <div className="absolute left-[227px] top-[358px]">
          <F14Image url="steer-mode-5" w={45} h={46} />
        </div>
      )}
    </>
  );
};

const memoedPLT_STEER_MODES = React.memo(PLT_STEER_MODES);

export { memoedPLT_STEER_MODES as PLT_STEER_MODES };
