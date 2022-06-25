import { KUButton } from "./KUButton";

const charSpacing = 51;

const composeMsg = (pos: string, str: string) => {
  return `${pos}_KU_${str}`;
};

const generateLetterButtons = (pos: "PLT" | "CPG") => {
  const buttons = [];
  for (let char = 65; char < 91; char++) {
    const leftPos = (char - 65) % 6;
    const topPos = Math.floor((char - 65) / 6);
    buttons.push(
      <KUButton
        key={`letter${char}`}
        pos={[`${leftPos * charSpacing}px`, `${topPos * charSpacing}px`]}
        msg={composeMsg(pos, String.fromCharCode(char))}
      />
    );
  }

  return buttons;
};

const numberMap = {
  10: "DOT",
  11: "0",
  12: "SIGN",
};

const generateNumberButtons = (pos: "PLT" | "CPG") => {
  const buttons = [];
  for (let char = 1; char < 13; char++) {
    const leftPos = (char - 1) % 3;
    const topPos = Math.floor((char - 1) / 3);
    const msg =
      char < 10
        ? composeMsg(pos, char.toString())
        : composeMsg(pos, numberMap[char as keyof typeof numberMap]);

    buttons.push(
      <KUButton
        key={`letter${char}`}
        pos={[`${leftPos * charSpacing}px`, `${topPos * charSpacing}px`]}
        msg={msg}
      />
    );
  }

  return buttons;
};

const symbols = [
  "SLASH",
  "BKS",
  "SPC",
  "MULTI",
  "DIV",
  "PLUS",
  "MINUS",
  "CLR",
  "LEFT",
  "RIGHT",
];

const generateSymbolButtons = (pos: "PLT" | "CPG") => {
  const buttons = symbols.map((symbol, index) => {
    const leftPos = index % 7;
    const topPos = Math.floor(index / 7);

    return (
      <KUButton
        key={`symbols${symbol}`}
        pos={[`${leftPos * charSpacing}px`, `${topPos * charSpacing}px`]}
        msg={composeMsg(pos, symbol)}
      />
    );
  });

  buttons.push(
    <KUButton
      key={`symbolsENT`}
      pos={[`203px`, `51px`]}
      msg={composeMsg(pos, "ENT")}
      width="86px"
    />
  );

  return buttons;
};

const generateButtons = (pos: "PLT" | "CPG") => {
  return {
    letters: generateLetterButtons(pos),
    numbers: generateNumberButtons(pos),
    symbols: generateSymbolButtons(pos),
  };
};

export { generateButtons };
