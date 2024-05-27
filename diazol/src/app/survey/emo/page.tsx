"use client";
import { emojis } from "@/assets/emojis/emojis";
import MainBtn from "@/components/common/MainBtn";
import Emoji from "@/components/questions/Emoji";
import useSetContextData from "@/utils/useSetContextData";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  const emojiArr = Object.entries(emojis);
  const { mySelection, setSelection, setContextData } =
    useSetContextData("emojiNum");

  const selectEmoji = (num: number) => {
    setSelection(num);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-10/12 flex flex-col items-center text-center">
        <div className="text-white my-10 whitespace-pre-wrap">
          <h1>Part2</h1>
          <p>짜증날 때 제일 거슬리는{"\n"}소리의 형태가 있다면 무엇일까요?</p>
          {/* {mySelection} */}
        </div>

        <div className="w-full flex flex-wrap gap-6 bg-[rgba(60,60,60,0.10)] backdrop-blur-lg p-4 py-8 rounded-lg justify-center mb-80">
          {emojiArr.map((emo, idx) => (
            <Emoji
              idx={idx}
              key={`${emo}+${idx}`}
              emo={emo}
              current={mySelection as number}
              selectEmoji={selectEmoji}
            />
          ))}
        </div>
        <MainBtn
          text="다음"
          available={mySelection !== -1 ? true : false}
          route="/survey/text"
          onclick={setContextData}
        />
      </div>
    </div>
  );
};

export default Page;
