import React from "react";
import { useRecoilValue } from "recoil";
import { dcsDataState } from "../../atoms/dcsData";
import { udp } from "../../scripts/udp";

type PLT_HSD_DIS_MODEProps = {
  className: string;
};

const PLT_HSD_DIS_MODE = ({ className }: PLT_HSD_DIS_MODEProps) => {
  const dcsData = useRecoilValue(dcsDataState);
  const mode = parseInt(dcsData["PLT_HSD_DIS_MODE"] || "1");

  return (
    <button
      className={className}
      onClick={() => udp("Send", `PLT_HSD_DIS_MODE ${mode === 2 ? 1 : 2}`)}
    />
  );
};

export { PLT_HSD_DIS_MODE };
