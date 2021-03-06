import { useState } from "react";
import type { NextPage } from "next";

import { Layout } from "../components/PageLayout";
import { Settings } from "../components/Settings";
import { ICP } from "../components/f-16c/ICP";
import { MFDs } from "../components/f-16c/MFDs";
import { Tabs } from "../components/f-16c/Tabs";

const F16CMain: NextPage = () => {
  const [pane, setPane] = useState("icp");

  return (
    <Layout title="F-16C Viper">
      <Tabs pane={pane} setPane={setPane} />
      {pane === "settings" && <Settings module="f16c" />}
      {pane === "icp" && <ICP />}
      {pane === "mfds" && <MFDs />}
    </Layout>
  );
};

export default F16CMain;
