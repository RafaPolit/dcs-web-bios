import { Tabs, tabClass, tabClassCurrent } from "../Tabs";

type TabsProps = {
  pane: string;
  setPane: (pane: string) => void;
};

const ModuleTabs = ({ pane, setPane }: TabsProps) => {
  return (
    <Tabs module="SU-25 Frogfoot" setPane={setPane}>
      <li>
        <button
          className={pane === "modes" ? tabClassCurrent : tabClass}
          onClick={() => setPane("modes")}
        >
          Modes
        </button>
      </li>
    </Tabs>
  );
};

export { ModuleTabs as Tabs };
