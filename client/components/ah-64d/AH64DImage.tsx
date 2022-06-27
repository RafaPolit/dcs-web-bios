import React from "react";
import Image from "next/image";

type AH64DImageProps = {
  url: string;
  w: number;
  h: number;
  value?: number;
};

const AH64DImage = ({ url, w, h, value = 1 }: AH64DImageProps) => {
  return (
    <>
      {value ? (
        <Image
          src={`/ah-64d/ah64d-${url}.jpg`}
          alt="ioSwitch"
          layout="fixed"
          width={w}
          height={h}
        />
      ) : null}
    </>
  );
};

const memoedAH64DImage = React.memo(AH64DImage);

export { memoedAH64DImage, AH64DImage };
