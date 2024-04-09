"use client";
import TopBar from "@/components/common/TopBar";
import Question from "@/components/questions/Question";
import { questions } from "@/data";
import { useData } from "@/utils/DataContext";
import React from "react";

type Props = {};

const Type = (props: Props) => {
  const { data, setData } = useData();
  const setTypeData = (num: number) => {
    const newData = { ...data };
    newData.stressType = num;
    setData(newData);
  };
  return (
    <div>
      <TopBar />
      <Question
        title={questions.type.title}
        content={questions.type.content}
        choice={questions.type.choice}
        onScoreReceived={setTypeData}
        route="/survey/q"
      />
    </div>
  );
};

export default Type;
