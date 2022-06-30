import { useState } from "react";
import type { NextPage } from "next";

import { Settings } from "../components/Settings";
import { Tabs } from "../components/su-25/Tabs";
import { Modes } from "../components/su-25/Modes";
import { Layout } from "../components/PageLayout";
import { Head } from "../components/Head";

const SU25Main: NextPage = () => {
  const [pane, setPane] = useState("modes");

  return (
    <Layout title="SU-25 Frogfoot">
      <Tabs pane={pane} setPane={setPane} />
      {pane === "settings" && <Settings module="su25" />}
      {pane === "modes" && <Modes />}
    </Layout>
  );
};

export default SU25Main;
