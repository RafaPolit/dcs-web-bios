import React from "react";
import Image from "next/image";

type MPDVIDEOKnobProps = {
  brt: number;
};

const MPDVIDEOKnob = ({ brt }: MPDVIDEOKnobProps) => {
  const value = (brt / 0xffff - 0.5) * 0.84;
  return (
    <div
      className="absolute w-[33px] h-[32px] left-1/2 top-1/2"
      style={{ transform: `rotate(${value}turn)` }}
    >
      <Image
        src="/ah-64d/ah64d-MPDVIDKnob.png"
        alt="Keyboard Knob"
        layout="fixed"
        width={33}
        height={32}
      />
    </div>
  );
};

const memoedMPDVIDEOKnob = React.memo(MPDVIDEOKnob);

export { memoedMPDVIDEOKnob as MPDVIDEOKnob };
