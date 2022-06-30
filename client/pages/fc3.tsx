import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "../components/PageLayout";

const item = "text-center rounded-lg bg-gray-600 p-2";

const FC3: NextPage = () => {
  return (
    <Layout title="DCS Web Bios">
      <div className="grid grid-cols-4 lg:grid-cols-6 p-3 gap-4">
        <Link href="/f-15c" className={item}>
          <Image
            src="/modules/F-15C-DVD-cover-eng_700x1000px.jpg"
            alt="F-15C Eagle"
            layout="responsive"
            width="700"
            height="1000"
          />
        </Link>
        <Link href="/su-25" className={item}>
          <Image
            src="/modules/DCS-Su-25-DVD-cover.jpg"
            alt="SU-25 Frogfoot"
            layout="responsive"
            width="700"
            height="1000"
          />
        </Link>
      </div>
    </Layout>
  );
};

export default FC3;
