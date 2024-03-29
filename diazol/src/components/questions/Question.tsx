import React, { useState } from "react";
import SelectionBtn from "./SelectionBtn";
import SelectionBtnGroup from "./SelectionBtnGroup";
import MainBtn from "../common/MainBtn";

type Props = { title: string; content: string; choice: number; route: string };

const Question = (props: Props) => {
  const [val, setVal] = useState(0);
  return (
    <div className="flex flex-col text-white break-keep whitespace-pre-wrap">
      <div className="mt-10 px-8">
        <h3 className="text-3xl font-semibold mb-3">{props.title}</h3>
        <p className="text-lg">{props.content}</p>
        {props.choice === 4 ? (
          <SelectionBtnGroup>
            <SelectionBtn
              text="매우 자주 있었다"
              val={val}
              setVal={setVal}
              num={1}
            />
            <SelectionBtn
              text="자주 있었다"
              val={val}
              setVal={setVal}
              num={2}
            />
            <SelectionBtn
              text="때때로 있었다"
              val={val}
              setVal={setVal}
              num={3}
            />
            <SelectionBtn
              text="거의 없었다"
              val={val}
              setVal={setVal}
              num={4}
            />
          </SelectionBtnGroup>
        ) : (
          <SelectionBtnGroup>
            <SelectionBtn
              text="기한까지 못 끝낼까 불안하다"
              val={val}
              setVal={setVal}
              num={1}
            />
            <SelectionBtn
              text="꼭 완벽하게 끝내고야 만다!"
              val={val}
              setVal={setVal}
              num={2}
            />
            <SelectionBtn
              text="감당하기 힘들어 숨어버리고 싶다"
              val={val}
              setVal={setVal}
              num={3}
            />
          </SelectionBtnGroup>
        )}

        <MainBtn
          text="다음"
          available={val !== 0 ? true : false}
          route={props.route}
        />
      </div>
    </div>
  );
};

export default Question;
