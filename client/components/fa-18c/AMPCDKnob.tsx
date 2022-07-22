import React from "react";
import Image from "next/image";

type AMPCDKnobProps = {
  brt: number;
};

const AMPCDKnob = ({ brt }: AMPCDKnobProps) => {
  const value = (brt / 0xffff - 1) * 0.75;
  return (
    <div
      className="absolute w-[27px] h-[26px] left-1/2 top-1/2"
      style={{ transform: `rotate(${value}turn)` }}
    >
      <Image
        src="/fa-18c/fa18c-AMPCD-knob.png"
        alt="AMPCD Knob"
        layout="fixed"
        width={27}
        height={28}
      />
    </div>
  );
};

const memoedAMPCDKnob = React.memo(AMPCDKnob);

export { memoedAMPCDKnob as AMPCDKnob };
