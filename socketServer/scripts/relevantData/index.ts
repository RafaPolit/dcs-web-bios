import { relevantData as f14b } from "./f-14b";
import { relevantData as f16c } from "./f-16c";
import { relevantData as fa18c } from "./fa-18c";

const moduleAliases = {
  "F-14A-135-GR": "f14b",
  "F-14B": "f14b",
  "F-16C_50": "f16c",
  "FA-18C_hornet": "fa18c",
};

export type Module = "f14b" | "f16c";
export type ModuleAliases = keyof typeof moduleAliases;
export { moduleAliases, f14b, f16c, fa18c };
