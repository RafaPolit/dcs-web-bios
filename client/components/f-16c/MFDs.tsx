import { MFD } from "./MFD";

const mfdSelect =
  "px-4 py-2 bg-neutral-500 rounded-lg outline outline-offset-4 outline-1";

const MFDs = () => {
  return (
    <div className="flex gap-x-1 lg:gap-x-12 place-content-center items-center">
      <MFD side="L" />
      <MFD side="R" />
    </div>
  );
};

export { MFDs };
