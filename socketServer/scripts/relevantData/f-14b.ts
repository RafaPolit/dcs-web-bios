import { RelevantData } from "../utils";

const relevantData: RelevantData[] = [
  {
    indentifier: "PLT_HUD_MODE",
    address: 5258,
    max_length: 1,
    type: "string",
  },
  {
    indentifier: "PLT_STEER_MODE",
    address: 5260,
    max_length: 1,
    type: "string",
  },
  {
    indentifier: "PLT_HUD_DECLUTTER",
    address: 4722,
    mask: 16384,
    shift_by: 14,
    max_value: 1,
    type: "integer",
  },
  {
    indentifier: "PLT_HUD_MODE_AWL",
    address: 4722,
    mask: 32768,
    shift_by: 15,
    max_value: 1,
    type: "integer",
  },
  {
    indentifier: "PLT_VDI_MODE_DISP",
    address: 4722,
    mask: 4096,
    shift_by: 12,
    max_value: 1,
    type: "integer",
  },
  {
    indentifier: "PLT_VDI_MODE_LAND",
    address: 4722,
    mask: 8192,
    shift_by: 13,
    max_value: 1,
    type: "integer",
  },
  {
    indentifier: "PLT_HSD_DIS_MODE",
    address: 4642,
    mask: 384,
    shift_by: 7,
    max_value: 2,
    type: "integer",
  },
  {
    indentifier: "PLT_HSD_ECM_OVER",
    address: 4642,
    mask: 512,
    shift_by: 9,
    max_value: 1,
    type: "integer",
  },
  {
    indentifier: "PLT_VDI_PW_SW",
    address: 4636,
    mask: 32768,
    shift_by: 15,
    max_value: 1,
    type: "integer",
  },
  {
    indentifier: "PLT_HUD_PW_SW",
    address: 4642,
    mask: 1,
    shift_by: 0,
    max_value: 1,
    type: "integer",
  },
  {
    indentifier: "PLT_HSD_PW_SW",
    address: 4642,
    mask: 2,
    shift_by: 1,
    max_value: 1,
    type: "integer",
  },
];

export { relevantData };
