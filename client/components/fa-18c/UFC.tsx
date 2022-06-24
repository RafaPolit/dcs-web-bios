import React from "react";
import Image from "next/image";
import { udp } from "../../scripts/udp";
import { OptionDisplays } from "./OptionDisplays";
import { CommDisplays } from "./CommDisplays";
import { ScratchpadDisplays } from "./ScratchpadDisplays";
import { ADFImages } from "./ADFImages";

const roundedButton = "absolute w-[33px] h-[33px] rounded-full";
const squareButton = "absolute w-[42px] h-[42px]";
const directionalButton = "absolute w-[40px] h-[30px]";
const knob = "absolute w-[30px] h-[40px] rounded-lg bg-orange-800 opacity-25";

const UFC = () => {
  return (
    <div className="flex place-content-center space-x-2 items-start">
      <div className="relative w-[539px] h-[420px] min-w-[539px]">
        <Image
          src="/fa-18c/fa18c-UFC.png"
          alt="F/A-18C Hornet - UFC"
          layout="fill"
          className="rounded-lg"
          priority={true}
        />
        <ADFImages />
        <OptionDisplays />
        <CommDisplays />
        <ScratchpadDisplays />
        <button
          className={`${squareButton} left-[92px] top-[111px]`}
          onClick={() => udp("Toggle", "UFC_1")}
        />
        <button
          className={`${squareButton} left-[148px] top-[111px]`}
          onClick={() => udp("Toggle", "UFC_2")}
        />
        <button
          className={`${squareButton} left-[204px] top-[111px]`}
          onClick={() => udp("Toggle", "UFC_3")}
        />
        <button
          className={`${squareButton} left-[92px] top-[167px]`}
          onClick={() => udp("Toggle", "UFC_4")}
        />
        <button
          className={`${squareButton} left-[148px] top-[167px]`}
          onClick={() => udp("Toggle", "UFC_5")}
        />
        <button
          className={`${squareButton} left-[204px] top-[167px]`}
          onClick={() => udp("Toggle", "UFC_6")}
        />
        <button
          className={`${squareButton} left-[92px] top-[224px]`}
          onClick={() => udp("Toggle", "UFC_7")}
        />
        <button
          className={`${squareButton} left-[148px] top-[224px]`}
          onClick={() => udp("Toggle", "UFC_8")}
        />
        <button
          className={`${squareButton} left-[204px] top-[224px]`}
          onClick={() => udp("Toggle", "UFC_9")}
        />
        <button
          className={`${squareButton} left-[92px] top-[280px]`}
          onClick={() => udp("Toggle", "UFC_CLR")}
        />
        <button
          className={`${squareButton} left-[148px] top-[280px]`}
          onClick={() => udp("Toggle", "UFC_0")}
        />
        <button
          className={`${squareButton} left-[204px] top-[280px]`}
          onClick={() => udp("Toggle", "UFC_ENT")}
        />
        {/* --------------------------------- */}
        <button
          className={`${squareButton} left-[96px] top-[361px]`}
          onClick={() => udp("Toggle", "UFC_AP")}
        />
        <button
          className={`${squareButton} left-[147px] top-[361px]`}
          onClick={() => udp("Toggle", "UFC_IFF")}
        />
        <button
          className={`${squareButton} left-[198px] top-[361px]`}
          onClick={() => udp("Toggle", "UFC_TCN")}
        />
        <button
          className={`${squareButton} left-[250px] top-[361px]`}
          onClick={() => udp("Toggle", "UFC_ILS")}
        />
        <button
          className={`${squareButton} left-[302px] top-[361px]`}
          onClick={() => udp("Toggle", "UFC_DL")}
        />
        <button
          className={`${squareButton} left-[356px] top-[361px]`}
          onClick={() => udp("Toggle", "UFC_BCN")}
        />
        <button
          className={`${squareButton} left-[408px] top-[361px]`}
          onClick={() => udp("Toggle", "UFC_ONOFF")}
        />
        {/* --------------------------------- */}
        <button
          className={`${squareButton} left-[480px] top-[120px]`}
          onClick={() => udp("Toggle", "UFC_EMCON")}
        />
        {/* --------------------------------- */}
        <button
          className={`${roundedButton} left-[273px] top-[43px]`}
          onClick={() => udp("Toggle", "UFC_OS1")}
        />
        <button
          className={`${roundedButton} left-[272px] top-[102px]`}
          onClick={() => udp("Toggle", "UFC_OS2")}
        />
        <button
          className={`${roundedButton} left-[272px] top-[165px]`}
          onClick={() => udp("Toggle", "UFC_OS3")}
        />
        <button
          className={`${roundedButton} left-[272px] top-[224px]`}
          onClick={() => udp("Toggle", "UFC_OS4")}
        />
        <button
          className={`${roundedButton} left-[272px] top-[287px]`}
          onClick={() => udp("Toggle", "UFC_OS5")}
        />
        {/* --------------------------------- */}
        <button
          className={`${roundedButton} left-[22px] top-[59px]`}
          onClick={() => udp("Toggle", "UFC_IP")}
        />
        {/* --------------------------------- */}
        <button
          className={`${directionalButton} left-[20px] top-[108px]`}
          onClick={() => udp("Send", "UFC_ADF INC")}
        />
        <button
          className={`${directionalButton} left-[20px] top-[142px]`}
          onClick={() => udp("Send", "UFC_ADF DEC")}
        />
        {/* --------------------------------- */}
        <button
          className={`${knob} left-[16px] top-[368px]`}
          onClick={() => udp("Send", "UFC_COMM1_CHANNEL_SELECT DEC")}
        />
        <button
          className={`${knob} left-[50px] top-[368px]`}
          onClick={() => udp("Send", "UFC_COMM1_CHANNEL_SELECT INC")}
        />
        <button
          className={`${knob} left-[464px] top-[368px]`}
          onClick={() => udp("Send", "UFC_COMM2_CHANNEL_SELECT DEC")}
        />
        <button
          className={`${knob} left-[500px] top-[368px]`}
          onClick={() => udp("Send", "UFC_COMM2_CHANNEL_SELECT INC")}
        />
      </div>
    </div>
  );
};

export { UFC };
