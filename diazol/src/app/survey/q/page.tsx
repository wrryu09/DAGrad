"use client";
import BackGroundEmoji from "@/components/common/BackGroundEmoji";
import TopBar from "@/components/common/TopBar";
import Question from "@/components/questions/Question";
import { questions } from "@/data";
import { UserDataType } from "@/types";
import { useData } from "@/utils/DataContext";
import React, { useState } from "react";

type Props = {};

const Page = (props: Props) => {
  const [score, setScore] = useState(0);
  const [phase, setPhase] = useState(1);
  const { setData } = useData();
  const increasePhase = () => {
    if (phase + 1 <= 10) setPhase(phase + 1);
  };
  const handleScoreIncrease = (sc: number) => {
    setScore((prevScore) => {
      const newScore = prevScore + sc;
      setData((prevData: UserDataType) => {
        return {
          ...prevData,
          choiceScore: newScore,
        };
      });
      return newScore;
    });
  };
  return (
    <div>
      <TopBar />
      <BackGroundEmoji />
      <Question
        Qnum={phase}
        title={questions["Q" + phase].title}
        content={questions["Q" + phase].content}
        choice={questions["Q" + phase].choice}
        increasePhase={increasePhase}
        onScoreReceived={handleScoreIncrease}
      />
    </div>
  );
};

export default Page;
