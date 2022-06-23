import React from "react";
import { charMap } from "./charMap";

const segment = "absolute block bg-green-500";
const segmentH = `${segment} w-[8px] h-[2px]`;
const segmentV = `${segment} w-[2px] h-[8px]`;
const segmentSmallV = `${segment} w-[2px] h-[5px]`;

type UFCCharProps = {
  char: string;
  half?: boolean;
  cue?: boolean;
  className: string;
};

type SlashProps = {
  className: string;
};

const BackSlash = ({ className }: SlashProps) => {
  return (
    <div className={`${className} absolute w-[8px] h-[8px]`}>
      <span className="absolute w-[1px] h-[1px] left-0 top-[0px] bg-green-500" />
      <span className="absolute w-[2px] h-[2px] left-[1px] top-[1px] bg-green-500" />
      <span className="absolute w-[2px] h-[2px] left-[2px] top-[2px] bg-green-500" />
      <span className="absolute w-[2px] h-[2px] left-[3px] top-[3px] bg-green-500" />
      <span className="absolute w-[2px] h-[2px] left-[4px] top-[4px] bg-green-500" />
      <span className="absolute w-[2px] h-[2px] left-[5px] top-[5px] bg-green-500" />
      <span className="absolute w-[1px] h-[1px] left-[7px] top-[7px] bg-green-500" />
    </div>
  );
};

const Slash = ({ className }: SlashProps) => {
  return (
    <div className={`${className} absolute w-[8px] h-[8px]`}>
      <span className="absolute w-[1px] h-[1px] left-0 top-[7px] bg-green-500" />
      <span className="absolute w-[2px] h-[2px] left-[1px] top-[5px] bg-green-500" />
      <span className="absolute w-[2px] h-[2px] left-[2px] top-[4px] bg-green-500" />
      <span className="absolute w-[2px] h-[2px] left-[3px] top-[3px] bg-green-500" />
      <span className="absolute w-[2px] h-[2px] left-[4px] top-[2px] bg-green-500" />
      <span className="absolute w-[2px] h-[2px] left-[5px] top-[1px] bg-green-500" />
      <span className="absolute w-[1px] h-[1px] left-[7px] top-0 bg-green-500" />
    </div>
  );
};

const UFCChar = ({
  char,
  className,
  half = false,
  cue = false,
}: UFCCharProps) => {
  const charBytes =
    charMap[char] || charMap[char ? char.trim() : ""] || 0b0000000000000000;

  const bytesOn = [] as boolean[];

  for (let pos = 15; pos >= 0; pos--) {
    bytesOn.push(Boolean((charBytes & (1 << pos)) >> pos));
  }

  let width = half ? "w-[12px]" : "w-[22px]";
  width = cue ? "w-[2px]" : width;

  const isCue = cue && char === ":";

  return (
    <div
      className={`${className} absolute ${width} h-[22px]`}
      style={{
        backgroundImage: `url(/fa-18c/fa18c-char-o${half ? "-half" : ""}.png)`,
      }}
    >
      {isCue && <span className={`${segmentSmallV} top-[2px] left-0`} />}
      {isCue && <span className={`${segmentSmallV} top-[15px] left-0`} />}
      {bytesOn[0] && <span className={`${segmentH} top-0 left-[2px]`} />}
      {bytesOn[1] && <span className={`${segmentH} top-0 left-[12px]`} />}
      {bytesOn[2] && <span className={`${segmentV} top-[2px] left-0`} />}
      {bytesOn[3] && <BackSlash className="top-[2px] left-[2px]" />}
      {bytesOn[4] && <span className={`${segmentV} top-[2px] left-[10px]`} />}
      {bytesOn[5] && <Slash className="top-[2px] left-[12px]" />}
      {bytesOn[6] && <span className={`${segmentV} top-[2px] left-[20px]`} />}
      {bytesOn[7] && <span className={`${segmentH} top-[10px] left-[2px]`} />}
      {bytesOn[8] && <span className={`${segmentH} top-[10px] left-[12px]`} />}
      {bytesOn[9] && <span className={`${segmentV} top-[12px] left-0`} />}
      {bytesOn[10] && <Slash className="top-[12px] left-[2px]" />}
      {bytesOn[11] && <span className={`${segmentV} top-[12px] left-[10px]`} />}
      {bytesOn[12] && <BackSlash className="top-[12px] left-[12px]" />}
      {bytesOn[13] && <span className={`${segmentV} top-[12px] left-[20px]`} />}
      {bytesOn[14] && <span className={`${segmentH} top-[20px] left-[2px]`} />}
      {bytesOn[15] && <span className={`${segmentH} top-[20px] left-[12px]`} />}
    </div>
  );
};

const memoedUFCChar = React.memo(UFCChar);

export { memoedUFCChar as UFCChar };
