import { Tabs, tabClass, tabClassCurrent } from "../Tabs";

type TabsProps = {
  pane: string;
  setPane: (pane: string) => void;
};

const ModuleTabs = ({ pane, setPane }: TabsProps) => {
  return (
    <Tabs module="F-14 Tomcat" setPane={setPane}>
      <li>
        <button
          className={pane === "displays" ? tabClassCurrent : tabClass}
          onClick={() => setPane("displays")}
        >
          Displays &amp; AP
        </button>
      </li>
    </Tabs>
  );
};

export { ModuleTabs as Tabs };
