"use client";
import MainBtn from "@/components/common/MainBtn";
import Question from "@/components/questions/Question";
import { questions } from "@/data";
import { UserDataType } from "@/types";
import React, { useState } from "react";

type Props = {
  onNext: () => void;
};

const QuestionSurvey = ({ onNext }: Props) => {
  const [score, setScore] = useState(0);
  const [phase, setPhase] = useState(1);
  const increasePhase = () => {
    if (phase + 1 <= 10) setPhase(phase + 1);
  };
  const handleScoreIncrease = (sc: number) => {
    setScore(score + sc);
  };
  return (
    <>
      <Question
        Qnum={phase}
        title={questions["Q" + phase].title}
        content={questions["Q" + phase].content}
        choice={questions["Q" + phase].choice}
        MainBtnChildren={
          phase === 10 ? (
            <MainBtn text="다음" available={true} onClick={onNext} />
          ) : (
            <MainBtn text="다음" available={true} onClick={increasePhase} />
          )
        }
      />
    </>
  );
};

export default QuestionSurvey;
