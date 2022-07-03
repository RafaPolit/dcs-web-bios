import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/future/image";
import { Layout } from "../components/PageLayout";

const item = "flex text-center rounded-lg bg-gray-600 p-2";

const Home: NextPage = () => {
  return (
    <Layout title="DCS Web Bios">
      <div className="grid grid-cols-4 lg:grid-cols-6 p-3 gap-4">
        <Link href="/f-14b" className={item}>
          <Image
            src="/modules/F14.jpg"
            alt="F-14 Tomcat"
            width="700"
            height="1000"
            priority
          />
        </Link>
        <Link href="/f-16c" className={item}>
          <Image
            src="/modules/DCS_F-16C_700x1000_v3-1.jpg"
            alt="F-16C Viper"
            width="700"
            height="1000"
          />
        </Link>
        <Link href="/fa-18c" className={item}>
          <Image
            src="/modules/DCS-F-18C_700x1000_v2.jpg"
            alt="F/A-18C Hornet"
            width="700"
            height="1000"
          />
        </Link>
        <Link href="/ah-64d" className={item}>
          <Image
            src="/modules/ah64d-helicopter-flight-simulator.jpg"
            alt="AH-64D Apache"
            width="350"
            height="500"
          />
        </Link>
        <Link href="/fc3" className={item}>
          <Image
            src="/modules/DCS_FC3_cover-2014_eng.jpg"
            alt="Flaming Cliffs 3"
            width="350"
            height="490"
          />
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
