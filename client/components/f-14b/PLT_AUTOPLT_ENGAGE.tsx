import React from "react";
import { useRecoilValue } from "recoil";
import { dcsDataState } from "../../atoms/dcsData";
import { udp } from "../../scripts/udp";

type PLT_AUTOPLT_ENGAGEProps = {
  className: string;
};

const PLT_AUTOPLT_ENGAGE = ({ className }: PLT_AUTOPLT_ENGAGEProps) => {
  const dcsData = useRecoilValue(dcsDataState);
  const mode = parseInt(dcsData["PLT_AUTOPLT_ENGAGE"] || "0");

  return (
    <button
      className={className}
      onClick={() =>
        udp("Send", `PLT_AUTOPLT_ENGAGE ${mode === 1 ? "DEC" : "INC"}`)
      }
    />
  );
};

export { PLT_AUTOPLT_ENGAGE };
