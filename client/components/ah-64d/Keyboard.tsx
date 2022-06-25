import React from "react";
import Image from "next/image";
import { KUDisplay } from "./KUDisplay";
import { generateButtons } from "./kuButtons";

type KeyboardProps = {
  position: "PLT" | "CPG";
};

const buttons = {
  PLT: generateButtons("PLT"),
  CPG: generateButtons("CPG"),
};

const Keyboard = ({ position }: KeyboardProps) => {
  return (
    <div className="flex place-content-center space-x-2 items-start">
      <div className="relative w-[517px] h-[420px] min-w-[517px]">
        <Image
          src="/ah-64d/ah64d-Keyboard.png"
          alt="AH-64D Apache - Keyboard Unit"
          layout="fill"
          className="rounded-lg"
          priority={true}
        />
        <KUDisplay position={position} />
        <div className="absolute left-[38px] top-[97px]">
          {buttons[position].letters.map((b) => b)}
        </div>
        <div className="absolute left-[343px] top-[97px]">
          {buttons[position].numbers.map((b) => b)}
        </div>
        <div className="absolute left-[140px] top-[302px]">
          {buttons[position].symbols.map((b) => b)}
        </div>
      </div>
    </div>
  );
};

export { Keyboard };
