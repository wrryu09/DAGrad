import React, { useEffect, useState } from "react";
import SelectionBtn from "./SelectionBtn";
import SelectionBtnGroup from "./SelectionBtnGroup";
import MainBtn from "../common/MainBtn";
import { fiveSelectionBtnContent, typeSelectionBtnContent } from "@/data";

type Props = {
  Qnum?: number;
  title: string;
  content: string;
  choice: number;
  route?: string;
  onScoreReceived?: (score: number) => void;
  increasePhase?: () => void;
};

const Question = (props: Props) => {
  const order = [1, 2, 3, 6, 9, 10];
  const [val, setVal] = useState(-1);
  const [selection, setSelection] = useState(-1);

  // reset selection on Qnum change
  useEffect(() => {
    setSelection(-1);
    setVal(-1);
  }, [props.Qnum]);

  // set value via question order
  useEffect(() => {
    if (props.Qnum) {
      if (order.includes(props.Qnum)) {
        setVal(selection);
      } else {
        setVal(4 - selection);
      }
    }
  }, [selection, props.Qnum]);

  return (
    <div className="flex flex-col text-white break-keep whitespace-pre-wrap">
      <div className="mt-10 px-8">
        <h3 className="text-3xl font-semibold mb-3">{props.title}</h3>
        <p className="text-lg">{props.content}</p>
        {val}

        {props.choice === 5 ? (
          // select buttons when the question has 5 choices
          <SelectionBtnGroup>
            {fiveSelectionBtnContent.map((obj) => {
              return (
                <SelectionBtn
                  key={obj.content + obj.num}
                  text={obj.content}
                  selection={selection}
                  setSelection={setSelection}
                  num={obj.num}
                />
              );
            })}
          </SelectionBtnGroup>
        ) : (
          // select buttons when the question has 3 choices
          <SelectionBtnGroup>
            {typeSelectionBtnContent.map((obj) => {
              return (
                <SelectionBtn
                  key={obj.content + obj.num}
                  text={obj.content}
                  selection={selection}
                  setSelection={setSelection}
                  num={obj.num}
                />
              );
            })}
          </SelectionBtnGroup>
        )}

        {/* survey questions, go to next question phase */}
        <div className="flex justify-center">
          {props.Qnum && props.Qnum + 1 <= 10 ? (
            <MainBtn
              text="다음"
              available={selection !== -1 ? true : false}
              onScoreReceived={props.onScoreReceived}
              score={val}
              increasePhase={props.increasePhase}
            />
          ) : (
            <>
              {/* survey questions, exceeds 10 and finish questions */}
              {props.Qnum ? (
                <MainBtn
                  text="완료"
                  available={selection !== -1 ? true : false}
                  onScoreReceived={props.onScoreReceived}
                  score={val}
                  route="/survey/emo"
                />
              ) : (
                // not survey questions, route to other pages
                <MainBtn
                  text="다음"
                  available={selection !== -1 ? true : false}
                  onScoreReceived={props.onScoreReceived}
                  score={val}
                  route={props.route}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Question;
