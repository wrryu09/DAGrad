"use client";
import TopBar from "@/components/common/TopBar";
import Question from "@/components/questions/Question";
import { questions } from "@/data";
import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
  const qId = "Q" + params.id;
  return (
    <div>
      <TopBar />
      <Question
        title={questions[qId].title}
        content={questions[qId].content}
        choice={questions[qId].choice}
        route={
          Number(params.id) + 1 < 11
            ? String(Number(params.id) + 1)
            : "/survey/emo"
        }
      />
    </div>
  );
};

export default Page;
