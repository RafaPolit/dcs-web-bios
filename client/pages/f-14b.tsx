import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { Settings } from "../components/Settings";
import { Tabs } from "../components/f-14b/Tabs";
import { DisplaysAndAP } from "../components/f-14b/DisplaysAndAP";

const F14BMain: NextPage = () => {
  const [pane, setPane] = useState("displays");

  return (
    <div className="bg-gray-600 text-white min-h-screen">
      <Head>
        <title>F-14B Tomcat</title>
        <meta name="description" content="F-14B Tomcat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Tabs pane={pane} setPane={setPane} />
        {pane === "settings" && <Settings module="f14b" />}
        {pane === "displays" && <DisplaysAndAP />}
      </main>
    </div>
  );
};

export default F14BMain;
