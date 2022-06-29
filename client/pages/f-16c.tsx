import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { Settings } from "../components/Settings";
import { ICP } from "../components/f-16c/ICP";
import { MFDs } from "../components/f-16c/MFDs";
import { Tabs } from "../components/f-16c/Tabs";

const F16CMain: NextPage = () => {
  const [pane, setPane] = useState("icp");

  return (
    <div className="bg-gray-600 text-white min-h-screen">
      <Head>
        <title>F-16C Viper</title>
      </Head>

      <main className="">
        <Tabs pane={pane} setPane={setPane} />
        {pane === "settings" && <Settings module="f16c" />}
        {pane === "icp" && <ICP />}
        {pane === "mfds" && <MFDs />}
      </main>
    </div>
  );
};

export default F16CMain;
