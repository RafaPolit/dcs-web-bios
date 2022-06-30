import { useState } from "react";
import type { NextPage } from "next";

import { Layout } from "../components/PageLayout";
import { Settings } from "../components/Settings";
import { Tabs } from "../components/ah-64d/Tabs";
import { Keyboard } from "../components/ah-64d/Keyboard";
import { MPDs } from "../components/ah-64d/MPDs";

const AH64DMain: NextPage = () => {
  const [pane, setPane] = useState("plt-keyboard");

  return (
    <Layout title="AH-64D Apache">
      <Tabs pane={pane} setPane={setPane} />
      {pane === "settings" && <Settings module="ah64d" />}
      {pane === "plt-keyboard" && <Keyboard position="PLT" />}
      {pane === "cpg-keyboard" && <Keyboard position="CPG" />}
      {pane === "plt-mpds" && <MPDs position="PLT" />}
      {pane === "cpg-mpds" && <MPDs position="CPG" />}
    </Layout>
  );
};

export default AH64DMain;
