import React from "react";

type ModeProps = {
  children: JSX.Element | JSX.Element[];
};

const FC3Modes = ({ children }: ModeProps) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-8 mx-auto my-6 max-w-[750px]">
        {children}
      </div>
      <div className="absolute bottom-2 left-2">
        <i className="inline-block text-gray-300 mr-2">note:</i>This requires
        DCS-UDP-SET to be installed on your DCS machine.
      </div>
    </>
  );
};

export { FC3Modes };
