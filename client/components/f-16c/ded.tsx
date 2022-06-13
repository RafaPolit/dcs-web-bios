import React from "react";
import { useRecoilValue } from "recoil";
import { f16cDEDState, F16cDEDKeys } from "../../atoms/f-16c-ded";

type DEDLineProps = {
  text: string;
  highlights: string;
};

const DEDLine = ({ text, highlights }: DEDLineProps) => {};

const DED = () => {
  const linesData = useRecoilValue(f16cDEDState);
  const properties = Object.keys(linesData) as F16cDEDKeys[];
  console.log(linesData);
  return (
    <div className="font-mono font-bold bg-black p-2 border-4 border-zinc-700 text-lime-400">
      {properties.map((property) => {
        const paddedText = linesData[property].text.padEnd(24, " ");
        return (
          <div key={property} className="whitespace-pre">
            {paddedText}
          </div>
        );
      })}
    </div>
  );
};

export { DED };
