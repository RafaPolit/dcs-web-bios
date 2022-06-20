import React from "react";
import Image from "next/image";
import { udp } from "../../scripts/udp";
import { DisplayImages } from "./DisplayImages";
import { PLT_HSD_DIS_MODE } from "./PLT_HSD_DIS_MODE";

const buttonStyle = "absolute w-[34px] h-[34px] rounded";
const switchStyle = "absolute w-[35px] h-[48px]";

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
          className={`${buttonStyle} top-[62px] left-[75px]`}
          onClick={() => udp("Toggle", "PLT_HUD_MODE_TAKEOFF")}
        />
        <button
          className={`${buttonStyle} top-[105px] left-[75px]`}
          onClick={() => udp("Toggle", "PLT_HUD_MODE_CRUISE")}
        />
        <button
          className={`${buttonStyle} top-[146px] left-[75px]`}
          onClick={() => udp("Toggle", "PLT_HUD_MODE_A2A")}
        />
        <button
          className={`${buttonStyle} top-[186px] left-[75px]`}
          onClick={() => udp("Toggle", "PLT_HUD_MODE_A2G")}
        />
        <button
          className={`${buttonStyle} top-[227px] left-[75px]`}
          onClick={() => udp("Toggle", "PLT_HUD_MODE_LAND")}
        />
        {/* --------------------- */}
        <button
          className={`${buttonStyle} top-[369px] left-[69px]`}
          onClick={() => udp("Toggle", "PLT_NAV_STEER_TACAN")}
        />
        <button
          className={`${buttonStyle} top-[369px] left-[108px]`}
          onClick={() => udp("Toggle", "PLT_NAV_STEER_DEST")}
        />
        <button
          className={`${buttonStyle} top-[369px] left-[149px]`}
          onClick={() => udp("Toggle", "PLT_NAV_STEER_AWL")}
        />
        <button
          className={`${buttonStyle} top-[369px] left-[190px]`}
          onClick={() => udp("Toggle", "PLT_NAV_STEER_VECTOR")}
        />
        <button
          className={`${buttonStyle} top-[369px] left-[232px]`}
          onClick={() => udp("Toggle", "PLT_NAV_STEER_MAN")}
        />
        {/* --------------------- */}
        <button
          className={`${switchStyle} top-[55px] left-[155px]`}
          onClick={() => udp("ToggleOnce", "PLT_HUD_DECLUTTER")}
        />
        <button
          className={`${switchStyle} top-[55px] left-[235px]`}
          onClick={() => udp("ToggleOnce", "PLT_HUD_MODE_AWL")}
        />
        <button
          className={`${switchStyle} top-[125px] left-[155px]`}
          onClick={() => udp("ToggleOnce", "PLT_VDI_MODE_DISP")}
        />
        <button
          className={`${switchStyle} top-[125px] left-[235px]`}
          onClick={() => udp("ToggleOnce", "PLT_VDI_MODE_LAND")}
        />
        <PLT_HSD_DIS_MODE
          className={`${switchStyle} top-[192px] left-[155px]`}
        />
        <button
          className={`${switchStyle} top-[192px] left-[235px]`}
          onClick={() => udp("ToggleOnce", "PLT_HSD_ECM_OVER")}
        />
        {/* --------------------- */}
        <button
          className={`${switchStyle} top-[279px] left-[75px]`}
          onClick={() => udp("ToggleOnce", "PLT_VDI_PW_SW")}
        />
        <button
          className={`${switchStyle} top-[279px] left-[150px]`}
          onClick={() => udp("ToggleOnce", "PLT_HUD_PW_SW")}
        />
        <button
          className={`${switchStyle} top-[279px] left-[230px]`}
          onClick={() => udp("ToggleOnce", "PLT_HSD_PW_SW")}
        />
      </div>
    </div>
  );
};

export { Displays };
