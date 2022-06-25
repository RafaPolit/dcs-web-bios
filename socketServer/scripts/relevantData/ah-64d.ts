import { RelevantData } from "../utils";

const relevantData: RelevantData[] = [
  {
    identifier: "_ACFT_NAME",
    address: 0x0000,
    max_length: 24,
    type: "string",
  },
  {
    identifier: "PLT_KU_DISPLAY",
    address: 0x808c,
    max_length: 22,
    type: "string",
  },
  {
    identifier: "CPG_KU_DISPLAY",
    address: 0x80aa,
    max_length: 22,
    type: "string",
  },
  {
    identifier: "PLT_KU_BRT",
    address: 0x808a,
    mask: 0xffff,
    shift_by: 0,
    max_value: 65535,
    type: "integer",
  },
  {
    identifier: "CPG_KU_BRT",
    address: 0x80a8,
    mask: 0xffff,
    shift_by: 0,
    max_value: 65535,
    type: "integer",
  },
];

export { relevantData };
