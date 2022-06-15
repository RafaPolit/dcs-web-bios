import React from "react";
import { useRecoilValue } from "recoil";
import { f16cDEDState, F16cDEDKeys } from "../../atoms/f-16c-ded";
import { useWindowSize } from "../../scripts/useWindowSize";

type DEDLineProps = {
  text: string;
  highlights?: string;
};

const inverseCharacter = "bg-lime-400 text-black";
const specialCharactersFalconded = { a: "@", o: "^" };

const DEDLine = ({ text, highlights }: DEDLineProps) => {
  const size = useWindowSize();
  const paddedText = text.split("|")[0].padEnd(24, " ");
  return (
    <div
      className="line-container whitespace-pre"
      style={{
        position: "relative",
        left: `${(size.width % 2) / 2 - 0.5}px`,
        height: "13px",
        lineHeight: "12px",
      }}
    >
      {paddedText.split("").map((c, i) => {
        // @ts-ignore
        const printChar = (specialCharactersFalconded[c] || c) as any;
        const className = `${
          highlights?.substring(i, i + 1) === "1" ? inverseCharacter : ""
        }`;
        return (
          <span
            key={i}
            style={{
              fontSize: "16px",
              width: "8px",
              height: "11px",
              display: "inline-block",
              lineHeight: "12px",
              verticalAlign: "bottom",
            }}
            className={className}
          >
            {printChar}
          </span>
        );
      })}
    </div>
  );
};

const DED = () => {
  const linesData = useRecoilValue(f16cDEDState);
  const properties = Object.keys(linesData) as F16cDEDKeys[];
  return (
    <div className="font-falconded leading-none bg-black p-2 border-4 border-zinc-700 text-lime-400">
      {properties.map((property) => (
        <DEDLine
          key={property}
          text={linesData[property].text}
          highlights={linesData[property].highlights}
        />
      ))}
    </div>
  );
};

export { DED };
