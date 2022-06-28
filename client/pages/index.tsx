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
        <div className="grid grid-cols-4 lg:grid-cols-6 gap-4">
          <Link href="/f-14b">
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
          <Link href="/fa-18c">
            <a className="text-center rounded-lg bg-gray-600 p-2">
              <div>
                <Image
                  src="/modules/DCS-F-18C_700x1000_v2.jpg"
                  alt="F/A-18C Hornet"
                  layout="responsive"
                  width="700"
                  height="1000"
                />
                <h3 className="font-bold">F/A-18C Hornet</h3>
              </div>
            </a>
          </Link>
          <Link href="/ah-64d">
            <a className="text-center rounded-lg bg-gray-600 p-2">
              <div>
                <Image
                  src="/modules/ah64d-helicopter-flight-simulator.jpg"
                  alt="AH-64D Apache"
                  layout="responsive"
                  width="350"
                  height="500"
                />
                <h3 className="font-bold">AH-64D Apache</h3>
              </div>
            </a>
          </Link>
          <Link href="/fc3">
            <a className="text-center rounded-lg bg-gray-600 p-2">
              <div>
                <Image
                  src="/modules/DCS_FC3_cover-2014_eng.jpg"
                  alt="Flaming Cliffs 3"
                  layout="responsive"
                  width="350"
                  height="490"
                />
                <h3 className="font-bold">AH-64D Apache</h3>
              </div>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
