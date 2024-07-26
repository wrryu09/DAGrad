"use client";
import Question from "@/components/questions/Question";
import { questions } from "@/data";
import React from "react";

type TypeSurveyProps = {
  handleStressType: (stressType: number) => void;
  onNext: () => void;
};

const TypeSurvey = ({ handleStressType, onNext }: TypeSurveyProps) => {
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
