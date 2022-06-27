import React from "react";
import { memoedAH64DImage as AH64DImage } from "./AH64DImage";

type MPDMODE_SWProps = {
  mode: number;
};

const MPDMODE_SW = ({ mode }: MPDMODE_SWProps) => {
  console.log(mode);
  return (
    <>
      {mode === 1 && <AH64DImage url="MPD_MODE-1" w={39} h={31} />}
      {mode === 0 && <AH64DImage url="MPD_MODE-2" w={39} h={31} />}
    </>
  );
};

const memoedMPDMODE_SW = React.memo(MPDMODE_SW);

export { memoedMPDMODE_SW as MPDMODE_SW };
