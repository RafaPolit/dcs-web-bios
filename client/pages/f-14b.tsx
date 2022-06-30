import { useState } from "react";
import type { NextPage } from "next";

import { Layout } from "../components/PageLayout";
import { Settings } from "../components/Settings";
import { Tabs } from "../components/f-14b/Tabs";
import { DisplaysAndAP } from "../components/f-14b/DisplaysAndAP";

const F14BMain: NextPage = () => {
  const [pane, setPane] = useState("displays");

  return (
    <Layout title="F-14B Tomcat">
      <Tabs pane={pane} setPane={setPane} />
      {pane === "settings" && <Settings module="f14b" />}
      {pane === "displays" && <DisplaysAndAP />}
    </Layout>
  );
};

export default F14BMain;
