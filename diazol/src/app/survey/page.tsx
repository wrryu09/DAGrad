import TopBar from "@/components/common/TopBar";
import Question from "@/components/questions/Question";
import SelectionBtn from "@/components/questions/SelectionBtn";
import { questions } from "@/data";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <TopBar />

      <Question title={questions.Q1.title} content={questions.Q1.content} />
      {Array(questions.Q1.choice).fill(<SelectionBtn />)}
    </div>
  );
};

export default page;
