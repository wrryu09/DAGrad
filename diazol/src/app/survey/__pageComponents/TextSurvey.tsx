"use client";
import MainBtn from "@/components/common/MainBtn";
import TextInput from "@/components/questions/TextInput";
import { useState } from "react";

type TextSurveyProps = {
  handleText: (txt: string) => void;
  onNext: () => void;
};

const TextSurvey = ({ handleText, onNext }: TextSurveyProps) => {
  const [mySelection, setSelection] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelection(e.target.value);
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
          available={mySelection !== "" ? true : false}
          onClick={() => {
            handleText(mySelection);
            onNext();
          }}
        />
      </div>
    </div>
  );
};

export default TextSurvey;
