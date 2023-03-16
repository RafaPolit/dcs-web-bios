import React from "react";
import { Displays } from "./Displays";
import { AP } from "./AP";
import { NightVision } from "./NightVision";

const DisplaysAndAP = () => {
  return (
    <div className="flex place-content-center space-x-12 items-end">
      <div className="flex flex-col space-y-12 place-content-end w-[265px] h-[420px] min-w-[265px] mb-1">
        <NightVision />
        <AP />
      </div>
      <Displays />
    </div>
  );
};

export { DisplaysAndAP };
