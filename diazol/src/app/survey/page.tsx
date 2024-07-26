"use client";
import { UserDataType } from "@/types";
import React, { useEffect, useState } from "react";
import EmoSurvey from "./__pageComponents/EmoSurvey";
import QuestionSurvey from "./__pageComponents/QuestionSurvey";
import TextSurvey from "./__pageComponents/TextSurvey";
import { useRouter } from "next/navigation";
import TypeSurvey from "./__pageComponents/TypeSurvey";

type Props = {};

const Page = (props: Props) => {
  const router = useRouter();
  const [step, setStep] = useState("question");
  const [data, setData] = useState<UserDataType>({
    stressType: -1,
    choiceScore: -1,
    emojiNum: -1,
    stressWord: "",
  });
  const handleEmoji = (emojiNum: number) => {
    setData({ ...data, emojiNum: emojiNum });
  };

  const handleText = (txt: string) => {
    setData({ ...data, stressWord: txt });
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      {step === "type" && <TypeSurvey />}
      {step === "question" && (
        <QuestionSurvey
          onNext={() => {
            setStep("emo");
          }}
        />
      )}
      {step === "emo" && (
        <EmoSurvey
          handleEmoji={handleEmoji}
          onNext={() => {
            setStep("text");
          }}
        />
      )}
      {step === "text" && (
        <TextSurvey
          handleText={handleText}
          onNext={() => {
            router.push("/result");
          }}
        />
      )}
    </>
  );
};

export default Page;
