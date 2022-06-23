import React from "react";
import Image from "next/image";
import { udp } from "../../scripts/udp";
import { OptionDisplays } from "./OptionDisplays";
import { CommDisplays } from "./CommDisplays";
import { ScratchpadDisplays } from "./ScratchpadDisplays";

const roundedButton = "absolute top-[19px] w-[56px] h-[56px] rounded-full";
const squareButton = "absolute w-[56px] h-[56px]";
const directionalButton = "absolute w-[40px] h-[43px]";

const UFC = () => {
  return (
    <div className="flex place-content-center space-x-2 items-start">
      <div className="relative w-[539px] h-[420px] min-w-[539px]">
        <Image
          src="/fa-18c/fa18c-UFC.png"
          alt="F/A-18C Hornet - UFC"
          layout="fill"
          className="rounded-lg"
          priority={true}
        />
        <OptionDisplays />
        <CommDisplays />
        <ScratchpadDisplays />
        <button
          className={`${roundedButton} left-[55px]`}
          onClick={() => udp("Toggle", "UFC_COM1_BTN")}
        />
      </div>
    </div>
  );
};

export { UFC };
