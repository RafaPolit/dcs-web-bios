import { generateButtons } from "./mpdButtonsUtils";
import { udp } from "../../scripts/udp";
import React from "react";

type MPDButtonsProps = {
  position: "PLT" | "CPG";
  side: "L" | "R";
};

const buttons = {
  PLT: generateButtons("PLT"),
  CPG: generateButtons("CPG"),
};

const hKnob = "absolute w-[30px] h-[40px] rounded-lg bg-orange-800 opacity-25";
const vKnob = "absolute w-[40px] h-[25px] rounded-lg bg-orange-800 opacity-25";

const MPDButtons = ({ position, side }: MPDButtonsProps) => {
  return (
    <>
      <div className="absolute left-[28px] top-[105px]">
        {buttons[position][side].L.map((b) => b)}
      </div>
      <div className="absolute left-[405px] top-[105px]">
        {buttons[position][side].R.map((b) => b)}
      </div>
      <div className="absolute left-[117px] top-[16px]">
        {buttons[position][side].T.map((b) => b)}
      </div>
      <div className="absolute left-[117px] top-[384px]">
        {buttons[position][side].B.map((b) => b)}
      </div>
      {/* -------------------------------- */}
      <div className="absolute left-[404px] top-[71px]">
        {buttons[position][side].TR.map((b) => b)}
      </div>
      <div className="absolute left-[20px] top-[325px]">
        {buttons[position][side].BL.map((b) => b)}
      </div>
      <div className="absolute left-[354px] top-[325px]">
        {buttons[position][side].BR.map((b) => b)}
      </div>
      {/* -------------------------------- */}
      <button
        className={`${hKnob} left-[6px] top-[56px]`}
        onClick={() => udp("Send", `${position}_MPD_${side}_BRT -3200`)}
      />
      <button
        className={`${hKnob} left-[40px] top-[56px]`}
        onClick={() => udp("Send", `${position}_MPD_${side}_BRT +3200`)}
      />
      {/* -------------------------------- */}
      <button
        className={`${hKnob} left-[45px] top-[5px]`}
        onClick={() => udp("Send", `${position}_MPD_${side}_VIDEO -3200`)}
      />
      <button
        className={`${hKnob} left-[80px] top-[5px]`}
        onClick={() => udp("Send", `${position}_MPD_${side}_VIDEO +3200`)}
      />
      {/* -------------------------------- */}
      <button
        className={`${vKnob} left-[397px] top-[3px]`}
        onClick={() => udp("Send", `${position}_MPD_${side}_MODE INC`)}
      />
      <button
        className={`${vKnob} left-[397px] top-[30px]`}
        onClick={() => udp("Send", `${position}_MPD_${side}_MODE DEC`)}
      />
    </>
  );
};

const memoedMPDButtons = React.memo(MPDButtons);

export { memoedMPDButtons as MPDButtons };
