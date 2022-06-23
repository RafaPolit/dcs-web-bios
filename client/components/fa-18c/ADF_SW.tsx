import React from "react";
import { memoedF18Image as F18Image } from "./F18Image";

type ADF_SWProps = {
  mode: number;
};

const ADF_SW = ({ mode }: ADF_SWProps) => {
  return (
    <>
      {mode === 0 && <F18Image url="UFC-ADF-0" w={22} h={31} />}
      {mode === 2 && <F18Image url="UFC-ADF-2" w={22} h={31} />}
    </>
  );
};

const memoedADF_SW = React.memo(ADF_SW);

export { memoedADF_SW as ADF_SW };
