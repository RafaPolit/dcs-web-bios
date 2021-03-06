import { RelevantData } from "../utils";

const relevantData: RelevantData[] = [
  {
    identifier: "_ACFT_NAME",
    address: 0x0000,
    max_length: 24,
    type: "string",
  },
  {
    identifier: "UFC_COMM1_DISPLAY",
    address: 0x7424,
    max_length: 2,
    type: "string",
  },
  {
    identifier: "UFC_COMM2_DISPLAY",
    address: 0x7426,
    max_length: 2,
    type: "string",
  },
  {
    identifier: "UFC_OPTION_CUEING_1",
    address: 0x7428,
    max_length: 1,
    type: "string",
  },
  {
    identifier: "UFC_OPTION_CUEING_2",
    address: 0x742a,
    max_length: 1,
    type: "string",
  },
  {
    identifier: "UFC_OPTION_CUEING_3",
    address: 0x742c,
    max_length: 1,
    type: "string",
  },
  {
    identifier: "UFC_OPTION_CUEING_4",
    address: 0x742e,
    max_length: 1,
    type: "string",
  },
  {
    identifier: "UFC_OPTION_CUEING_5",
    address: 0x7430,
    max_length: 1,
    type: "string",
  },
  {
    identifier: "UFC_OPTION_DISPLAY_1",
    address: 0x7432,
    max_length: 4,
    type: "string",
  },
  {
    identifier: "UFC_OPTION_DISPLAY_2",
    address: 0x7436,
    max_length: 4,
    type: "string",
  },
  {
    identifier: "UFC_OPTION_DISPLAY_3",
    address: 0x743a,
    max_length: 4,
    type: "string",
  },
  {
    identifier: "UFC_OPTION_DISPLAY_4",
    address: 0x743e,
    max_length: 4,
    type: "string",
  },
  {
    identifier: "UFC_OPTION_DISPLAY_5",
    address: 0x7442,
    max_length: 4,
    type: "string",
  },
  {
    identifier: "UFC_SCRATCHPAD_NUMBER_DISPLAY",
    address: 0x7446,
    max_length: 8,
    type: "string",
  },
  {
    identifier: "UFC_SCRATCHPAD_STRING_1_DISPLAY",
    address: 0x744e,
    max_length: 2,
    type: "string",
  },
  {
    identifier: "UFC_SCRATCHPAD_STRING_2_DISPLAY",
    address: 0x7450,
    max_length: 2,
    type: "string",
  },
  {
    identifier: "UFC_ADF",
    address: 0x7416,
    mask: 0x00c0,
    shift_by: 6,
    max_value: 2,
    type: "integer",
  },
  {
    identifier: "LEFT_DDI_BRT_SELECT",
    address: 0x740e,
    mask: 0x0006,
    shift_by: 1,
    max_value: 2,
    type: "integer",
  },
  {
    identifier: "RIGHT_DDI_BRT_SELECT",
    address: 0x7418,
    mask: 0x0060,
    shift_by: 5,
    max_value: 2,
    type: "integer",
  },
  {
    identifier: "AMPCD_BRT_CTL",
    address: 0x74e0,
    mask: 0xffff,
    shift_by: 0,
    max_value: 65535,
    type: "integer",
  },
];

export { relevantData };
