import os from "os";
export interface RelevantData {
  indentifier: string;
  type: "integer" | "string" | "stringAndControl";
  address: number;
  mask?: number;
  shift_by?: number;
  max_length?: number;
  string_length?: number;
  control_chars?: number[];
  max_value?: number;
}

const getRelevantAddresses = (relevantData: RelevantData[]) => {
  return relevantData.reduce<number[]>((memo, property) => {
    let a = property.address;
    for (
      a = property.address;
      a < property.address + (property.max_length || 1);
      a++
    ) {
      memo.push(a);
    }
    return memo;
  }, []);
};

const hexToUtf8 = (s: string) => {
  let conversion = "";
  try {
    conversion = decodeURIComponent(
      s.replace(/[0-9a-f]{2}/g, "%$&") // add '%' before each 2 characters
    );
  } catch (e) {
    console.log("Problem converting:", s, "to Utf8.");
  }

  return conversion;
};

const reverse = (s: string) => {
  return s.split("").reverse().join("");
};

const getOwnIP = () => {
  return Object.values(os.networkInterfaces()).reduce(
    (r, list) =>
      r.concat(
        list.reduce(
          (rr, i) =>
            rr.concat((i.family === "IPv4" && !i.internal && i.address) || []),
          []
        )
      ),
    []
  );
};

export { getRelevantAddresses, hexToUtf8, getOwnIP, reverse };
