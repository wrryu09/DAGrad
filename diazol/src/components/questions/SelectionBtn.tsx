import React from "react";

type Props = {
  text: string;
  selection: number;
  num: number;
  setSelection: (num: number) => void;
};

const SelectionBtn = (props: Props) => {
  const selectedStyle =
    "w-full border border-diazolRed rounded-full text-white";
  const defaultStyle =
    "w-full border rounded-full text-midGrey backdrop-blur-sm bg-[rgba(255, 255, 255, 0.10)]";

  return (
    <div
      className={`w-full flex items-center justify-center font-semibold`}
      onClick={() => {
        props.setSelection(props.num);
      }}
    >
      <div
        className={`h-16 flex items-center ${
          props.selection == props.num ? selectedStyle : defaultStyle
        }`}
      >
        <p className="p-6">{props.text}</p>
      </div>
      <div
        className={`h-16 w-20 ${
          props.selection == props.num ? selectedStyle : defaultStyle
        }`}
      ></div>
    </div>
  );
};

export default SelectionBtn;
