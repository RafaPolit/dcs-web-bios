import React from "react";
import { useWindowSize } from "../../scripts/useWindowSize";

type KUDisplayLineProps = {
  text: string;
};

const KUDisplayLine = ({ text = "" }: KUDisplayLineProps) => {
  const paddedText = text.padEnd(22, " ").substring(0, 24);
  const cursorPosition = paddedText.indexOf("#");
  const sanitizedText = paddedText.replace("#", " ");
  return (
    <>
      <div
        className="line-container relative font-ledboard whitespace-pre text-[#12bc1b]"
        style={{ lineHeight: "20px", fontSize: "17px" }}
      >
        {sanitizedText.split("").map((c, i) => {
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
      {cursorPosition > -1 && (
        <span
          className="absolute block w-[11px] h-[14px] top-0"
          style={{
            backgroundImage: "url(/ah-64d/ah64d-cursor.png",
            left: `${cursorPosition * 16}px`,
          }}
        />
      )}
    </>
  );
};

export { KUDisplayLine };
