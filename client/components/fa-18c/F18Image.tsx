import React from "react";
import Image from "next/image";

type F18ImageProps = {
  url: string;
  w: number;
  h: number;
  value?: number;
};

const F18Image = ({ url, w, h, value = 1 }: F18ImageProps) => {
  return (
    <>
      {value ? (
        <Image
          src={`/fa-18c/fa18c-${url}.jpg`}
          alt="ioSwitch"
          layout="fixed"
          width={w}
          height={h}
        />
      ) : null}
    </>
  );
};

const memoedF18Image = React.memo(F18Image);

export { memoedF18Image, F18Image };
