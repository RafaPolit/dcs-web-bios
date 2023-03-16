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
  iconOnly?: boolean;
  keybind?: string;
  children?: string;
};

const button =
  "flex relative items-center bg-gray-700 rounded-lg outline outline-1 outline-offset-8 outline-gray-400 px-6 py-3";
const buttonOnlyIcon =
  "flex relative items-center bg-[#212528] rounded-lg outline outline-1 outline-gray-700 px-3 py-2";

const Button = ({
  icon,
  iconOnly = false,
  command,
  keybind,
  children,
}: ButtonProps) => {
  const Icon = React.cloneElement(icon, { className: "text-4xl" });
  return (
    <button
      className={iconOnly ? buttonOnlyIcon : button}
      onClick={() => udp("Set", `LoSetCommand ${command}`)}
    >
      {Icon}
      {!iconOnly && (
        <>
          <Text>{children || ""}</Text>
          <span className="absolute top-0 right-2 opacity-50">{keybind}</span>
        </>
      )}
    </button>
  );
};

export { Button };
