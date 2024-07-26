import { stressInfo } from "@/data";
import React, { useEffect, useState } from "react";
import InfoBox from "./InfoBox";
import Image from "next/image";
import { getStressNickName } from "@/utils/getStressNickname";
import { NickNameType, UserDataType } from "@/types";
import { smageQr } from "@/assets/images/smage/smage";
import MainBtn from "../common/MainBtn";
import { playMorseSound } from "@/utils/playMorseSound";
import Card from "./Card";
import Spinner from "../common/\bSpinner";

type Props = {
  userData: UserDataType;
  morseCode: string;
};

const StressResult = ({ userData, morseCode }: Props) => {
  const [nickname, setNickname] = useState<NickNameType>({
    name: "Prestissimo",
    content: "",
    image: "",
    qrImage: smageQr.high1,
  });
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => {
    setIsLoading(false);
  };
  useEffect(() => {
    getStressNickName(setNickname, userData.choiceScore, userData.stressType);
  }, []);

  return (
    <div className="flex flex-col justify-center text-center items-center text-white">
      {isLoading && <Spinner />}
      <Image
        alt="smage"
        src={nickname.image}
        className={`w-full ${isLoading ? "hidden" : ""}`}
        onLoad={handleImageLoad}
        onClick={() => {
          playMorseSound(morseCode, userData.stressType);
        }}
      />
      <div className="text-3xl font-semibold mt-20 text-white leading-10">
        <h1>{nickname.name}</h1>
        {/* 점수 바 */}
        <div className="w-[160px] h-fit relative flex items-center mt-10 mb-20">
          <div className="w-full h-[1px] bg-white absolute" />
          <div
            className={`w-2 h-2 rounded-full bg-black border border-diazolRed absolute`}
            style={{ left: `${userData.choiceScore * 4}px` }}
          />
        </div>
      </div>

      <Card />

      {stressInfo.map((info) => (
        <InfoBox
          key={"stressInfo" + info.title}
          title={info.title}
          content={info.content}
        />
      ))}

      <Image
        width={150}
        alt="QR code"
        src={nickname.qrImage}
        className="mt-20 mb-60"
      />

      <MainBtn text="메인 화면으로 돌아가기" route="/" available={true} />
    </div>
  );
};

export default StressResult;
