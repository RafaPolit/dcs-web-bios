import Image from "next/image";
import { udp } from "../../scripts/udp";
import { AMPCD_BRT } from "./AMPCD_BRT";

const mfdButton = "absolute w-[31px] h-[31px] rounded*lg";
const topKnob =
  "absolute w-[40px] h-[30px] rounded-lg bg-orange-800 opacity-25";
const arrowSwitch = "absolute w-[25px] h-[25px] rounded-lg";

const AMPCD = () => {
  return (
    <div className="flex gap-x-1 lg:gap-x-12 place-content-center items-center">
      <div className="relative w-[388px] h-[400px] min-w-[388px]">
        <Image
          src="/fa-18c/fa18c-AMPCD.png"
          alt="F/A-18C Hornet - AMPCD"
          layout="fill"
          className="rounded-lg"
        />
        <AMPCD_BRT />
        {/* -------------------------------- */}
        <button
          className={`${mfdButton} left-[4.5%] top-[75%]`}
          onClick={() => udp("Toggle", `AMPCD_PB_01`)}
        />
        <button
          className={`${mfdButton} left-[4.5%] top-[64.3%]`}
          onClick={() => udp("Toggle", `AMPCD_PB_02`)}
        />
        <button
          className={`${mfdButton} left-[4.5%] top-[53.7%]`}
          onClick={() => udp("Toggle", `AMPCD_PB_03`)}
        />
        <button
          className={`${mfdButton} left-[4.5%] top-[43.3%]`}
          onClick={() => udp("Toggle", `AMPCD_PB_04`)}
        />
        <button
          className={`${mfdButton} left-[4.5%] top-[32.5%]`}
          onClick={() => udp("Toggle", `AMPCD_PB_05`)}
        />
        {/* -------------------------------- */}
        <button
          className={`${mfdButton} left-[24%] top-[55px]`}
          onClick={() => udp("Toggle", `AMPCD_PB_06`)}
        />
        <button
          className={`${mfdButton} left-[35%] top-[55px]`}
          onClick={() => udp("Toggle", `AMPCD_PB_07`)}
        />
        <button
          className={`${mfdButton} left-[46.5%] top-[55px]`}
          onClick={() => udp("Toggle", `AMPCD_PB_08`)}
        />
        <button
          className={`${mfdButton} left-[57.5%] top-[55px]`}
          onClick={() => udp("Toggle", `AMPCD_PB_09`)}
        />
        <button
          className={`${mfdButton} left-[68.5%] top-[55px]`}
          onClick={() => udp("Toggle", `AMPCD_PB_10`)}
        />
        {/* -------------------------------- */}
        <button
          className={`${mfdButton} left-[88%] top-[32.5%]`}
          onClick={() => udp("Toggle", `AMPCD_PB_11`)}
        />
        <button
          className={`${mfdButton} left-[88%] top-[43.3%]`}
          onClick={() => udp("Toggle", `AMPCD_PB_12`)}
        />
        <button
          className={`${mfdButton} left-[88%] top-[53.7%]`}
          onClick={() => udp("Toggle", `AMPCD_PB_13`)}
        />
        <button
          className={`${mfdButton} left-[88%] top-[64.3%]`}
          onClick={() => udp("Toggle", `AMPCD_PB_14`)}
        />
        <button
          className={`${mfdButton} left-[88%] top-[75%]`}
          onClick={() => udp("Toggle", `AMPCD_PB_15`)}
        />
        {/* -------------------------------- */}
        <button
          className={`${mfdButton} left-[68.5%] top-[91.5%]`}
          onClick={() => udp("Toggle", `AMPCD_PB_16`)}
        />
        <button
          className={`${mfdButton} left-[57.4%] top-[91.5%]`}
          onClick={() => udp("Toggle", `AMPCD_PB_17`)}
        />
        <button
          className={`${mfdButton} left-[46.5%] top-[91.5%]`}
          onClick={() => udp("Toggle", `AMPCD_PB_18`)}
        />
        <button
          className={`${mfdButton} left-[35%] top-[91.5%]`}
          onClick={() => udp("Toggle", `AMPCD_PB_19`)}
        />
        <button
          className={`${mfdButton} left-[24%] top-[91.5%]`}
          onClick={() => udp("Toggle", `AMPCD_PB_20`)}
        />
        {/* -------------------------------- */}
        <button
          className={`${topKnob} right-[51%] top-[15px]`}
          onClick={() => udp("Send", "AMPCD_BRT_CTL -3276")}
        />
        <button
          className={`${topKnob} left-[51%] top-[15px]`}
          onClick={() => udp("Send", `AMPCD_BRT_CTL +3276`)}
        />
        {/* -------------------------------- */}
        <div
          className="absolute left-[59px] top-[35px] w-[25px] h-[51px]"
          style={{ transform: `rotate(0.14turn)` }}
        >
          <button
            className={`${arrowSwitch} left-0 top-0`}
            onClick={() => udp("SendAndReturn", `AMPCD_NIGHT_DAY`, "0", "1")}
          />
          <button
            className={`${arrowSwitch} left-0 top-[26px]`}
            onClick={() => udp("SendAndReturn", `AMPCD_NIGHT_DAY`, "2", "1")}
          />
        </div>
        {/* -------------------------------- */}
        <div
          className="absolute right-[58px] top-[35px] w-[25px] h-[51px]"
          style={{ transform: `rotate(-0.14turn)` }}
        >
          <button
            className={`${arrowSwitch} left-0 top-0`}
            onClick={() => udp("SendAndReturn", `AMPCD_SYM_SW`, "0", "1")}
          />
          <button
            className={`${arrowSwitch} left-0 top-[26px]`}
            onClick={() => udp("SendAndReturn", `AMPCD_SYM_SW`, "2", "1")}
          />
        </div>
        {/* -------------------------------- */}
        <button
          className={`${arrowSwitch} left-[21px] bottom-[11px]`}
          onClick={() => udp("SendAndReturn", `AMPCD_GAIN_SW`, "0", "1")}
        />
        <button
          className={`${arrowSwitch} left-[21px] bottom-[37px]`}
          onClick={() => udp("SendAndReturn", `AMPCD_GAIN_SW`, "2", "1")}
        />
        {/* -------------------------------- */}
        <button
          className={`${arrowSwitch} right-[21px] bottom-[11px]`}
          onClick={() => udp("SendAndReturn", `AMPCD_CONT_SW`, "0", "1")}
        />
        <button
          className={`${arrowSwitch} right-[21px] bottom-[37px]`}
          onClick={() => udp("SendAndReturn", `AMPCD_CONT_SW`, "2", "1")}
        />
      </div>
    </div>
  );
};

export { AMPCD };
