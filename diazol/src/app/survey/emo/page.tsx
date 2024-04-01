"use client";
import MainBtn from "@/components/common/MainBtn";
import TopBar from "@/components/common/TopBar";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col items-center">
      <TopBar />
      <div className="w-9/12 flex flex-col items-center text-center">
        <div className="text-white my-10">
          <h1>Part2</h1>
          <p>짜증날 때 제일 거슬리는 소리를 이모지🍀로 표현해주세요!</p>
        </div>
        {/* 커스텀 이모지로 변경 예정 */}
        <input
          className="w-9/12 bg-midGrey rounded-md text-6xl p-4 placeholder:text-darkGrey text-center"
          placeholder="🥹🥰🌴"
          maxLength={3}
        ></input>
        <MainBtn text="다음" route="/survey/text" />
      </div>
    </div>
  );
};

export default page;
