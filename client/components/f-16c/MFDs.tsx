import { useState } from "react";
import { MFD } from "./MFD";

const mfdSelect =
  "px-4 py-2 bg-neutral-500 rounded-lg outline outline-offset-4 outline-1";

const MFDs = () => {
  const [side, setSide] = useState("L");

  return (
    <>
      <div className="lg:hidden">
        <div className="flex place-content-center items-center">
          <button
            className={`${mfdSelect} mr-10 ${
              side === "L" ? "outline-white" : "outline-neutral-400"
            }`}
            onClick={() => setSide("L")}
          >
            Left
          </button>
          <MFD side={side} />
          <button
            className={`${mfdSelect} ml-10 ${
              side === "R" ? "outline-white" : "outline-neutral-400"
            }`}
            onClick={() => setSide("R")}
          >
            Right
          </button>
        </div>
      </div>
      <div className="hidden lg:flex gap-x-12 place-content-center items-center">
        <MFD side="L" />
        <MFD side="R" />
      </div>
    </>
  );
};

export { MFDs };
