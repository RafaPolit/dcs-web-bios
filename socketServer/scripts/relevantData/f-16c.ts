import { RelevantData } from "../utils";

const relevantData: RelevantData[] = [
  {
    identifier: "_ACFT_NAME",
    address: 0x0000,
    max_length: 24,
    type: "string",
  },
  {
    identifier: "DED_LINE_1",
    address: 0x450a,
    max_length: 29,
    string_length: 24,
    control_chars: [25, 26, 27],
    type: "stringAndControl",
  },
  {
    identifier: "DED_LINE_2",
    address: 0x4528,
    max_length: 29,
    string_length: 24,
    control_chars: [25, 26, 27],
    type: "stringAndControl",
  },
  {
    identifier: "DED_LINE_3",
    address: 0x4546,
    max_length: 29,
    string_length: 24,
    control_chars: [25, 26, 27],
    type: "stringAndControl",
  },
  {
    identifier: "DED_LINE_4",
    address: 0x4564,
    max_length: 29,
    string_length: 24,
    control_chars: [25, 26, 27],
    type: "stringAndControl",
  },
  {
    identifier: "DED_LINE_5",
    address: 0x4582,
    max_length: 29,
    string_length: 24,
    control_chars: [25, 26, 27],
    type: "stringAndControl",
  },
];

export { relevantData };
