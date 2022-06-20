import React from "react";
import { Displays } from "./Displays";
import { AP } from "./AP";

const DisplaysAndAP = () => {
  return (
    <div className="flex place-content-center space-x-12 items-end">
      <AP />
      <Displays />
    </div>
  );
};

export { DisplaysAndAP };
