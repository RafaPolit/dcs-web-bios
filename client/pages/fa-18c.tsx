import { useState } from "react";
import type { NextPage } from "next";

import { Layout } from "../components/PageLayout";
import { Settings } from "../components/Settings";
import { Tabs } from "../components/fa-18c/Tabs";
import { UFC } from "../components/fa-18c/UFC";
import { DDIs } from "../components/fa-18c/DDIs";
import { AMPCD } from "../components/fa-18c/AMPCD";

const FA18CMain: NextPage = () => {
  const [pane, setPane] = useState("ufc");

  return (
    <Layout title="F/A-18C Hornet">
      <Tabs pane={pane} setPane={setPane} />
      {pane === "settings" && <Settings module="fa18c" />}
      {pane === "ufc" && <UFC />}
      {pane === "ddis" && <DDIs />}
      {pane === "ampcd" && <AMPCD />}
    </Layout>
  );
};

export default FA18CMain;
