import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { GiBombingRun } from "react-icons/gi";
import { GiJetFighter } from "react-icons/gi";
import { Button, FC3Modes } from "../fc3/FC3Modes";

const Modes = () => {
  return (
    <FC3Modes>
      <Button icon={<FaMapMarkedAlt />} command="105" keybind="1">
        Navigation Modes
      </Button>
      <Button icon={<GiJetFighter />} command="110" keybind="6">
        Longitudinal Missile Aiming
      </Button>
      <Button icon={<GiBombingRun />} command="111" keybind="7">
        Air-to-Ground
      </Button>
    </FC3Modes>
  );
};

export { Modes };
