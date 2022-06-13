import { atom } from "recoil";

const DED_LINE_DEFAULT = { text: "", highlights: "000000000000000000000000" };

const defaultValues = {
  DED_LINE_1: { ...DED_LINE_DEFAULT },
  DED_LINE_2: { ...DED_LINE_DEFAULT },
  DED_LINE_3: { ...DED_LINE_DEFAULT },
  DED_LINE_4: { ...DED_LINE_DEFAULT },
  DED_LINE_5: { ...DED_LINE_DEFAULT },
};

const f16cDEDState = atom({
  key: "f-16c-ded",
  default: defaultValues,
});

export type F16cDEDKeys = keyof typeof defaultValues;

export { f16cDEDState };
