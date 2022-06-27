import React from "react";
import Image from "next/image";

type MPDBRTKnobProps = {
  brt: number;
};

const MPDBRTKnob = ({ brt }: MPDBRTKnobProps) => {
  const value = (brt / 0xffff - 0.5) * 0.84;
  return (
    <div
      className="absolute w-[32px] h-[30px] left-1/2 top-1/2"
      style={{ transform: `rotate(${value}turn)` }}
    >
      <Image
        src="/ah-64d/ah64d-MPDBRTKnob.png"
        alt="Keyboard Knob"
        layout="fixed"
        width={32}
        height={30}
      />
    </div>
  );
};

const memoedMPDBRTKnob = React.memo(MPDBRTKnob);

export { memoedMPDBRTKnob as MPDBRTKnob };
