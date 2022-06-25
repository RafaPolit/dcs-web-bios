import React from "react";
import Image from "next/image";
import { udp } from "../../scripts/udp";
import { KUDisplay } from "./KUDisplay";

const roundedButton = "absolute top-[19px] w-[56px] h-[56px] rounded-full";
const squareButton = "absolute w-[56px] h-[56px]";
const directionalButton = "absolute w-[40px] h-[43px]";

type KeyboardProps = {
  position: "PLT" | "CPG";
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
        <button
          className={`${roundedButton} left-[55px]`}
          onClick={() => udp("Toggle", "Keyboard_COM1_BTN")}
        />
      </div>
    </div>
  );
};

export { Keyboard };
