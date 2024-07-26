"use client";
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
        increasePhase={increasePhase}
        onScoreReceived={handleScoreIncrease}
      />
    </>
  );
};

export default QuestionSurvey;
