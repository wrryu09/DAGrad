import { stressInfo } from "@/data";
import React, { useEffect, useState } from "react";
import InfoBox from "./InfoBox";
import { useData } from "@/utils/DataContext";
import Image from "next/image";
import { getStressNickName } from "@/utils/getStressNickname";
import { NickNameType } from "@/types";
import { smage } from "@/assets/images/smage/smage";

type Props = {};

const StressResult = (props: Props) => {
  const { data } = useData();
  const [nickname, setNickname] = useState<NickNameType>({
    name: "Prestissimo",
    content: "",
    image: smage.high1,
  });

  useEffect(() => {
    getStressNickName(setNickname, data.choiceScore, data.stressType);
  }, []);

  return (
    <div className="flex flex-col justify-center text-center">
      <Image alt="smage" src={nickname.image} />
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
    </div>
  );
};

export default StressResult;
