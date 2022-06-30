import { useState } from "react";
import type { NextPage } from "next";

import { Layout } from "../components/PageLayout";
import { Settings } from "../components/Settings";
import { Tabs } from "../components/f-15c/Tabs";
import { Modes } from "../components/f-15c/Modes";

const F15CMain: NextPage = () => {
  const [pane, setPane] = useState("modes");

  return (
    <Layout title="F-15C Eagle">
      <Tabs pane={pane} setPane={setPane} />
      {pane === "settings" && <Settings module="f15c" />}
      {pane === "modes" && <Modes />}
    </Layout>
  );
};

export default F15CMain;
