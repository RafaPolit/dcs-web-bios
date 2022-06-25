import React from "react";
import Image from "next/image";
import { KUDisplay } from "./KUDisplay";
import { KU_BRT } from "./KU_BRT";
import { KUButtons } from "./KUButtons";

type KeyboardProps = {
  position: "PLT" | "CPG";
};

const Keyboard = ({ position }: KeyboardProps) => {
  return (
    <div className="flex place-content-center space-x-2 items-start">
      <div className="relative w-[517px] h-[420px] min-w-[517px]">
        <Image
          src="/ah-64d/ah64d-KeyboardUnit.png"
          alt="AH-64D Apache - Keyboard Unit"
          layout="fill"
          className="rounded-lg"
          priority={true}
        />
        <KUDisplay position={position} />
        <KU_BRT position={position} />
        <KUButtons position={position} />
      </div>
    </div>
  );
};

export { Keyboard };
