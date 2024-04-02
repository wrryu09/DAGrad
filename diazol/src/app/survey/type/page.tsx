"use client";
import TopBar from "@/components/common/TopBar";
import Question from "@/components/questions/Question";
import { questions } from "@/data";
import React from "react";

type Props = {};

const Type = (props: Props) => {
  return (
    <div>
      <TopBar />
      <Question
        title={questions.type.title}
        content={questions.type.content}
        choice={questions.type.choice}
        route="/survey/q"
      />
    </div>
  );
};

export default Type;
