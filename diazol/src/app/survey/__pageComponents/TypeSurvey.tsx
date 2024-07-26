"use client";
import MainBtn from "@/components/common/MainBtn";
import SelectionBtn from "@/components/questions/SelectionBtn";
import SelectionBtnGroup from "@/components/questions/SelectionBtnGroup";
import { questions, typeSelectionBtnContent } from "@/data";
import React, { useState } from "react";

type TypeSurveyProps = {
  handleStressType: (stressType: number) => void;
  onNext: () => void;
};

/** 스트레스 유형 페이지 */
const TypeSurvey = ({ handleStressType, onNext }: TypeSurveyProps) => {
  const [selectedStressType, setSelectedStressType] = useState(-1);
  return (
    <>
      <div className="flex flex-col text-white break-keep whitespace-pre-wrap">
        <div className="mt-10 px-8">
          <h3 className="text-3xl font-semibold mb-3">
            {questions.type.title}
          </h3>
          <p className="text-lg">{questions.type.content}</p>

          <SelectionBtnGroup>
            {typeSelectionBtnContent.map((obj) => {
              return (
                <SelectionBtn
                  key={obj.content + obj.num}
                  text={obj.content}
                  selection={selectedStressType}
                  setSelection={setSelectedStressType}
                  num={obj.num}
                />
              );
            })}
          </SelectionBtnGroup>

          <div className="flex justify-center">
            <MainBtn
              text="다음"
              available={selectedStressType !== -1}
              onClick={() => {
                handleStressType(selectedStressType);
                onNext();
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TypeSurvey;
