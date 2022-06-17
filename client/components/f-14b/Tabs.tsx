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
          className={pane === "displays" ? tabClassCurrent : tabClass}
          onClick={() => setPane("displays")}
        >
          Displays
        </button>
      </li>
    </Tabs>
  );
};

export { ModuleTabs as Tabs };
