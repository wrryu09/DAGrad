"use client";
import TopBar from "@/components/common/TopBar";
import Question from "@/components/questions/Question";
import { questions } from "@/data";
import { useData } from "@/utils/DataContext";
import React, { useState } from "react";

type Props = {};

const Page = (props: Props) => {
  const [score, setScore] = useState(0);
  const [phase, setPhase] = useState(1);
  const { data, setData } = useData();
  const increasePhase = () => {
    if (phase + 1 <= 10) setPhase(phase + 1);
  };
  const handleScoreIncrease = (sc: number) => {
    setScore(score + sc);
    setData(() => {
      const newData = { ...data };
      newData.choiceScore = score;
      return newData;
    });
  };
  return (
    <div>
      <TopBar />
      <h1 className="text-3xl text-white">{score}</h1>
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
