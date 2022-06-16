import { atom } from "recoil";

type DcsData = {
  [property: string]: string;
};

const defaultValues: DcsData = {};

const dcsDataState = atom({
  key: "dcsData",
  default: defaultValues,
});

export { dcsDataState };
