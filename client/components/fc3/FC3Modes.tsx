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
  keybind?: string;
  children: string;
};

const button =
  "flex relative items-center bg-gray-700 rounded-lg outline outline-1 outline-offset-8 outline-gray-400 px-6 py-3";

const Button = ({ icon, command, keybind, children }: ButtonProps) => {
  const Icon = React.cloneElement(icon, { className: "text-4xl" });
  return (
    <button
      className={button}
      onClick={() => udp("Set", `LoSetCommand ${command}`)}
    >
      {Icon}
      <Text>{children}</Text>
      <span className="absolute top-0 right-2 opacity-50">{keybind}</span>
    </button>
  );
};

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

export { FC3Modes, Button };
