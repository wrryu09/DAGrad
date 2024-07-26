import React, { useEffect, useState } from "react";
import SelectionBtn from "./SelectionBtn";
import SelectionBtnGroup from "./SelectionBtnGroup";
import { fiveSelectionBtnContent, typeSelectionBtnContent } from "@/data";

type QuestionProps = {
  Qnum?: number;
  title: string;
  content: string;
  choice: number;
  MainBtnChildren: React.ReactNode;
};

const Question = ({
  Qnum,
  title,
  content,
  choice,
  MainBtnChildren,
}: QuestionProps) => {
  const order = [1, 2, 3, 6, 9, 10];
  const [val, setVal] = useState(-1);
  const [selection, setSelection] = useState(-1);

  // reset selection on Qnum change
  useEffect(() => {
    setSelection(-1);
    setVal(-1);
  }, [Qnum]);

  // set value via question order
  useEffect(() => {
    if (Qnum) {
      if (order.includes(Qnum)) {
        setVal(selection);
      } else {
        setVal(4 - selection);
      }
    } else {
      setVal(selection);
    }
  }, [selection, Qnum]);

  return (
    <div className="flex flex-col text-white break-keep whitespace-pre-wrap">
      <div className="mt-10 px-8">
        <h3 className="text-3xl font-semibold mb-3">{title}</h3>
        <p className="text-lg">{content}</p>

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

        {/* MainBtn children 으로 받기 */}
        <div className="flex justify-center">{MainBtnChildren}</div>
      </div>
    </div>
  );
};

export default Question;
