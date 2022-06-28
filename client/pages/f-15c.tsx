import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { Settings } from "../components/Settings";
import { Tabs } from "../components/f-15c/Tabs";
import { Modes } from "../components/f-15c/Modes";

const F15CMain: NextPage = () => {
  const [pane, setPane] = useState("modes");

  return (
    <div className="bg-gray-600 text-white min-h-screen">
      <Head>
        <title>F-15C Eagle</title>
        <meta name="description" content="F-15C Eagle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Tabs pane={pane} setPane={setPane} />
        {pane === "settings" && <Settings module="f15c" />}
        {pane === "modes" && <Modes />}
      </main>
    </div>
  );
};

export default F15CMain;
