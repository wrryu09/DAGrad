import { stressInfo } from "@/data";
import React, { useEffect, useState } from "react";
import InfoBox from "./InfoBox";
import { useData } from "@/utils/DataContext";
import Image from "next/image";
import { getStressNickName } from "@/utils/getStressNickname";
import { NickNameType } from "@/types";
import { smage, smageQr } from "@/assets/images/smage/smage";
import MainBtn from "../common/MainBtn";

type Props = {};

const StressResult = (props: Props) => {
  const { data } = useData();
  const [nickname, setNickname] = useState<NickNameType>({
    name: "Prestissimo",
    content: "",
    image: smage.high1,
    qrImage: smageQr.high1,
  });

  useEffect(() => {
    getStressNickName(setNickname, data.choiceScore, data.stressType);
  }, []);

  return (
    <div className="flex flex-col justify-center text-center items-center">
      <Image width={350} alt="smage" src={nickname.image} />
      <h1 className="text-3xl font-semibold mt-20 text-white leading-10">
        <h2>{nickname.name}</h2>
        <p>{nickname.content}</p>
        <p>당신의 스트레스 점수는</p>
        <p>{data.choiceScore}점</p>
      </h1>

      {stressInfo.map((info) => (
        <InfoBox
          key={"stressInfo" + info.title}
          title={info.title}
          content={info.content}
        />
      ))}

      <Image width={150} alt="QR code" src={nickname.qrImage} />

      <MainBtn text="메인 화면으로 돌아가기" route="/" available={true} />
    </div>
  );
};

export default StressResult;
