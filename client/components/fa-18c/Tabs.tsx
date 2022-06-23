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
          className={pane === "ufc" ? tabClassCurrent : tabClass}
          onClick={() => setPane("ufc")}
        >
          UFC
        </button>
      </li>
    </Tabs>
  );
};

export { ModuleTabs as Tabs };