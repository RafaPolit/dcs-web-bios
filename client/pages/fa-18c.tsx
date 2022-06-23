import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { Settings } from "../components/Settings";
import { Tabs } from "../components/fa-18c/Tabs";
import { UFC } from "../components/fa-18c/UFC";

const F16CMain: NextPage = () => {
  const [pane, setPane] = useState("ufc");

  return (
    <div className="bg-gray-600 text-white min-h-screen">
      <Head>
        <title>F-16C Viper</title>
        <meta name="description" content="F-16C Viper" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Tabs pane={pane} setPane={setPane} />
        {pane === "settings" && <Settings module="fa18c" />}
        {pane === "ufc" && <UFC />}
      </main>
    </div>
  );
};

export default F16CMain;
