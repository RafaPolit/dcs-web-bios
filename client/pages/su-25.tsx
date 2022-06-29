import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { Settings } from "../components/Settings";
import { Tabs } from "../components/su-25/Tabs";
import { Modes } from "../components/su-25/Modes";

const SU25Main: NextPage = () => {
  const [pane, setPane] = useState("modes");

  return (
    <div className="bg-gray-600 text-white min-h-screen">
      <Head>
        <title>SU-25 Frogfoot</title>
      </Head>

      <main className="">
        <Tabs pane={pane} setPane={setPane} />
        {pane === "settings" && <Settings module="su25" />}
        {pane === "modes" && <Modes />}
      </main>
    </div>
  );
};

export default SU25Main;
