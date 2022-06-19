import React from "react";
import { F14Image } from "./F14Image";

type PLT_HUD_MODESProps = {
  mode: string;
};

const PLT_HUD_MODES = ({ mode }: PLT_HUD_MODESProps) => {
  return (
    <>
      {mode === "1" && (
        <div className="absolute top-[52px] left-[71px]">
          <F14Image url="hud-mode-1" w={47} h={46} />
        </div>
      )}
      {mode === "2" && (
        <div className="absolute top-[96px] left-[71px]">
          <F14Image url="hud-mode-2" w={47} h={44} />
        </div>
      )}
      {mode === "3" && (
        <div className="absolute top-[137px] left-[71px]">
          <F14Image url="hud-mode-3" w={47} h={42} />
        </div>
      )}
      {mode === "4" && (
        <div className="absolute top-[179px] left-[71px]">
          <F14Image url="hud-mode-4" w={47} h={41} />
        </div>
      )}
      {mode === "5" && (
        <div className="absolute top-[219px] left-[71px]">
          <F14Image url="hud-mode-5" w={47} h={41} />
        </div>
      )}
    </>
  );
};

const memoedPLT_HUD_MODES = React.memo(PLT_HUD_MODES);

export { memoedPLT_HUD_MODES as PLT_HUD_MODES };
