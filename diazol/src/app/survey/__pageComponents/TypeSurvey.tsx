"use client";
import Question from "@/components/questions/Question";
import { questions } from "@/data";
import React from "react";

type Props = {};

const TypeSurvey = (props: Props) => {
  return (
    <>
      <Question
        title={questions.type.title}
        content={questions.type.content}
        choice={questions.type.choice}
        // onScoreReceived={setTypeData}
        route="/survey/q"
      />
    </>
  );
};

export default TypeSurvey;
