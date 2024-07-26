"use client";
import { UserDataType } from "@/types";
import { useState } from "react";
import EmoSurvey from "./__pageComponents/EmoSurvey";
import QuestionSurvey from "./__pageComponents/QuestionSurvey";
import TextSurvey from "./__pageComponents/TextSurvey";
import TypeSurvey from "./__pageComponents/TypeSurvey";
import ResultPage from "./__pageComponents/ResultPage";

const Page = () => {
  const [step, setStep] = useState("type");
  const [data, setData] = useState<UserDataType>({
    stressType: -1,
    choiceScore: -1,
    emojiNum: -1,
    stressWord: "",
  });
  const handleStressType = (stressType: number) => {
    setData({ ...data, stressType: stressType });
  };
  const handleStressScore = (score: number) => {
    setData({ ...data, choiceScore: score });
  };
  const handleEmoji = (emojiNum: number) => {
    setData({ ...data, emojiNum: emojiNum });
  };

  const handleText = (txt: string) => {
    setData({ ...data, stressWord: txt });
  };

  return (
    <>
      {step === "type" && (
        <TypeSurvey
          handleStressType={handleStressType}
          onNext={() => {
            setStep("question");
          }}
        />
      )}
      {step === "question" && (
        <QuestionSurvey
          handleStressScore={handleStressScore}
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
            setStep("result");
          }}
        />
      )}
      {step === "result" && <ResultPage userData={data} />}
    </>
  );
};

export default Page;
