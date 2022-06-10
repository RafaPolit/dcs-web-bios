import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { udp } from "../scripts/udp";

const Home: NextPage = () => {
  const [pane, setPane] = useState("icp");

  const udpSend = async (msg: string) => {
    const apiCall = await fetch(`/api/udpSend?msg=${encodeURI(msg)}`);
    await apiCall.json();
  };

  return (
    <div className="bg-gray-800 text-white min-h-screen">
      <Head>
        <title>F-16C Viper</title>
        <meta name="description" content="F-16C Viper" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4">
        <h1 className="text-3xl font-bold">F-16C Viper</h1>

        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-200 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
          <li className="mr-2">
            <button
              className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
              onClick={() => setPane("icp")}
            >
              ICP
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
        {pane === "icp" && (
          <div className="grid place-content-center">
            <div className="relative">
              <Image
                src="/f-16c/f-16c-icp.png"
                alt="F-16C Viper - ICP"
                layout="fixed"
                width="551"
                height="412"
              />
              <button
                className="absolute top-[20px] left-[54px] w-[56px] h-[55px] rounded-full"
                onClick={() => udp("Toggle", "ICP_COM1_BTN")}
              >
                &nbsp;
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
