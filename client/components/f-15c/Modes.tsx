import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import {
  GiRadarDish,
  GiMissileSwarm,
  GiJetFighter,
  GiCrosshair,
} from "react-icons/gi";
import { FC3Modes } from "../fc3/FC3Modes";
import { Button } from "../UI/Button";

const Modes = () => {
  return (
    <FC3Modes>
      <Button icon={<FaMapMarkedAlt />} command="105" keybind="1">
        Navigation Modes
      </Button>
      <Button icon={<GiRadarDish />} command="106" keybind="2">
        Beyond Visual Range
      </Button>
      <Button icon={<GiMissileSwarm />} command="107" keybind="3">
        Close Air Combat V-Scan
      </Button>
      <Button icon={<GiCrosshair />} command="108" keybind="4">
        Close Air Combat Bore
      </Button>
      <Button icon={<GiJetFighter />} command="110" keybind="6">
        Longitudinal Missile / FLOOD
      </Button>
    </FC3Modes>
  );
};

export { Modes };
