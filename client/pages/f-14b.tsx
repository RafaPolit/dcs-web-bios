import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { Settings } from "../components/Settings";
import { Tabs } from "../components/f-14b/Tabs";
import { Displays } from "../components/f-14b/Displays";

const Home: NextPage = () => {
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
        {pane === "displays" && <Displays />}
      </main>
    </div>
  );
};

export default Home;
