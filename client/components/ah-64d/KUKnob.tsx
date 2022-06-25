import React from "react";
import Image from "next/image";

type KUKnobProps = {
  brt: number;
};

const KUKnob = ({ brt }: KUKnobProps) => {
  const value = (brt / 0xffff - 0.5) * 0.84;
  return (
    <div
      className="absolute w-[44px] h-[47px] left-1/2 top-1/2"
      style={{ transform: `rotate(${value}turn)` }}
    >
      <Image
        src="/ah-64d/ah64d-KUKnob.png"
        alt="Keyboard Knob"
        layout="fixed"
        width={44}
        height={44}
      />
    </div>
  );
};

const memoedKUKnob = React.memo(KUKnob);

export { memoedKUKnob as KUKnob };
