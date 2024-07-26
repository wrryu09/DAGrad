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
  const [currentSelection, setCurrentSelection] = useState(-1);
  const [phase, setPhase] = useState(1);
  const increasePhase = () => {
    if (phase + 1 <= 10) setPhase(phase + 1);
    setCurrentSelection(-1);
  };
  const handleCurrentSelection = (selection: number) => {
    setCurrentSelection(selection);
  };
  const handleScore = (sc: number) => {
    setScore(score + sc);
  };
  return (
    <>
      <Question
        Qnum={phase}
        title={questions["Q" + phase].title}
        content={questions["Q" + phase].content}
        currentSelection={currentSelection}
        handleCurrentSelection={handleCurrentSelection}
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
