import { useState } from "react";
import { GiCog } from "react-icons/gi";
import type { NextPage } from "next";
import Head from "next/head";

import { F16cICP } from "../components/f-16c/ICP";
import { Settings } from "../components/f-16c/Settings";
import { MFDs } from "../components/f-16c/MFDs";
import { Tabs } from "../components/Tabs";

const Home: NextPage = () => {
  const [pane, setPane] = useState("icp");

  return (
    <div className="bg-gray-600 text-white min-h-screen">
      <Head>
        <title>F-16C Viper</title>
        <meta name="description" content="F-16C Viper" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Tabs pane={pane} setPane={setPane} />
        {pane === "settings" && <Settings />}
        {pane === "icp" && <F16cICP />}
        {pane === "mfds" && <MFDs />}
      </main>
    </div>
  );
};

export default Home;
