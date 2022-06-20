import React from "react";
import Image from "next/image";
import { udp } from "../../scripts/udp";
import { APImages } from "./APImages";
import { PLT_AUTOPLT_ENGAGE } from "./PLT_AUTOPLT_ENGAGE";

const switchStyle = "absolute w-[40px] h-[55px]";
const threePosStyle =
  "absolute w-[40px] h-[25px] rounded-lg bg-orange-800 opacity-25";

const AP = () => {
  return (
    <div className="relative w-[265px] h-[190px] min-w-[265px] mb-1">
      <Image
        src="/f-14b/f14b-autopilot-o.png"
        alt="F-14B Tomcat - Autopilot"
        layout="fill"
        className="rounded-lg"
        priority={true}
      />
      <APImages />
      <button
        className={`${switchStyle} left-[33px] top-[40px] `}
        onClick={() => udp("ToggleOnce", "PLT_AFCS_PITCH")}
      />
      <button
        className={`${switchStyle} left-[108px] top-[40px] `}
        onClick={() => udp("ToggleOnce", "PLT_AFCS_ROLL")}
      />
      <button
        className={`${switchStyle} left-[182px] top-[40px] `}
        onClick={() => udp("ToggleOnce", "PLT_AFCS_YAW")}
      />
      {/* --------------------- */}
      <button
        className={`${threePosStyle} top-[110px] left-[20px]`}
        onClick={() => udp("Send", `PLT_AUTOPLT_VECTOR_CARRIER INC`)}
      />
      <button
        className={`${threePosStyle} top-[140px] left-[20px]`}
        onClick={() => udp("Send", `PLT_AUTOPLT_VECTOR_CARRIER DEC`)}
      />
      <button
        className={`${switchStyle} top-[110px] left-[80px]`}
        onClick={() => udp("ToggleOnce", "PLT_AUTOPLT_ALT")}
      />
      <button
        className={`${threePosStyle} top-[110px] left-[140px]`}
        onClick={() => udp("Send", `PLT_AUTOPLT_HDG INC`)}
      />
      <button
        className={`${threePosStyle} top-[140px] left-[140px]`}
        onClick={() => udp("Send", `PLT_AUTOPLT_HDG DEC`)}
      />
      <PLT_AUTOPLT_ENGAGE
        className={`${switchStyle} top-[110px] left-[200px]`}
      />
      {/* --------------------- */}
    </div>
  );
};

export { AP };
