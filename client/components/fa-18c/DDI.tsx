import Image from "next/image";
import { udp } from "../../scripts/udp";
import { BRTImages } from "./BRTImages";

type DDIProps = {
  side: string;
};

const mfdButton = "absolute w-[34px] h-[34px]";
const topKnob =
  "absolute w-[40px] h-[30px] rounded-lg bg-orange-800 opacity-25";
const knob = "absolute w-[25px] h-[40px] rounded-lg bg-orange-800 opacity-25";

const DDI = ({ side }: DDIProps) => {
  return (
    <div className="relative w-[388px] h-[400px] min-w-[388px]">
      <Image
        src="/fa-18c/fa18c-DDI.png"
        alt="F/A-18C Hornet - DDI"
        layout="fill"
        className="rounded-lg"
      />
      <BRTImages side={side} />
      <span className="absolute left-1/2 top-[55%] -translate-x-[50%] -translate-y-[50%]">
        {side}
      </span>
      {/* -------------------------------- */}
      <button
        className={`${mfdButton} left-[2.8%] top-[75.3%]`}
        onClick={() => udp("Toggle", `${side}_DDI_PB_01`)}
      />
      <button
        className={`${mfdButton} left-[2.65%] top-[63.5%]`}
        onClick={() => udp("Toggle", `${side}_DDI_PB_02`)}
      />
      <button
        className={`${mfdButton} left-[2.5%] top-[52%]`}
        onClick={() => udp("Toggle", `${side}_DDI_PB_03`)}
      />
      <button
        className={`${mfdButton} left-[2.35%] top-[40%]`}
        onClick={() => udp("Toggle", `${side}_DDI_PB_04`)}
      />
      <button
        className={`${mfdButton} left-[2.2%] top-[28%]`}
        onClick={() => udp("Toggle", `${side}_DDI_PB_05`)}
      />
      {/* -------------------------------- */}
      <button
        className={`${mfdButton} left-[22%] top-[37px]`}
        onClick={() => udp("Toggle", `${side}_DDI_PB_06`)}
      />
      <button
        className={`${mfdButton} left-[33.5%] top-[37px]`}
        onClick={() => udp("Toggle", `${side}_DDI_PB_07`)}
      />
      <button
        className={`${mfdButton} left-[45.32%] top-[37px]`}
        onClick={() => udp("Toggle", `${side}_DDI_PB_08`)}
      />
      <button
        className={`${mfdButton} left-[57.5%] top-[37px]`}
        onClick={() => udp("Toggle", `${side}_DDI_PB_09`)}
      />
      <button
        className={`${mfdButton} left-[69.5%] top-[37px]`}
        onClick={() => udp("Toggle", `${side}_DDI_PB_10`)}
      />
      {/* -------------------------------- */}
      <button
        className={`${mfdButton} left-[89%] top-[28%]`}
        onClick={() => udp("Toggle", `${side}_DDI_PB_11`)}
      />
      <button
        className={`${mfdButton} left-[88.9%] top-[40%]`}
        onClick={() => udp("Toggle", `${side}_DDI_PB_12`)}
      />
      <button
        className={`${mfdButton} left-[88.8%] top-[52%]`}
        onClick={() => udp("Toggle", `${side}_DDI_PB_13`)}
      />
      <button
        className={`${mfdButton} left-[88.6%] top-[63.5%]`}
        onClick={() => udp("Toggle", `${side}_DDI_PB_14`)}
      />
      <button
        className={`${mfdButton} left-[88.5%] top-[75.3%]`}
        onClick={() => udp("Toggle", `${side}_DDI_PB_15`)}
      />
      {/* -------------------------------- */}
      <button
        className={`${mfdButton} left-[69.16%] top-[91%]`}
        onClick={() => udp("Toggle", `${side}_DDI_PB_16`)}
      />
      <button
        className={`${mfdButton} left-[57.4%] top-[91%]`}
        onClick={() => udp("Toggle", `${side}_DDI_PB_17`)}
      />
      <button
        className={`${mfdButton} left-[45.8%] top-[91%]`}
        onClick={() => udp("Toggle", `${side}_DDI_PB_18`)}
      />
      <button
        className={`${mfdButton} left-[34.3%] top-[91%]`}
        onClick={() => udp("Toggle", `${side}_DDI_PB_19`)}
      />
      <button
        className={`${mfdButton} left-[22.5%] top-[91%]`}
        onClick={() => udp("Toggle", `${side}_DDI_PB_20`)}
      />
      {/* -------------------------------- */}
      <button
        className={`${topKnob} right-[51%] top-[0px]`}
        onClick={() => udp("Send", `${side}_DDI_BRT_SELECT DEC`)}
      />
      <button
        className={`${topKnob} left-[51%] top-[0px]`}
        onClick={() => udp("Send", `${side}_DDI_BRT_SELECT INC`)}
      />
      {/* -------------------------------- */}
      <button
        className={`${knob} left-[7px] bottom-[4px]`}
        onClick={() => udp("Send", `${side}_DDI_BRT_CTL +6400`)}
      />
      <button
        className={`${knob} left-[37px] bottom-[4px]`}
        onClick={() => udp("Send", `${side}_DDI_BRT_CTL -6400`)}
      />
      {/* -------------------------------- */}
      <button
        className={`${knob} right-[7px] bottom-[4px]`}
        onClick={() => udp("Send", `${side}_DDI_CONT_CTL +6400`)}
      />
      <button
        className={`${knob} right-[37px] bottom-[4px]`}
        onClick={() => udp("Send", `${side}_DDI_CONT_CTL -6400`)}
      />
    </div>
  );
};

export { DDI };
