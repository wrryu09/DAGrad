import { stressInfo } from "@/data";
import React from "react";
import InfoBox from "./InfoBox";
import { useData } from "@/utils/DataContext";

type Props = {};

const StressResult = (props: Props) => {
  const { data, setData } = useData();
  return (
    <div className="flex flex-col justify-center text-center">
      <h1 className="text-3xl font-semibold mt-20 text-white leading-10">
        {/* <p>stressType : {data.stressType}</p>
        <p>emojiNum : {data.emojiNum}</p>
        <p>stressWord : {data.stressWord}</p> */}

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
