import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { GiBombingRun } from "react-icons/gi";
import { GiJetFighter, GiCrosshair } from "react-icons/gi";
import { Button, FC3Modes } from "../fc3/FC3Modes";

const Modes = () => {
  return (
    <FC3Modes>
      <Button icon={<FaMapMarkedAlt />} command="105">
        Navigation Modes
      </Button>
      <Button icon={<GiJetFighter />} command="110">
        Longitudinal Missile Aiming
      </Button>
      <Button icon={<GiBombingRun />} command="111">
        Air-to-Ground
      </Button>
      <Button icon={<GiCrosshair />} command="112">
        Gunsight Reticle Swtich
      </Button>
    </FC3Modes>
  );
};

export { Modes };
