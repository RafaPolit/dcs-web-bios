import dcsData from "../dcsBiosDefinitions/F-16C_50.json";
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
    address: dcsData["DED Output Data"].DED_LINE_1.outputs[0].address,
    max_length: dcsData["DED Output Data"].DED_LINE_1.outputs[0].max_length,
    string_length: 24,
    control_chars: [25, 26, 27],
    type: "stringAndControl",
  },
  {
    identifier: "DED_LINE_2",
    address: dcsData["DED Output Data"].DED_LINE_2.outputs[0].address,
    max_length: dcsData["DED Output Data"].DED_LINE_2.outputs[0].max_length,
    string_length: 24,
    control_chars: [25, 26, 27],
    type: "stringAndControl",
  },
  {
    identifier: "DED_LINE_3",
    address: dcsData["DED Output Data"].DED_LINE_3.outputs[0].address,
    max_length: dcsData["DED Output Data"].DED_LINE_3.outputs[0].max_length,
    string_length: 24,
    control_chars: [25, 26, 27],
    type: "stringAndControl",
  },
  {
    identifier: "DED_LINE_4",
    address: dcsData["DED Output Data"].DED_LINE_4.outputs[0].address,
    max_length: dcsData["DED Output Data"].DED_LINE_4.outputs[0].max_length,
    string_length: 24,
    control_chars: [25, 26, 27],
    type: "stringAndControl",
  },
  {
    identifier: "DED_LINE_5",
    address: dcsData["DED Output Data"].DED_LINE_5.outputs[0].address,
    max_length: dcsData["DED Output Data"].DED_LINE_5.outputs[0].max_length,
    string_length: 24,
    control_chars: [25, 26, 27],
    type: "stringAndControl",
  },
];

console.log(relevantData);

export { relevantData };
