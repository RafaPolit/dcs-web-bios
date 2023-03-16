import React from "react";
import Image from "next/image";
import {
  BsBrightnessAltLowFill,
  BsBrightnessAltHighFill,
} from "react-icons/bs";

import { Button } from "../UI/Button";
import { udp } from "../../scripts/udp";

const NightVision = () => {
  return (
    <div className="flex flex-col space-y-4 w-[140px] h-[112px] m-auto">
      <div className="w-[140px]">
        <Image
          src="/f-16c/PngItem_1940872.png"
          alt="Night Vision Goggles"
          width={860}
          height={439}
          layout="responsive"
          onClick={() => udp("Set", `LoSetCommand 438`)}
        />
      </div>
      <div className="flex justify-center space-x-4">
        <Button
          icon={<BsBrightnessAltLowFill />}
          iconOnly={true}
          command="841"
        />
        <Button
          icon={<BsBrightnessAltHighFill />}
          iconOnly={true}
          command="840"
        />
      </div>
    </div>
  );
};

export { NightVision };
