import React from "react";
import { memoedF18Image as F18Image } from "./F18Image";

type BRT_SELECTProps = {
  mode: number;
};

const BRT_SELECT = ({ mode }: BRT_SELECTProps) => {
  return (
    <>
      {mode === 1 && <F18Image url="DDI_BRT_SELECT-1" w={33} h={32} />}
      {mode === 2 && <F18Image url="DDI_BRT_SELECT-2" w={33} h={32} />}
    </>
  );
};

const memoedBRT_SELECT = React.memo(BRT_SELECT);

export { memoedBRT_SELECT as BRT_SELECT };
