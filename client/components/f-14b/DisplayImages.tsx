import React from "react";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { dcsDataState } from "../../atoms/dcsData";
import { udp } from "../../scripts/udp";

const relevantData = ["PLT_HUD_MODE"];

const DisplayImages = () => {
  const dcsData = useRecoilValue(dcsDataState);
  const hudMode = dcsData["PLT_HUD_MODE"] || "1";

  return (
    <div className="relative top-0 left-0 w-[311px] h-[420px] min-w-[311px]">
      {hudMode === "1" && (
        <div className="absolute top-[52px] left-[71px]">
          <Image
            src="/f-14b/f14b-hud-mode-1.jpg"
            alt="f14b-hud-mode-1"
            layout="fixed"
            width={47}
            height={46}
          />
        </div>
      )}
      {hudMode === "2" && (
        <div className="absolute top-[96px] left-[71px]">
          <Image
            src="/f-14b/f14b-hud-mode-2.jpg"
            alt="f14b-hud-mode-2"
            layout="fixed"
            width={47}
            height={44}
          />
        </div>
      )}
      {hudMode === "3" && (
        <div className="absolute top-[137px] left-[71px]">
          <Image
            src="/f-14b/f14b-hud-mode-3.jpg"
            alt="f14b-hud-mode-3"
            layout="fixed"
            width={47}
            height={42}
          />
        </div>
      )}
      {hudMode === "4" && (
        <div className="absolute top-[179px] left-[71px]">
          <Image
            src="/f-14b/f14b-hud-mode-4.jpg"
            alt="f14b-hud-mode-4"
            layout="fixed"
            width={47}
            height={41}
          />
        </div>
      )}
      {hudMode === "5" && (
        <div className="absolute top-[219px] left-[71px]">
          <Image
            src="/f-14b/f14b-hud-mode-5.jpg"
            alt="f14b-hud-mode-5"
            layout="fixed"
            width={47}
            height={41}
          />
        </div>
      )}
    </div>
  );
};

export { DisplayImages };
