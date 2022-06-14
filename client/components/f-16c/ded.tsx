import React from "react";
import { useRecoilValue } from "recoil";
import { f16cDEDState, F16cDEDKeys } from "../../atoms/f-16c-ded";

import { TiArrowUnsorted } from "react-icons/ti";

type DEDLineProps = {
  text: string;
  highlights?: string;
};

const inverseCharacter = "bg-lime-400 text-black";
const specialCharacters = { o: "°" };

const DEDLine = ({ text, highlights }: DEDLineProps) => {
  const paddedText = text.padEnd(24, " ");
  return (
    <div className="whitespace-pre">
      {paddedText.split("").map((c, index) => {
        let printChar = (specialCharacters[c] || c) as any;
        if (c === "a") {
          printChar = (
            <TiArrowUnsorted style={{ fontSize: "12px !important" }} />
          );
        }
        return (
          <span
            key={index}
            style={{
              fontSize: c === "a" ? "12px" : "17px",
              width: "10px",
              height: "14px",
              display: "inline-block",
              textAlign: "center",
              lineHeight: "12px",
              verticalAlign: "bottom",
            }}
            className={
              highlights?.substring(index, index + 1) === "1"
                ? inverseCharacter
                : ""
            }
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
    <div className="font-inconsolata leading-none bg-black p-2 border-4 border-zinc-700 text-lime-400">
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
