"use client";
import MainBtn from "@/components/common/MainBtn";
import Question from "@/components/questions/Question";
import { questions } from "@/data";
import React, { useState } from "react";

type Props = {
  handleStressScore: (score: number) => void;
  onNext: () => void;
};

const QuestionSurvey = ({ handleStressScore, onNext }: Props) => {
  const [score, setScore] = useState(0);
  const [currentSelection, setCurrentSelection] = useState(-1);
  const [phase, setPhase] = useState(1);

  /** 총 점수 관리 */
  const handleScore = (sc: number) => {
    setScore(score + sc);
  };

  /** 페이즈당 정보 관리 */
  const increasePhase = () => {
    if (phase + 1 <= 10) setPhase(phase + 1);
    handleScore(currentSelection);
    // state 변화 후 바로 사용
    handleStressScore(currentSelection + score);
    setCurrentSelection(-1);
  };

  const handleCurrentSelection = (selection: number) => {
    setCurrentSelection(selection);
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
          <MainBtn
            text="다음"
            available={currentSelection !== -1}
            onClick={() => {
              phase === 10 && onNext();
              increasePhase();
            }}
          />
        }
      />
    </>
  );
};

export default QuestionSurvey;
