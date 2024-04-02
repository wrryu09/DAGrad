import React, { useEffect, useState } from "react";
import SelectionBtn from "./SelectionBtn";
import SelectionBtnGroup from "./SelectionBtnGroup";
import MainBtn from "../common/MainBtn";

type Props = {
  Qnum?: number;
  title: string;
  content: string;
  choice: number;
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
          <SelectionBtnGroup>
            <SelectionBtn
              text="매우 자주 있었다"
              selection={selection}
              setSelection={setSelection}
              num={4}
            />
            <SelectionBtn
              text="자주 있었다"
              selection={selection}
              setSelection={setSelection}
              num={3}
            />
            <SelectionBtn
              text="때때로 있었다"
              selection={selection}
              setSelection={setSelection}
              num={2}
            />
            <SelectionBtn
              text="거의 없었다"
              selection={selection}
              setSelection={setSelection}
              num={1}
            />
            <SelectionBtn
              text="전혀 없었다"
              selection={selection}
              setSelection={setSelection}
              num={0}
            />
          </SelectionBtnGroup>
        ) : (
          <SelectionBtnGroup>
            <SelectionBtn
              text="기한까지 못 끝낼까 불안하다"
              selection={selection}
              setSelection={setSelection}
              num={1}
            />
            <SelectionBtn
              text="꼭 완벽하게 끝내고야 만다!"
              selection={selection}
              setSelection={setSelection}
              num={2}
            />
            <SelectionBtn
              text="감당하기 힘들어 숨어버리고 싶다"
              selection={selection}
              setSelection={setSelection}
              num={3}
            />
          </SelectionBtnGroup>
        )}

        <MainBtn
          text="다음"
          available={selection !== -1 ? true : false}
          onScoreReceived={props.onScoreReceived}
          score={val}
          increasePhase={props.increasePhase}
        />
      </div>
    </div>
  );
};

export default Question;
