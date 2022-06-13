import { useState } from "react";
import { GiCog } from "react-icons/gi";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { udp } from "../scripts/udp";

import { F16cICP } from "../components/f-16c/icp";

const tabClass =
  "inline-block font-semibold px-6 py-3 rounded-t-lg hover:text-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-800 dark:hover:text-neutral-300";
const tabClassCurrent =
  "inline-block font-semibold px-6 py-3 bg-neutral-600 rounded-t-lg active";

const mdfSelect =
  "px-4 py-2 bg-neutral-500 rounded-lg outline outline-offset-4 outline-1 bg-red-800 opacity-75";
const mfdButton = "absolute w-[36px] h-[36px] bg-red-800 opacity-75";
const mfdSwitch = "absolute w-[52px] h-[36px] bg-red-800 opacity-75";

const Home: NextPage = () => {
  const [connected, setConnected] = useState(false);
  const [pane, setPane] = useState("icp");
  const [mfd, setMfd] = useState("L");

  const udpSend = async (msg: string) => {
    const apiCall = await fetch(`/api/udpSend?msg=${encodeURI(msg)}`);
    await apiCall.json();
  };

  const connect = async () => {
    try {
      const apiCall = await fetch("/api/dcsConnect");
      const response = await apiCall.json();
      setConnected(response.connected === "OK!" ? true : false);
    } catch (e) {
      console.log(e);
      setConnected(false);
    }
  };

  return (
    <div className="bg-neutral-600 text-white min-h-screen">
      <Head>
        <title>F-16C Viper</title>
        <meta name="description" content="F-16C Viper" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <ul className="flex flex-wrap text-md font-medium text-center text-neutral-200 pt-1 px-2 mb-1 bg-neutral-800">
          <li>
            <button
              className={pane === "icp" ? tabClassCurrent : tabClass}
              onClick={() => setPane("icp")}
            >
              ICP
            </button>
          </li>
          <li>
            <button
              className={pane === "mfd" ? tabClassCurrent : tabClass}
              onClick={() => setPane("mfd")}
            >
              MFD
            </button>
          </li>
        </ul>
        <button
          className="absolute p-3 top-0 right-0 text-2xl"
          onClick={() => setPane("settings")}
        >
          <GiCog />
        </button>
        {pane === "settings" && (
          <div>
            <div className="p-4">
              Connect to DCS:
              <button
                className="bg-neutral-500 px-4 py-2 mx-2 rounded-lg"
                onClick={() => connect()}
              >
                Connect
              </button>
              <span className="text-neutral-400">
                Only required for on-screen feedback, not to send data.
              </span>
            </div>
            <div className="p-4">
              Status: {connected ? "Connected" : "Not Connected"}
            </div>
          </div>
        )}
        {pane === "icp" && <F16cICP />}
        {pane === "mfd" && (
          <div className="flex place-content-center items-center">
            <div>
              <button
                className={`${mdfSelect} mr-10 ${
                  mfd === "L" ? "outline-white" : "outline-neutral-400"
                }`}
                onClick={() => setMfd("L")}
              >
                Left
              </button>
            </div>
            <div className="relative w-[428px] h-[420px]">
              <Image
                src="/f-16c/f-16c-mfd.png"
                alt="F-16C Viper - ICP"
                layout="fill"
                className="rounded-lg"
              />
              <span className="absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]">
                {mfd === "L" ? "LEFT" : "RIGHT"}
              </span>
              <button
                className={`${mfdButton} top-[10px] left-[96px]`}
                onClick={() => udp("Toggle", `MFD_${mfd}_1`)}
              />
              <button
                className={`${mfdButton} top-[10px] left-[144px]`}
                onClick={() => udp("Toggle", `MFD_${mfd}_2`)}
              />
              <button
                className={`${mfdButton} top-[10px] left-[194px]`}
                onClick={() => udp("Toggle", `MFD_${mfd}_3`)}
              />
              <button
                className={`${mfdButton} top-[10px] left-[245px]`}
                onClick={() => udp("Toggle", `MFD_${mfd}_4`)}
              />
              <button
                className={`${mfdButton} top-[10px] left-[294px]`}
                onClick={() => udp("Toggle", `MFD_${mfd}_5`)}
              />
              {}
              <button
                className={`${mfdButton} top-[92px] left-[380px]`}
                onClick={() => udp("Toggle", `MFD_${mfd}_6`)}
              />
              <button
                className={`${mfdButton} top-[142px] left-[380px]`}
                onClick={() => udp("Toggle", `MFD_${mfd}_7`)}
              />
              <button
                className={`${mfdButton} top-[191px] left-[380px]`}
                onClick={() => udp("Toggle", `MFD_${mfd}_8`)}
              />
              <button
                className={`${mfdButton} top-[240px] left-[380px]`}
                onClick={() => udp("Toggle", `MFD_${mfd}_9`)}
              />
              <button
                className={`${mfdButton} top-[290px] left-[380px]`}
                onClick={() => udp("Toggle", `MFD_${mfd}_10`)}
              />
              {}
              <button
                className={`${mfdButton} top-[376px] left-[100px]`}
                onClick={() => udp("Toggle", `MFD_${mfd}_15`)}
              />
              <button
                className={`${mfdButton} top-[376px] left-[148px]`}
                onClick={() => udp("Toggle", `MFD_${mfd}_14`)}
              />
              <button
                className={`${mfdButton} top-[375px] left-[198px]`}
                onClick={() => udp("Toggle", `MFD_${mfd}_13`)}
              />
              <button
                className={`${mfdButton} top-[375px] left-[248px]`}
                onClick={() => udp("Toggle", `MFD_${mfd}_12`)}
              />
              <button
                className={`${mfdButton} top-[374px] left-[296px]`}
                onClick={() => udp("Toggle", `MFD_${mfd}_11`)}
              />
              {}
              <button
                className={`${mfdButton} top-[97px] left-[12px]`}
                onClick={() => udp("Toggle", `MFD_${mfd}_20`)}
              />
              <button
                className={`${mfdButton} top-[145px] left-[13px]`}
                onClick={() => udp("Toggle", `MFD_${mfd}_19`)}
              />
              <button
                className={`${mfdButton} top-[195px] left-[13px]`}
                onClick={() => udp("Toggle", `MFD_${mfd}_18`)}
              />
              <button
                className={`${mfdButton} top-[245px] left-[14px]`}
                onClick={() => udp("Toggle", `MFD_${mfd}_17`)}
              />
              <button
                className={`${mfdButton} top-[294px] left-[14px]`}
                onClick={() => udp("Toggle", `MFD_${mfd}_16`)}
              />
              {}
              <button
                className={`${mfdSwitch} top-[8px] left-[14px]`}
                onClick={() =>
                  udp("SendAndReturn", `MFD_${mfd}_GAIN_SW`, "2", "1")
                }
              />
              <button
                className={`${mfdSwitch} top-[48px] left-[14px]`}
                onClick={() =>
                  udp("SendAndReturn", `MFD_${mfd}_GAIN_SW`, "0", "1")
                }
              />
              {}
              <button
                className={`${mfdSwitch} top-[340px] left-[14px]`}
                onClick={() =>
                  udp("SendAndReturn", `MFD_${mfd}_BRT_SW`, "2", "1")
                }
              />
              <button
                className={`${mfdSwitch} top-[379px] left-[14px]`}
                onClick={() =>
                  udp("SendAndReturn", `MFD_${mfd}_BRT_SW`, "0", "1")
                }
              />
              {}
              <button
                className={`${mfdSwitch} top-[8px] left-[366px]`}
                onClick={() =>
                  udp("SendAndReturn", `MFD_${mfd}_SYM_SW`, "2", "1")
                }
              />
              <button
                className={`${mfdSwitch} top-[48px] left-[366px]`}
                onClick={() =>
                  udp("SendAndReturn", `MFD_${mfd}_SYM_SW`, "0", "1")
                }
              />
              {}
              <button
                className={`${mfdSwitch} top-[337px] left-[366px]`}
                onClick={() =>
                  udp("SendAndReturn", `MFD_${mfd}_CON_SW`, "2", "1")
                }
              />
              <button
                className={`${mfdSwitch} top-[375px] left-[366px]`}
                onClick={() =>
                  udp("SendAndReturn", `MFD_${mfd}_CON_SW`, "0", "1")
                }
              />
            </div>
            <div>
              <button
                className={`${mdfSelect} ml-10 ${
                  mfd === "R" ? "outline-white" : "outline-neutral-400"
                }`}
                onClick={() => setMfd("R")}
              >
                Right
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
