import { useState } from "react";
import type { NextPage } from "next";

import { Layout } from "../components/PageLayout";
import { Settings } from "../components/Settings";
import { Tabs } from "../components/mig-29/Tabs";
import { Modes } from "../components/mig-29/Modes";

const MiG29Main: NextPage = () => {
  const [pane, setPane] = useState("modes");

  return (
    <Layout title="MiG-29 Fulcrum">
      <Tabs pane={pane} setPane={setPane} />
      {pane === "settings" && <Settings module="mig29" />}
      {pane === "modes" && <Modes />}
    </Layout>
  );
};

export default MiG29Main;
