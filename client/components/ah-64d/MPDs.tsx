import { useState } from "react";
import { useRecoilState } from "recoil";
import { BiArrowToRight, BiArrowToLeft } from "react-icons/bi";
import { ah64dState } from "../../atoms/ah-64d";
import { MPD } from "./MPD";

type MPDsProps = {
  position: "PLT" | "CPG";
};

const mpdSelect =
  "lg:hidden m-12 px-3 py-2 flex items-center rounded bg-gray-700";

const MPDs = ({ position }: MPDsProps) => {
  const [ah64dStatus, setAh64dStatus] = useRecoilState(ah64dState);

  const current = ah64dStatus[`${position}_MPD`];

  const setCurrent = (side: "LEFT" | "RIGHT") => {
    setAh64dStatus((oldValues) => ({
      ...oldValues,
      [`${position}_MPD`]: side,
    }));
  };

  return (
    <div className="flex gap-x-1 lg:gap-x-12 place-content-center items-center">
      <button
        className={`${mpdSelect} ${current === "LEFT" ? "hidden" : ""}`}
        onClick={() => setCurrent("LEFT")}
      >
        <BiArrowToLeft className="inline text-3xl mr-2" />
        LEFT
      </button>
      <MPD position={position} side="L" current={current === "LEFT"} />
      <MPD position={position} side="R" current={current === "RIGHT"} />
      <button
        className={`${mpdSelect} ${current === "RIGHT" ? "hidden" : ""}`}
        onClick={() => setCurrent("RIGHT")}
      >
        RIGHT
        <BiArrowToRight className="inline text-3xl ml-2" />
      </button>
    </div>
  );
};

export { MPDs };
