import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const [pane, setPane] = useState("engine");

  const udpSend = async (msg: string) => {
    const apiCall = await fetch(`/api/udpSend?msg=${encodeURI(msg)}`);
    await apiCall.json();
  };

  return (
    <div className="bg-gray-800 text-white min-h-screen">
      <Head>
        <title>Bf 109 K-4 Kurfurst</title>
        <meta name="description" content="Bf 109 K-4 Kurfurst" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4">
        <h1 className="text-3xl font-bold">Bf 109 K-4 Kurfurst</h1>

        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-200 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
          <li className="mr-2">
            <button
              className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
              onClick={() => setPane("engine")}
            >
              Engine
            </button>
          </li>
          <li className="mr-2">
            <button
              className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              onClick={() => setPane("weaponControl")}
            >
              Weapon Control
            </button>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            >
              Settings
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            >
              Contacts
            </a>
          </li>
          <li>
            <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
              Disabled
            </a>
          </li>
        </ul>
        {pane === "engine" && <div>Engine</div>}
        {pane === "weaponControl" && (
          <div className="flex flex-col space-y-4">
            <div>Bomb fusing Selector:</div>
            <div className="flex space-x-2">
              <span>Sturz:</span>
              <button
                className="px-4 py-1 font-semibold text-sm bg-cyan-500 text-white rounded-full"
                onClick={() => udpSend("FUSING_SEL 0")}
              >
                OV
              </button>
              <button
                className="px-4 py-1 font-semibold text-sm bg-cyan-500 text-white rounded-full"
                onClick={() => udpSend("FUSING_SEL 1")}
              >
                MV
              </button>
            </div>
            <div className="flex space-x-2">
              <span>Aus:</span>
              <button
                className="px-4 py-1 font-semibold text-sm bg-cyan-500 text-white rounded-full"
                onClick={() => udpSend("FUSING_SEL 2")}
              >
                Aus
              </button>
            </div>
            <div className="flex space-x-2">
              <span>Wagerecht:</span>
              <button
                className="px-4 py-1 font-semibold text-sm bg-cyan-500 text-white rounded-full"
                onClick={() => udpSend("FUSING_SEL 3")}
              >
                MV
              </button>
              <button
                className="px-4 py-1 font-semibold text-sm bg-cyan-500 text-white rounded-full"
                onClick={() => udpSend("FUSING_SEL 4")}
              >
                OV
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
