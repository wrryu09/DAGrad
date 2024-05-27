"use client";
import MainBtn from "@/components/common/MainBtn";
import TextInput from "@/components/questions/TextInput";
import useSetContextData from "@/utils/useSetContextData";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  const { mySelection, setSelection, setContextData } =
    useSetContextData("stressWord");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelection(e.target.value);
    if (e.target.value == "") {
      setSelection(-1);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-9/12 flex flex-col items-center text-center">
        <div className="text-white my-10 whitespace-pre-wrap">
          <h1>Part2</h1>
          <p>요즘 당신을 가장{"\n"}스트레스 받게 하는 것은 무엇인가요?</p>
        </div>
        <TextInput onChange={onChange} />
        <MainBtn
          text="다음"
          available={mySelection !== -1 ? true : false}
          onclick={setContextData}
          route="/result"
        />
      </div>
    </div>
  );
};

export default Page;
