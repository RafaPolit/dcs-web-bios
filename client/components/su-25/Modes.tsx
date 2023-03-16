import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { GiBombingRun } from "react-icons/gi";
import { GiJetFighter, GiMultipleTargets } from "react-icons/gi";
import { FC3Modes } from "../fc3/FC3Modes";
import { Button } from "../UI/Button";

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
      <Button icon={<GiMultipleTargets />} command="112" keybind="8">
        Gunsight Reticle Swtich
      </Button>
    </FC3Modes>
  );
};

export { Modes };
