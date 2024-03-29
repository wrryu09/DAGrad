"use client";
import Question from "@/components/questions/Question";
import { questions } from "@/data";
import React from "react";

type Props = {};

const Type = (props: Props) => {
  return (
    <div>
      <Question
        title={questions.type.title}
        content={questions.type.content}
        choice={questions.type.choice}
        route="q/1"
      />
    </div>
  );
};

export default Type;
