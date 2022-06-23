import { MFD } from "./MFD";

const MFDs = () => {
  return (
    <div className="flex gap-x-1 lg:gap-x-12 place-content-center items-center">
      <MFD side="L" />
      <MFD side="R" />
    </div>
  );
};

export { MFDs };
