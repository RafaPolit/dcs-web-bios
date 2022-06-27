import Image from "next/image";
import { MPDButtons } from "./MPDButtons";
import { MPDMODEImages } from "./MPDMODEImages";
import { MPD_BRT } from "./MPD_BRT";
import { MPD_VIDEO } from "./MPD_VIDEO";

type MPDProps = {
  position: "PLT" | "CPG";
  side: "L" | "R";
  current: boolean;
};

const verboseSide = { L: "LEFT", R: "RIGHT" };

const mpdButton = "absolute w-[34px] h-[34px] bg-red-800 opacity-75";
const topKnob =
  "absolute w-[40px] h-[30px] rounded-lg bg-orange-800 opacity-25";
const knob = "absolute w-[25px] h-[40px] rounded-lg bg-orange-800 opacity-25";

const MPD = ({ position, side, current }: MPDProps) => {
  return (
    <div
      className={`relative w-[444px] h-[420px] min-w-[444px] ${
        current ? "" : "hidden"
      } lg:block`}
    >
      <Image
        src="/ah-64d/ah64d-MPD.png"
        alt="F/A-18C Hornet - MPD"
        layout="fill"
        className="rounded-lg"
      />
      <span className="absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]">
        {verboseSide[side]}
      </span>
      <MPDMODEImages position={position} side={side} />
      <MPD_BRT position={position} side={side} />
      <MPD_VIDEO position={position} side={side} />
      {/* -------------------------------- */}
      <MPDButtons position={position} side={side} />
    </div>
  );
};

export { MPD };
