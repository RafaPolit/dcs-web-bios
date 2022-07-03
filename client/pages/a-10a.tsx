import { useState } from "react";
import type { NextPage } from "next";

import { Layout } from "../components/PageLayout";
import { Settings } from "../components/Settings";
import { Tabs } from "../components/a-10a/Tabs";
import { Modes } from "../components/a-10a/Modes";

const A10AMain: NextPage = () => {
  const [pane, setPane] = useState("modes");

  return (
    <Layout title="A-10A Warthog">
      <Tabs pane={pane} setPane={setPane} />
      {pane === "settings" && <Settings module="a10a" />}
      {pane === "modes" && <Modes />}
    </Layout>
  );
};

export default A10AMain;
