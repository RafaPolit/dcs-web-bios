export interface RelevantData {
  indentifier: string;
  address: number;
  max_length: number;
  type: "stringAndControl";
}

const getRelevantAddresses = (relevantData: RelevantData[]) => {
  return relevantData.reduce<number[]>((memo, property) => {
    let a = property.address;
    for (
      a = property.address;
      a < property.address + property.max_length;
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
    // not sure yet
  }

  return conversion;
};

const reverse = (s: string) => {
  return s.split("").reverse().join("");
};

export { getRelevantAddresses, hexToUtf8, reverse };
