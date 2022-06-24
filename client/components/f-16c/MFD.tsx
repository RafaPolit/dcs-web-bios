import Image from "next/image";
import { udp } from "../../scripts/udp";

type MFDProps = {
  side: string;
};

const mfdButton = "absolute w-[34px] h-[34px] lg:w-[36px] lg:h-[36px]";
const mfdSwitch = "absolute w-[48px] h-[34px] lg:w-[52px] lg:h-[36px]";

const MFD = ({ side }: MFDProps) => {
  return (
    <div className="relative w-[390px] h-[383px] lg:w-[428px] lg:h-[420px] min-w-[386px]">
      <Image
        src="/f-16c/f-16c-mfd.png"
        alt="F-16C Viper - ICP"
        layout="fill"
        className="rounded-lg"
      />
      <span className="absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]">
        {side === "L" ? "LEFT" : "RIGHT"}
      </span>
      <button
        className={`${mfdButton} top-[2.38%] left-[22.43%]`}
        onClick={() => udp("Toggle", `MFD_${side}_1`)}
      />
      <button
        className={`${mfdButton} top-[2.38%] left-[33.64%]`}
        onClick={() => udp("Toggle", `MFD_${side}_2`)}
      />
      <button
        className={`${mfdButton} top-[2.38%] left-[45.32%]`}
        onClick={() => udp("Toggle", `MFD_${side}_3`)}
      />
      <button
        className={`${mfdButton} top-[2.38%] left-[57.24%]`}
        onClick={() => udp("Toggle", `MFD_${side}_4`)}
      />
      <button
        className={`${mfdButton} top-[2.38%] left-[68.69%]`}
        onClick={() => udp("Toggle", `MFD_${side}_5`)}
      />
      {}
      <button
        className={`${mfdButton} top-[21.90%] left-[88.78%]`}
        onClick={() => udp("Toggle", `MFD_${side}_6`)}
      />
      <button
        className={`${mfdButton} top-[33.81%] left-[88.78%]`}
        onClick={() => udp("Toggle", `MFD_${side}_7`)}
      />
      <button
        className={`${mfdButton} top-[45.47%] left-[88.78%]`}
        onClick={() => udp("Toggle", `MFD_${side}_8`)}
      />
      <button
        className={`${mfdButton} top-[57.14%] left-[88.78%]`}
        onClick={() => udp("Toggle", `MFD_${side}_9`)}
      />
      <button
        className={`${mfdButton} top-[69.04%] left-[88.78%]`}
        onClick={() => udp("Toggle", `MFD_${side}_10`)}
      />
      {}
      <button
        className={`${mfdButton} top-[89.52%] left-[23.36%]`}
        onClick={() => udp("Toggle", `MFD_${side}_15`)}
      />
      <button
        className={`${mfdButton} top-[89.52%] left-[34.58%]`}
        onClick={() => udp("Toggle", `MFD_${side}_14`)}
      />
      <button
        className={`${mfdButton} top-[89.29%] left-[46.26%]`}
        onClick={() => udp("Toggle", `MFD_${side}_13`)}
      />
      <button
        className={`${mfdButton} top-[89.29%] left-[57.94%]`}
        onClick={() => udp("Toggle", `MFD_${side}_12`)}
      />
      <button
        className={`${mfdButton} top-[89.05%] left-[69.16%]`}
        onClick={() => udp("Toggle", `MFD_${side}_11`)}
      />
      {}
      <button
        className={`${mfdButton} top-[23.1%] left-[2.8%]`}
        onClick={() => udp("Toggle", `MFD_${side}_20`)}
      />
      <button
        className={`${mfdButton} top-[34.52%] left-[3.04%]`}
        onClick={() => udp("Toggle", `MFD_${side}_19`)}
      />
      <button
        className={`${mfdButton} top-[46.43%] left-[3.04%]`}
        onClick={() => udp("Toggle", `MFD_${side}_18`)}
      />
      <button
        className={`${mfdButton} top-[58.33%] left-[3.27%]`}
        onClick={() => udp("Toggle", `MFD_${side}_17`)}
      />
      <button
        className={`${mfdButton} top-[70%] left-[3.27%]`}
        onClick={() => udp("Toggle", `MFD_${side}_16`)}
      />
      {}
      <button
        className={`${mfdSwitch} top-[1.9%] left-[3.27%]`}
        onClick={() => udp("SendAndReturn", `MFD_${side}_GAIN_SW`, "2", "1")}
      />
      <button
        className={`${mfdSwitch} top-[11.43%] left-[3.27%]`}
        onClick={() => udp("SendAndReturn", `MFD_${side}_GAIN_SW`, "0", "1")}
      />
      {}
      <button
        className={`${mfdSwitch} top-[80.95%] left-[3.27%]`}
        onClick={() => udp("SendAndReturn", `MFD_${side}_BRT_SW`, "2", "1")}
      />
      <button
        className={`${mfdSwitch} top-[90.24%] left-[3.27%]`}
        onClick={() => udp("SendAndReturn", `MFD_${side}_BRT_SW`, "0", "1")}
      />
      {}
      <button
        className={`${mfdSwitch} top-[1.9%] left-[85.51%]`}
        onClick={() => udp("SendAndReturn", `MFD_${side}_SYM_SW`, "2", "1")}
      />
      <button
        className={`${mfdSwitch} top-[11.43%] left-[85.51%]`}
        onClick={() => udp("SendAndReturn", `MFD_${side}_SYM_SW`, "0", "1")}
      />
      {}
      <button
        className={`${mfdSwitch} top-[80.24%] left-[85.51%]`}
        onClick={() => udp("SendAndReturn", `MFD_${side}_CON_SW`, "2", "1")}
      />
      <button
        className={`${mfdSwitch} top-[89.28%] left-[85.51%]`}
        onClick={() => udp("SendAndReturn", `MFD_${side}_CON_SW`, "0", "1")}
      />
    </div>
  );
};

export { MFD };
