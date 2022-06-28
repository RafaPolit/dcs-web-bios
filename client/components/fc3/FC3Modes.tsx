import React from "react";
import { udp } from "../../scripts/udp";

type TextProps = {
  children: string;
};

const Text = ({ children }: TextProps) => {
  return <span className="text-xl ml-4">{children}</span>;
};

type ButtonProps = {
  icon: JSX.Element;
  command: string;
  children: string;
};

const Button = ({ icon, command, children }: ButtonProps) => {
  const Icon = React.cloneElement(icon, { className: "text-4xl" });
  return (
    <button
      className={button}
      onClick={() => udp("Set", `LoSetCommand ${command}`)}
    >
      {Icon}
      <Text>{children}</Text>
    </button>
  );
};

type ModeProps = {
  children: JSX.Element | JSX.Element[];
};

const button =
  "flex items-center bg-gray-700 rounded-lg outline outline-1 outline-offset-8 outline-gray-400 px-6 py-3";

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

export { FC3Modes, Button };
