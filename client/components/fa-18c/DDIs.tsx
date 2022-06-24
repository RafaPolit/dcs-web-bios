import { DDI } from "./DDI";

const DDIs = () => {
  return (
    <div className="flex gap-x-1 lg:gap-x-12 place-content-center items-center">
      <DDI side="LEFT" />
      <DDI side="RIGHT" />
    </div>
  );
};

export { DDIs };
