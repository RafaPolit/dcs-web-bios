import React from "react";
import Image from "next/image";
import { udp } from "../../scripts/udp";

type MPDsProps = {
  position: "PLT" | "CPG";
};

const roundedButton = "absolute w-[33px] h-[33px] rounded-full";
const squareButton = "absolute w-[42px] h-[42px]";
const directionalButton = "absolute w-[40px] h-[30px]";
const knob = "absolute w-[30px] h-[40px] rounded-lg bg-orange-800 opacity-25";

const MPDs = ({ position }: MPDsProps) => {
  return (
    <div className="flex place-content-center space-x-2 items-start">
      <div className="relative w-[800px] h-[369px] min-w-[800px]">
        <Image
          src="/ah-64d/ah64d-MPDs.png"
          alt="AH-64D Apache - MPDs"
          layout="fill"
          className="rounded-lg"
          priority={true}
        />
        <button
          className={`${squareButton} left-[92px] top-[111px]`}
          onClick={() => udp("Toggle", "MPDs_1")}
        />
      </div>
    </div>
  );
};

export { MPDs };
