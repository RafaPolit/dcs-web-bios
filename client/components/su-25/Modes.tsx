import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { GiBombingRun } from "react-icons/gi";
import { GiJetFighter, GiCrosshair } from "react-icons/gi";
import { udp } from "../../scripts/udp";

type TextProps = {
  children: string;
};

const Text = ({ children }: TextProps) => {
  return <span className="text-xl ml-4">{children}</span>;
};

const button =
  "flex items-center bg-gray-700 rounded-lg outline outline-1 outline-offset-8 outline-gray-400 px-6 py-3";

const Modes = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-8 m-6">
        <button
          className={button}
          onClick={() => udp("Set", "LoSetCommand 105")}
        >
          <FaMapMarkedAlt className="text-4xl" />
          <Text>Navigation Modes</Text>
        </button>
        <button
          className={button}
          onClick={() => udp("Set", "LoSetCommand 110")}
        >
          <GiJetFighter className="text-4xl" />
          <Text>Longitudinal Missile Aiming</Text>
        </button>
        <button
          className={button}
          onClick={() => udp("Set", "LoSetCommand 111")}
        >
          <GiBombingRun className="text-4xl" />
          <Text>Air-to-Ground</Text>
        </button>
        <button
          className={button}
          onClick={() => udp("Set", "LoSetCommand 112")}
        >
          <GiCrosshair className="text-4xl" />
          <Text>Gunsight Reticle Swtich</Text>
        </button>
      </div>
      <div className="absolute bottom-2 left-2">
        <i className="inline-block text-gray-300 mr-2">note:</i>This requires
        DCS-UDP-SET to be installed on your DCS machine.
      </div>
    </>
  );
};

export { Modes };
