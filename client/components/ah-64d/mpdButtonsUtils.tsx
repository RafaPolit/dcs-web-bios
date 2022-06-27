import { KUButton } from "./KUButton";
import { MPDButton, MPDButtonProps } from "./MPDButton";

const buttonSpacing = { row: 39.5, col: 36 };

const composeMsg = (pos: string, str: string) => {
  return `${pos}_MPD_${str}`;
};

type Pos = "PLT" | "CPG";
type Side = "L" | "R";

const generateMainButtons = (
  pos: Pos,
  side: Side,
  section: "T" | "B" | "L" | "R",
  orientation: "row" | "col"
) => {
  const buttons = [];
  for (let index = 1; index < 7; index++) {
    let posStrings: MPDButtonProps["pos"] = [`0px`, `0px`];

    posStrings[orientation === "row" ? 0 : 1] = `${
      (index - 1) * buttonSpacing[orientation]
    }px`;

    buttons.push(
      <MPDButton
        key={`${pos}${side}${section}${index}`}
        pos={posStrings}
        msg={composeMsg(pos, `${side}_${section}${index}`)}
      />
    );
  }

  return buttons;
};

const generateExtraButtons = (pos: Pos, side: Side) => {
  return {
    TR: [
      <MPDButton
        key={`${pos}${side}FCR`}
        pos={["0px", "0px"]}
        msg={composeMsg(pos, `${side}_AST`)}
        type="rectangle"
      />,
    ],
    BL: [
      <MPDButton
        key={`${pos}${side}FCR`}
        pos={["0px", "0px"]}
        msg={composeMsg(pos, `${side}_FCR`)}
        type="rectangle"
      />,
      <MPDButton
        key={`${pos}${side}WPN`}
        pos={["0px", "36px"]}
        msg={composeMsg(pos, `${side}_WPN`)}
        type="rectangle"
      />,
      <MPDButton
        key={`${pos}${side}TSD`}
        pos={["50px", "64px"]}
        msg={composeMsg(pos, `${side}_TSD`)}
        type="rectangle"
      />,
    ],
    BR: [
      <MPDButton
        key={`${pos}${side}VID`}
        pos={["50px", "0px"]}
        msg={composeMsg(pos, `${side}_VID`)}
        type="rectangle"
      />,
      <MPDButton
        key={`${pos}${side}WPN`}
        pos={["50px", "36px"]}
        msg={composeMsg(pos, `${side}_COM`)}
        type="rectangle"
      />,
      <MPDButton
        key={`${pos}${side}TSD`}
        pos={["0px", "64px"]}
        msg={composeMsg(pos, `${side}_AC`)}
        type="rectangle"
      />,
    ],
  };
};

const generateSection = (pos: Pos, side: Side) => {
  return {
    L: generateMainButtons(pos, side, "L", "col"),
    R: generateMainButtons(pos, side, "R", "col"),
    T: generateMainButtons(pos, side, "T", "row"),
    B: generateMainButtons(pos, side, "B", "row"),
    ...generateExtraButtons(pos, side),
  };
};

const generateButtons = (pos: "PLT" | "CPG") => {
  return {
    L: generateSection(pos, "L"),
    R: generateSection(pos, "R"),
  };
};

export { generateButtons };
