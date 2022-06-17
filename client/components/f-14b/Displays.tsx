import React from "react";
import Image from "next/image";
import { udp } from "../../scripts/udp";
import { DisplayImages } from "./DisplayImages";

const button = "absolute w-[34px] h-[34px] rounded";

const Displays = () => {
  return (
    <div className="flex place-content-center space-x-2 items-start">
      <div className="relative w-[311px] h-[420px] min-w-[311px]">
        <Image
          src="/f-14b/f14b-displays-o.png"
          alt="F-14B Tomcat - Displays"
          layout="fill"
          className="rounded-lg"
          priority={true}
        />
        <DisplayImages />
        <button
          className={`${button} top-[62px] left-[75px]`}
          onClick={() => udp("Toggle", "PLT_HUD_MODE_TAKEOFF")}
        />
        <button
          className={`${button} top-[105px] left-[75px]`}
          onClick={() => udp("Toggle", "PLT_HUD_MODE_CRUISE")}
        />
        <button
          className={`${button} top-[146px] left-[75px]`}
          onClick={() => udp("Toggle", "PLT_HUD_MODE_A2A")}
        />
        <button
          className={`${button} top-[186px] left-[75px]`}
          onClick={() => udp("Toggle", "PLT_HUD_MODE_A2G")}
        />
        <button
          className={`${button} top-[227px] left-[75px]`}
          onClick={() => udp("Toggle", "PLT_HUD_MODE_LAND")}
        />
      </div>
    </div>
  );
};

export { Displays };
