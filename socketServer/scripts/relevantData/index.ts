import { relevantData as f14b } from "./f-14b";
import { relevantData as f16c } from "./f-16c";

const moduleAliases = {
  "F-14A-135-GR": "f14b",
  "F-14B": "f14b",
  "F-16C_50": "f16c",
};

export type Module = "f14b" | "f16c";
export type ModuleAliases = keyof typeof moduleAliases;
export { moduleAliases, f14b, f16c };
