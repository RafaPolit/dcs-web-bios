import Head from "next/head";

interface HeadProps {
  children: string;
}

const HeadWrapper = ({ children }: HeadProps) => {
  return (
    <Head>
      <title>{children}</title>
      <meta name="description" content="DCS Web bios" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export { HeadWrapper as Head };
