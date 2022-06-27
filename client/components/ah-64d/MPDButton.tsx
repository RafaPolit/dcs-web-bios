import { udp } from "../../scripts/udp";

type MPDButtonProps = {
  msg: string;
  pos: [left: string, top: string];
  width?: string;
  type?: "square" | "rectangle";
};

type Style = {
  left: string;
  top: string;
  width?: string;
};

const buttonStyle = {
  square: "absolute w-[30px] h-[30px]",
  rectangle: "absolute w-[38px] h-[24px]",
};

const MPDButton = ({ msg, pos, width, type = "square" }: MPDButtonProps) => {
  const style: Style = {
    left: `${pos[0]}`,
    top: `${pos[1]}`,
  };

  if (width) {
    style.width = `${width}`;
  }

  return (
    <button
      className={buttonStyle[type]}
      style={style}
      onClick={() => udp("Toggle", msg)}
    />
  );
};

export type { MPDButtonProps };
export { MPDButton };
