import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import {
  GiRadarDish,
  GiMissileSwarm,
  GiJetFighter,
  GiCrosshair,
  GiBombingRun,
  GiSamusHelmet,
  GiMultipleTargets,
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
      <Button icon={<GiSamusHelmet />} command="109" keybind="5">
        Close Air HMD Helmet
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
