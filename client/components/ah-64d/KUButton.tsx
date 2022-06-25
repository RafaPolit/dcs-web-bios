import { udp } from "../../scripts/udp";

type KUButtonProps = {
  msg: string;
  pos: [left: string, top: string];
  width?: string;
};

type Style = {
  left: string;
  top: string;
  width?: string;
};

const squareButton = "absolute w-[34px] h-[33px]";

const KUButton = ({ msg, pos, width }: KUButtonProps) => {
  const style: Style = {
    left: `${pos[0]}`,
    top: `${pos[1]}`,
  };

  if (width) {
    style.width = `${width}`;
  }

  return (
    <button
      className={`${squareButton}`}
      style={style}
      onClick={() => udp("Toggle", msg)}
    />
  );
};

export { KUButton };
