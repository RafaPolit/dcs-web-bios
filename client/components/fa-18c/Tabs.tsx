import { Tabs, tabClass, tabClassCurrent } from "../Tabs";

type TabsProps = {
  pane: string;
  setPane: (pane: string) => void;
};

const ModuleTabs = ({ pane, setPane }: TabsProps) => {
  return (
    <Tabs module="F/A-18C Hornet" setPane={setPane}>
      <li>
        <button
          className={pane === "ufc" ? tabClassCurrent : tabClass}
          onClick={() => setPane("ufc")}
        >
          UFC
        </button>
      </li>
      <li>
        <button
          className={pane === "ddis" ? tabClassCurrent : tabClass}
          onClick={() => setPane("ddis")}
        >
          DDIs
        </button>
      </li>
    </Tabs>
  );
};

export { ModuleTabs as Tabs };
