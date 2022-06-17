import Link from "next/link";
import { GiAirplane, GiCog } from "react-icons/gi";

type TabsProps = {
  pane: string;
  setPane: (pane: string) => void;
  children: JSX.Element | JSX.Element[];
};

const homeClass = "inline-block text-4xl mx-2 px-4 pt-1";
const tabClass =
  "inline-block font-semibold px-6 py-3 rounded-t-lg hover:text-neutral-600 hover:bg-gray-50";
const tabClassCurrent =
  "inline-block font-semibold px-6 py-3 bg-gray-600 rounded-t-lg active";

const Tabs = ({ pane, setPane, children }: TabsProps) => {
  return (
    <div>
      <ul className="flex flex-wrap text-md font-medium text-center text-neutral-200 pt-1 px-2 mb-1 bg-gray-800">
        <li>
          <Link href="/">
            <a className={homeClass}>
              <GiAirplane />
            </a>
          </Link>
        </li>
        {children}
      </ul>
      <button
        className="absolute p-3 top-0 right-0 text-2xl"
        onClick={() => setPane("settings")}
      >
        <GiCog />
      </button>
    </div>
  );
};

export { Tabs, tabClass, tabClassCurrent };
