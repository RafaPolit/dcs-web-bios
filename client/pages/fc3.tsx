import type { NextPage } from "next";
import Image from "next/future/image";
import Link from "next/link";
import { Layout } from "../components/PageLayout";

const item = "flex text-center rounded-lg bg-gray-600 p-2";

const FC3: NextPage = () => {
  return (
    <Layout title="DCS Web Bios">
      <div className="grid grid-cols-4 lg:grid-cols-6 p-3 gap-4">
        <Link href="/a-10a" className={item}>
          <Image
            src="/modules/A-10A-DVD-cover.jpg"
            alt="A-10A Warthog"
            width="350"
            height="493"
          />
        </Link>
        <Link href="/su-25" className={item}>
          <Image
            src="/modules/DCS-Su-25-DVD-cover.jpg"
            alt="SU-25 Frogfoot"
            width="700"
            height="1000"
          />
        </Link>
        <Link href="/f-15c" className={item}>
          <Image
            src="/modules/F-15C-DVD-cover-eng_700x1000px.jpg"
            alt="F-15C Eagle"
            width="700"
            height="1000"
          />
        </Link>
        <Link href="/mig-29" className={item}>
          <Image
            src="/modules/DCS_MiG-29_700x1000_v1.jpg"
            alt="MiG-29 Fulcrum"
            width="350"
            height="500"
          />
        </Link>
      </div>
    </Layout>
  );
};

export default FC3;
