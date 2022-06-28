import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import {
  GiRadarDish,
  GiMissileSwarm,
  GiJetFighter,
  GiCrosshair,
} from "react-icons/gi";
import { Button, FC3Modes } from "../fc3/FC3Modes";

const Modes = () => {
  return (
    <FC3Modes>
      <Button icon={<FaMapMarkedAlt />} command="105">
        Navigation Modes
      </Button>
      <Button icon={<GiRadarDish />} command="106">
        Beyond Visual Range
      </Button>
      <Button icon={<GiMissileSwarm />} command="107">
        Close Air Combat V-Scan
      </Button>
      <Button icon={<GiCrosshair />} command="108">
        Close Air Combat Bore
      </Button>
      <Button icon={<GiJetFighter />} command="110">
        Longitudinal Missile / FLOOD
      </Button>
    </FC3Modes>
  );
};

export { Modes };
