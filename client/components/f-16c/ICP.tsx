import React from "react";
import Image from "next/image";
import { udp } from "../../scripts/udp";
import { DED } from "./DED";
import { NightVision } from "./NightVision";

const roundedButton = "absolute top-[19px] w-[56px] h-[56px] rounded-full";
const squareButton = "absolute w-[56px] h-[56px]";
const directionalButton = "absolute w-[40px] h-[43px]";

const ICP = () => {
  return (
    <div className="flex place-content-center space-x-2 items-start">
      <div className="relative w-[551px] h-[412px] min-w-[551px]">
        <Image
          src="/f-16c/f-16c-icp.png"
          alt="F-16C Viper - ICP"
          layout="fill"
          className="rounded-lg"
          priority={true}
        />
        <button
          className={`${roundedButton} left-[55px]`}
          onClick={() => udp("Toggle", "ICP_COM1_BTN")}
        />
        <button
          className={`${roundedButton} left-[133px]`}
          onClick={() => udp("Toggle", "ICP_COM2_BTN")}
        />
        <button
          className={`${roundedButton} left-[211px]`}
          onClick={() => udp("Toggle", "ICP_IFF_BTN")}
        />
        <button
          className={`${roundedButton} left-[289px]`}
          onClick={() => udp("Toggle", "ICP_LIST_BTN")}
        />
        <button
          className={`${roundedButton} left-[366px]`}
          onClick={() => udp("Toggle", "ICP_AA_MODE_BTN")}
        />
        <button
          className={`${roundedButton} left-[443px]`}
          onClick={() => udp("Toggle", "ICP_AG_MODE_BTN")}
        />
        {}
        <button
          className={`${squareButton} top-[94px] left-[77px]`}
          onClick={() => udp("Toggle", "ICP_BTN_1")}
        />
        <button
          className={`${squareButton} top-[94px] left-[152px]`}
          onClick={() => udp("Toggle", "ICP_BTN_2")}
        />
        <button
          className={`${squareButton} top-[94px] left-[226px]`}
          onClick={() => udp("Toggle", "ICP_BTN_3")}
        />
        <button
          className={`${squareButton} top-[169px] left-[77px]`}
          onClick={() => udp("Toggle", "ICP_BTN_4")}
        />
        <button
          className={`${squareButton} top-[169px] left-[152px]`}
          onClick={() => udp("Toggle", "ICP_BTN_5")}
        />
        <button
          className={`${squareButton} top-[169px] left-[226px]`}
          onClick={() => udp("Toggle", "ICP_BTN_6")}
        />
        <button
          className={`${squareButton} top-[242px] left-[77px]`}
          onClick={() => udp("Toggle", "ICP_BTN_7")}
        />
        <button
          className={`${squareButton} top-[242px] left-[152px]`}
          onClick={() => udp("Toggle", "ICP_BTN_8")}
        />
        <button
          className={`${squareButton} top-[242px] left-[226px]`}
          onClick={() => udp("Toggle", "ICP_BTN_9")}
        />
        <button
          className={`${squareButton} top-[242px] left-[296px]`}
          onClick={() => udp("Toggle", "ICP_BTN_0")}
        />
        {}
        <button
          className={`${squareButton} top-[94px] left-[320px]`}
          onClick={() => udp("Toggle", "ICP_RCL_BTN")}
        />
        <button
          className={`${squareButton} top-[169px] left-[320px]`}
          onClick={() => udp("Toggle", "ICP_ENTR_BTN")}
        />
        {}
        <button
          className={`${directionalButton} top-[313px] left-[87px]`}
          onClick={() => udp("SendAndReturn", "ICP_DED_SW", "2", "1")}
        />
        <button
          className={`${directionalButton} top-[357px] left-[87px]`}
          onClick={() => udp("SendAndReturn", "ICP_DED_SW", "0", "1")}
        />
        {}
        <button
          className={`${directionalButton} top-[305px] left-[198px]`}
          onClick={() => udp("SendAndReturn", "ICP_DATA_UP_DN_SW", "2", "1")}
        />
        <button
          className={`${directionalButton} top-[357px] left-[198px]`}
          onClick={() => udp("SendAndReturn", "ICP_DATA_UP_DN_SW", "0", "1")}
        />
        <button
          className={`${directionalButton} top-[327px] left-[154px]`}
          onClick={() => udp("SendAndReturn", "ICP_DATA_RTN_SEQ_SW", "0", "1")}
        />
        <button
          className={`${directionalButton} top-[327px] left-[243px]`}
          onClick={() => udp("SendAndReturn", "ICP_DATA_RTN_SEQ_SW", "2", "1")}
        />
        <button
          className={`${directionalButton} top-[178px] left-[433px]`}
          onClick={() => udp("Set", `LoSetCommand 840`)}
        />
        <button
          className={`${directionalButton} top-[222px] left-[433px]`}
          onClick={() => udp("Set", `LoSetCommand 841`)}
        />
      </div>
      <div className="flex flex-col gap-y-12 w-[224px]">
        <DED />
        <NightVision />
      </div>
    </div>
  );
};

export { ICP };
