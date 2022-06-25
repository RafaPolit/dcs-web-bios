import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { Settings } from "../components/Settings";
import { Tabs } from "../components/ah-64d/Tabs";
import { Keyboard } from "../components/ah-64d/Keyboard";

const AH64DMain: NextPage = () => {
  const [pane, setPane] = useState("plt-keyboard");

  return (
    <div className="bg-gray-600 text-white min-h-screen">
      <Head>
        <title>AH-64D Apache</title>
        <meta name="description" content="AH-64D Apache" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Tabs pane={pane} setPane={setPane} />
        {pane === "settings" && <Settings module="ah64d" />}
        {pane === "plt-keyboard" && <Keyboard position="PLT" />}
        {pane === "cpg-keyboard" && <Keyboard position="CPG" />}
      </main>
    </div>
  );
};

export default AH64DMain;
