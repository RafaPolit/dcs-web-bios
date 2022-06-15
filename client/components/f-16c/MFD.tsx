import Image from "next/image";
import { udp } from "../../scripts/udp";

type MDFProps = {
  side: string;
};

const mfdButton = "absolute w-[36px] h-[36px]";
const mfdSwitch = "absolute w-[52px] h-[36px]";

const MFD = ({ side }: MDFProps) => {
  return (
    <div className="relative w-[428px] h-[420px] min-w-[428px]">
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
        className={`${mfdButton} top-[10px] left-[96px]`}
        onClick={() => udp("Toggle", `MFD_${side}_1`)}
      />
      <button
        className={`${mfdButton} top-[10px] left-[144px]`}
        onClick={() => udp("Toggle", `MFD_${side}_2`)}
      />
      <button
        className={`${mfdButton} top-[10px] left-[194px]`}
        onClick={() => udp("Toggle", `MFD_${side}_3`)}
      />
      <button
        className={`${mfdButton} top-[10px] left-[245px]`}
        onClick={() => udp("Toggle", `MFD_${side}_4`)}
      />
      <button
        className={`${mfdButton} top-[10px] left-[294px]`}
        onClick={() => udp("Toggle", `MFD_${side}_5`)}
      />
      {}
      <button
        className={`${mfdButton} top-[92px] left-[380px]`}
        onClick={() => udp("Toggle", `MFD_${side}_6`)}
      />
      <button
        className={`${mfdButton} top-[142px] left-[380px]`}
        onClick={() => udp("Toggle", `MFD_${side}_7`)}
      />
      <button
        className={`${mfdButton} top-[191px] left-[380px]`}
        onClick={() => udp("Toggle", `MFD_${side}_8`)}
      />
      <button
        className={`${mfdButton} top-[240px] left-[380px]`}
        onClick={() => udp("Toggle", `MFD_${side}_9`)}
      />
      <button
        className={`${mfdButton} top-[290px] left-[380px]`}
        onClick={() => udp("Toggle", `MFD_${side}_10`)}
      />
      {}
      <button
        className={`${mfdButton} top-[376px] left-[100px]`}
        onClick={() => udp("Toggle", `MFD_${side}_15`)}
      />
      <button
        className={`${mfdButton} top-[376px] left-[148px]`}
        onClick={() => udp("Toggle", `MFD_${side}_14`)}
      />
      <button
        className={`${mfdButton} top-[375px] left-[198px]`}
        onClick={() => udp("Toggle", `MFD_${side}_13`)}
      />
      <button
        className={`${mfdButton} top-[375px] left-[248px]`}
        onClick={() => udp("Toggle", `MFD_${side}_12`)}
      />
      <button
        className={`${mfdButton} top-[374px] left-[296px]`}
        onClick={() => udp("Toggle", `MFD_${side}_11`)}
      />
      {}
      <button
        className={`${mfdButton} top-[97px] left-[12px]`}
        onClick={() => udp("Toggle", `MFD_${side}_20`)}
      />
      <button
        className={`${mfdButton} top-[145px] left-[13px]`}
        onClick={() => udp("Toggle", `MFD_${side}_19`)}
      />
      <button
        className={`${mfdButton} top-[195px] left-[13px]`}
        onClick={() => udp("Toggle", `MFD_${side}_18`)}
      />
      <button
        className={`${mfdButton} top-[245px] left-[14px]`}
        onClick={() => udp("Toggle", `MFD_${side}_17`)}
      />
      <button
        className={`${mfdButton} top-[294px] left-[14px]`}
        onClick={() => udp("Toggle", `MFD_${side}_16`)}
      />
      {}
      <button
        className={`${mfdSwitch} top-[8px] left-[14px]`}
        onClick={() => udp("SendAndReturn", `MFD_${side}_GAIN_SW`, "2", "1")}
      />
      <button
        className={`${mfdSwitch} top-[48px] left-[14px]`}
        onClick={() => udp("SendAndReturn", `MFD_${side}_GAIN_SW`, "0", "1")}
      />
      {}
      <button
        className={`${mfdSwitch} top-[340px] left-[14px]`}
        onClick={() => udp("SendAndReturn", `MFD_${side}_BRT_SW`, "2", "1")}
      />
      <button
        className={`${mfdSwitch} top-[379px] left-[14px]`}
        onClick={() => udp("SendAndReturn", `MFD_${side}_BRT_SW`, "0", "1")}
      />
      {}
      <button
        className={`${mfdSwitch} top-[8px] left-[366px]`}
        onClick={() => udp("SendAndReturn", `MFD_${side}_SYM_SW`, "2", "1")}
      />
      <button
        className={`${mfdSwitch} top-[48px] left-[366px]`}
        onClick={() => udp("SendAndReturn", `MFD_${side}_SYM_SW`, "0", "1")}
      />
      {}
      <button
        className={`${mfdSwitch} top-[337px] left-[366px]`}
        onClick={() => udp("SendAndReturn", `MFD_${side}_CON_SW`, "2", "1")}
      />
      <button
        className={`${mfdSwitch} top-[375px] left-[366px]`}
        onClick={() => udp("SendAndReturn", `MFD_${side}_CON_SW`, "0", "1")}
      />
    </div>
  );
};

export { MFD };
