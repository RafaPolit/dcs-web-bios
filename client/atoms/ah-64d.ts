import { atom } from "recoil";

type Ah64d = {
  [property: string]: string;
};

const defaultValues: Ah64d = { PLT_MPD: "LEFT", CPG_MPD: "LEFT" };

const ah64dState = atom({
  key: "ah64d",
  default: defaultValues,
});

export { ah64dState };
