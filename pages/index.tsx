import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-800 text-white min-h-screen">
      <Head>
        <title>DCS Web Bios</title>
        <meta name="description" content="DCS Web bios" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-3">
        <div className="grid grid-cols-4 lg:grid-cols-8 gap-4">
          <Link href="/bf-109k-4">
            <a className="text-center rounded-lg bg-gray-600 p-2">
              <div>
                <Image
                  src="/modules/Bf-109-DVD-cover_700x1000px.jpg"
                  alt="Bf 109 K-4 Kurfurst"
                  layout="responsive"
                  width="700"
                  height="1000"
                />
                <h3 className="font-bold">Bf 109 K-4 Kurfurst</h3>
              </div>
            </a>
          </Link>
          <Link href="/f-16c">
            <a className="text-center rounded-lg bg-gray-600 p-2">
              <div>
                <Image
                  src="/modules/DCS_F-16C_700x1000_v3-1.jpg"
                  alt="F-16C Viper"
                  layout="responsive"
                  width="700"
                  height="1000"
                />
                <h3 className="font-bold">F-16C Viper</h3>
              </div>
            </a>
          </Link>
          <Link href="/f-14">
            <a className="text-center rounded-lg bg-gray-600 p-2">
              <div>
                <Image
                  src="/modules/F14.jpg"
                  alt="F-14 Tomcat"
                  layout="responsive"
                  width="700"
                  height="1000"
                />
                <h3 className="font-bold">F-14 Tomcat</h3>
              </div>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
