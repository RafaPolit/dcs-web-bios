import React from "react";
import Image from "next/image";

import { udp } from "../../scripts/udp";

const NightVision = () => {
  return (
    <div className="w-[224px] h-[112px] px-[14px] pt-[32px] pb-[7px]">
      <Image
        src="/f-16c/PngItem_1940872.png"
        alt="Night Vision Goggles"
        width={860}
        height={439}
        layout="responsive"
        onClick={() => udp("Set", `LoSetCommand 438`)}
      />
    </div>
  );
};

export { NightVision };
