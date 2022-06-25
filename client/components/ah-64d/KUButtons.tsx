import { generateButtons } from "./kuButtonsUtils";
import { udp } from "../../scripts/udp";
import React from "react";

type KUButtonsProps = {
  position: "PLT" | "CPG";
};

const buttons = {
  PLT: generateButtons("PLT"),
  CPG: generateButtons("CPG"),
};

const knob = "absolute w-[30px] h-[50px] rounded-lg bg-orange-800 opacity-25";

const KUButtons = ({ position }: KUButtonsProps) => {
  return (
    <>
      <div className="absolute left-[38px] top-[97px]">
        {buttons[position].letters.map((b) => b)}
      </div>
      <div className="absolute left-[343px] top-[97px]">
        {buttons[position].numbers.map((b) => b)}
      </div>
      <div className="absolute left-[140px] top-[302px]">
        {buttons[position].symbols.map((b) => b)}
      </div>
      {/* -------------------------------- */}
      <button
        className={`${knob} left-[48px] top-[352px]`}
        onClick={() => udp("Send", `${position}_KU_BRT -3200`)}
      />
      <button
        className={`${knob} left-[84px] top-[352px]`}
        onClick={() => udp("Send", `${position}_KU_BRT +3200`)}
      />
    </>
  );
};

const memoedKUButtons = React.memo(KUButtons);

export { memoedKUButtons as KUButtons };
