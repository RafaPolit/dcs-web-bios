import { Head } from "./Head";

interface LayoutProps {
  title: string;
  children: (boolean | JSX.Element) | (boolean | JSX.Element)[];
}

const bgClass = "bg-gray-800";

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <div className={`${bgClass} text-white min-h-screen`}>
      <Head>{title}</Head>
      <main>{children}</main>
    </div>
  );
};

export { Layout, bgClass };
