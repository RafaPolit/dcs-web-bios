import { relevantData as f14b } from "./f-14b";
import { relevantData as f16c } from "./f-16c";
import { relevantData as fa18c } from "./fa-18c";
import { relevantData as ah64d } from "./ah-64d";

const moduleAliases = {
  "F-14A-135-GR": "f14b",
  "F-14B": "f14b",
  "F-16C_50": "f16c",
  "FA-18C_hornet": "fa18c",
  "AH-64D_BLK_II": "ah64d",
};

export type Module = "f14b" | "f16c" | "fa18c" | "ah64d";
export type ModuleAliases = keyof typeof moduleAliases;
export { moduleAliases, f14b, f16c, fa18c, ah64d };
