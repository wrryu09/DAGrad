"use client";
import { emojis } from "@/assets/emojis/emojis";
import MainBtn from "@/components/common/MainBtn";
import TopBar from "@/components/common/TopBar";
import Emoji from "@/components/questions/Emoji";
import { useData } from "@/utils/DataContext";
import React, { useState } from "react";

type Props = {};

const Page = (props: Props) => {
  const [emojiSelection, setEmojiSelection] = useState(-1);
  const emojiArr = Object.entries(emojis);
  const { setData } = useData();

  const selectEmoji = (num: number) => {
    setEmojiSelection(num);
  };
  const setEmojiSelectionData = () => {
    setData((prevData) => ({
      ...prevData,
      emojiNum: emojiSelection,
    }));
  };
  return (
    <div className="flex flex-col items-center">
      <TopBar />
      <div className="w-9/12 flex flex-col items-center text-center">
        <div className="text-white my-10">
          <h1>Part2</h1>
          <p>짜증날 때 제일 거슬리는 소리의 형태가 있다면 무엇일까요?</p>
          {emojiSelection}
        </div>

        <div className="w-fit flex flex-wrap gap-6 bg-darkGrey p-4 py-8 rounded-lg justify-center">
          {emojiArr.map((emo, idx) => (
            <Emoji
              idx={idx}
              key={`${emo}+${idx}`}
              emo={emo}
              current={emojiSelection}
              selectEmoji={selectEmoji}
            />
          ))}
        </div>
        <MainBtn
          text="다음"
          available={emojiSelection !== -1 ? true : false}
          route="/survey/text"
          onclick={setEmojiSelectionData}
        />
      </div>
    </div>
  );
};

export default Page;
