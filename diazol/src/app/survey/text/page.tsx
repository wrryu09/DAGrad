"use client";
import MainBtn from "@/components/common/MainBtn";
import TopBar from "@/components/common/TopBar";
import TextInput from "@/components/questions/TextInput";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col items-center">
      <TopBar />
      <div className="w-9/12 flex flex-col items-center text-center">
        <div className="text-white my-10">
          <h1>Part2</h1>
          <p>요즘 당신을 가장 스트레스 받게 하는 한 가지는 무엇인가요?</p>
        </div>
        <TextInput />
        <MainBtn text="다음" route="/result" />
      </div>
    </div>
  );
};

export default page;
