import React from "react";
import { useRecoilValue } from "recoil";
import { dcsDataState } from "../../atoms/dcsData";
import { DEDLine } from "./DEDLine";

const relevantData = [
  "DED_LINE_1",
  "DED_LINE_2",
  "DED_LINE_3",
  "DED_LINE_4",
  "DED_LINE_5",
];

const DED = () => {
  const dcsData = useRecoilValue(dcsDataState);

  const properties = relevantData.map((propertyName) => {
    const data = dcsData[propertyName] || "";
    return {
      property: propertyName,
      text: data.split("|")[0],
      highlights: data.split("|")[1] || "",
    };
  });

  return (
    <div className="font-falconded leading-none bg-black p-2 border-4 border-zinc-700 text-lime-400">
      {properties.map((property) => (
        <DEDLine
          key={property.property}
          text={property.text}
          highlights={property.highlights}
        />
      ))}
    </div>
  );
};

export { DED };
