import { RelevantData } from "../utils";

const relevantData: RelevantData[] = [
  {
    indentifier: "PLT_HUD_MODE",
    address: 5258,
    max_length: 1,
    type: "string",
  },
  {
    indentifier: "PLT_HUD_DECLUTTER",
    address: 0x1272,
    mask: 0x4000,
    shift_by: 14,
    max_value: 1,
    type: "integer",
  },
];

export { relevantData };
