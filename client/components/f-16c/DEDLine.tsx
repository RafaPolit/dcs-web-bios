import React from "react";
import { useWindowSize } from "../../scripts/useWindowSize";

type DEDLineProps = {
  text: string;
  highlights: string;
};

const inverseCharacter = "bg-lime-400 text-black";
const specialCharactersFalconded = { a: "@", o: "^" };

const DEDLine = ({ text = "", highlights = "" }: DEDLineProps) => {
  const size = useWindowSize();
  const paddedText = text.padEnd(24, " ").substring(0, 24);

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
          highlights.substring(i, i + 1) === "1" ? inverseCharacter : ""
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

export { DEDLine };
