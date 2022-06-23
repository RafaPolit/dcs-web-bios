import React from "react";
import { useRecoilValue } from "recoil";
import { dcsDataState } from "../../atoms/dcsData";
import { OptionDisplay } from "./OptionDisplay";

const OptionDisplays = () => {
  const dcsData = useRecoilValue(dcsDataState);

  const display1 = dcsData["UFC_OPTION_DISPLAY_1"] || "";
  const display2 = dcsData["UFC_OPTION_DISPLAY_2"] || "";
  const display3 = dcsData["UFC_OPTION_DISPLAY_3"] || "";
  const display4 = dcsData["UFC_OPTION_DISPLAY_4"] || "";
  const display5 = dcsData["UFC_OPTION_DISPLAY_5"] || "";

  const cueing1 = dcsData["UFC_OPTION_CUEING_1"] || "";
  const cueing2 = dcsData["UFC_OPTION_CUEING_2"] || "";
  const cueing3 = dcsData["UFC_OPTION_CUEING_3"] || "";
  const cueing4 = dcsData["UFC_OPTION_CUEING_4"] || "";
  const cueing5 = dcsData["UFC_OPTION_CUEING_5"] || "";

  return (
    <>
      <OptionDisplay
        className="left-[326px] top-[51px]"
        text={display1}
        cue={cueing1}
      />
      <OptionDisplay
        className="left-[326px] top-[113px]"
        text={display2}
        cue={cueing2}
      />
      <OptionDisplay
        className="left-[326px] top-[173px]"
        text={display3}
        cue={cueing3}
      />
      <OptionDisplay
        className="left-[326px] top-[235px]"
        text={display4}
        cue={cueing4}
      />
      <OptionDisplay
        className="left-[326px] top-[296px]"
        text={display5}
        cue={cueing5}
      />
    </>
  );
};

export { OptionDisplays };
