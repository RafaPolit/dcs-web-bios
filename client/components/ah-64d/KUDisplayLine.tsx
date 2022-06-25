import React from "react";
import { useWindowSize } from "../../scripts/useWindowSize";

type KUDisplayLineProps = {
  text: string;
  brtRegion?: number;
};

const KUDisplayLine = ({ text = "", brtRegion = 6 }: KUDisplayLineProps) => {
  const paddedText = text.padEnd(22, " ").substring(0, 24);
  // const cursorPosition = paddedText.indexOf("#");
  // const sanitizedText = paddedText.replace("#", " ");
  let brtClass = brtRegion > 8 ? "font-bold" : "";

  if (brtRegion < 6) {
    const opacityRegion = Math.ceil((brtRegion / 5) * 3);
    switch (opacityRegion) {
      case 3:
        brtClass = "opacity-75";
        break;
      case 2:
        brtClass = "opacity-50";
        break;
      case 1:
      case 0:
        brtClass = "opacity-25";
        break;
    }
  }
  return (
    <>
      <div
        className={`line-container relative font-apache whitespace-pre text-[#04c105] ${brtClass}`}
        style={{ lineHeight: "21px", fontSize: "17px" }}
      >
        {paddedText.split("").map((c, i) => {
          return (
            <span
              key={i}
              style={{
                width: "14px",
                height: "20px",
                display: "block",
                position: "absolute",
                top: "0px",
                textAlign: "center",
                left: `${i * 16}px`,
                verticalAlign: "bottom",
              }}
            >
              {c}
            </span>
          );
        })}
      </div>
      {/* {cursorPosition > -1 && (
        <span
          className={`absolute block w-[11px] h-[14px] top-[1px] ${brtClass}`}
          style={{
            backgroundImage: "url(/ah-64d/ah64d-cursor.png",
            left: `${cursorPosition * 16}px`,
          }}
        />
      )} */}
    </>
  );
};

export { KUDisplayLine };
