import React from "react";
import Image from "next/image";

type F14ImageProps = {
  url: string;
  w: number;
  h: number;
  value?: number;
};

const F14Image = ({ url, w, h, value = 1 }: F14ImageProps) => {
  return (
    <>
      {value ? (
        <Image
          src={`/f-14b/f14b-${url}.jpg`}
          alt="ioSwitch"
          layout="fixed"
          width={w}
          height={h}
        />
      ) : null}
    </>
  );
};

const memoedF14Image = React.memo(F14Image);

export { memoedF14Image, F14Image };
