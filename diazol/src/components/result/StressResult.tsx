import { stressInfo } from "@/data";
import React, { useEffect, useState } from "react";
import InfoBox from "./InfoBox";
import { useData } from "@/utils/DataContext";
import Image from "next/image";
import { getStressNickName } from "@/utils/getStressNickname";
import { NickNameType } from "@/types";
import { smageQr } from "@/assets/images/smage/smage";
import MainBtn from "../common/MainBtn";
import { playMorseSound } from "@/utils/playMorseSound";
import Card from "./Card";
import Spinner from "../common/\bSpinner";

type Props = {
  morseCode: string;
};

const StressResult = (props: Props) => {
  const { data } = useData();
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
    getStressNickName(setNickname, data.choiceScore, data.stressType);
  }, []);

  return (
    <div className="flex flex-col justify-center text-center items-center text-white">
      <Image
        alt="smage"
        src={nickname.image}
        unoptimized
        className="w-full"
        onLoad={handleImageLoad}
        onClick={() => {
          playMorseSound(props.morseCode, data.stressType);
        }}
      />
      {(isLoading || nickname.image === "") && <Spinner />}
      <div className="text-3xl font-semibold mt-20 text-white leading-10">
        <h1>{nickname.name}</h1>
        {/* 점수 바 */}
        <div className="w-[160px] h-fit relative flex items-center mt-10 mb-20">
          <div className="w-full h-[1px] bg-white absolute" />
          <div
            className={`w-2 h-2 rounded-full bg-black border border-diazolRed absolute`}
            style={{ left: `${data.choiceScore * 4}px` }}
          />
        </div>
      </div>

      <Card />
      <p className="whitespace-pre-wrap mb-10">
        스미지 유형에 맞는 {"\n"}카드를 한 장씩 가져가 주세요!
      </p>

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
