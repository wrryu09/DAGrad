"use client";
import TopBar from "@/components/common/TopBar";
import Question from "@/components/questions/Question";
import { questions } from "@/data";
import React, { useState } from "react";

const Page = ({ params }: { params: { id: string } }) => {
  const qId = "Q" + params.id;
  const [score, setScore] = useState(0);

  const handleScoreReceived = (score: number) => {
    setScore(score);
  };
  return (
    <div>
      <TopBar />
      <h1 className="text-3xl text-white">{score}</h1>
      <Question
        Qnum={Number(params.id)}
        title={questions[qId].title}
        content={questions[qId].content}
        choice={questions[qId].choice}
        route={
          Number(params.id) + 1 < 11
            ? String(Number(params.id) + 1)
            : "/survey/emo"
        }
        onScoreReceived={handleScoreReceived}
      />
    </div>
  );
};

export default Page;
