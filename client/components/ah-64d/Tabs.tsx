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
          className={pane === "plt-keyboard" ? tabClassCurrent : tabClass}
          onClick={() => setPane("plt-keyboard")}
        >
          PLT Keyb.
        </button>
      </li>
      <li>
        <button
          className={pane === "cpg-keyboard" ? tabClassCurrent : tabClass}
          onClick={() => setPane("cpg-keyboard")}
        >
          CPG Keyb.
        </button>
      </li>
    </Tabs>
  );
};

export { ModuleTabs as Tabs };
