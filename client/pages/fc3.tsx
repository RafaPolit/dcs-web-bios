import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const FC3: NextPage = () => {
  return (
    <div className="bg-gray-800 text-white min-h-screen">
      <Head>
        <title>FC3</title>
        <meta name="description" content="FC3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-3">
        <div className="grid grid-cols-4 lg:grid-cols-6 gap-4">
          <Link href="/f-15c">
            <a className="text-center rounded-lg bg-gray-600 p-2">
              <div>
                <Image
                  src="/modules/F-15C-DVD-cover-eng_700x1000px.jpg"
                  alt="F-15C Eagle"
                  layout="responsive"
                  width="700"
                  height="1000"
                />
                <h3 className="font-bold">F-15C Eagle</h3>
              </div>
            </a>
          </Link>
          <Link href="/su-25">
            <a className="text-center rounded-lg bg-gray-600 p-2">
              <div>
                <Image
                  src="/modules/DCS-Su-25-DVD-cover.jpg"
                  alt="SU-25 Frogfoot"
                  layout="responsive"
                  width="700"
                  height="1000"
                />
                <h3 className="font-bold">SU-25 Frogfoot</h3>
              </div>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default FC3;
