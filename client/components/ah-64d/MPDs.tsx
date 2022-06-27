import { useState } from "react";
import { MPD } from "./MPD";
import { BiArrowToRight, BiArrowToLeft } from "react-icons/bi";

type MPDsProps = {
  position: "PLT" | "CPG";
};

const mpdSelect =
  "lg:hidden m-12 px-3 py-2 flex items-center rounded bg-gray-700";

const MPDs = ({ position }: MPDsProps) => {
  const [current, setCurrent] = useState("LEFT");

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
