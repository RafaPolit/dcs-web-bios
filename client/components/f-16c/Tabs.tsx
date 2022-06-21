import { Tabs, tabClass, tabClassCurrent } from "../Tabs";

type TabsProps = {
  pane: string;
  setPane: (pane: string) => void;
};

const ModuleTabs = ({ pane, setPane }: TabsProps) => {
  return (
    <Tabs pane={pane} setPane={setPane}>
      <li>
        <button
          className={pane === "icp" ? tabClassCurrent : tabClass}
          onClick={() => setPane("icp")}
        >
          ICP
        </button>
      </li>
      <li>
        <button
          className={pane === "mfds" ? tabClassCurrent : tabClass}
          onClick={() => setPane("mfds")}
        >
          MFDs
        </button>
      </li>
    </Tabs>
  );
};

export { ModuleTabs as Tabs };