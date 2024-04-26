import React from "react";

type Props = {
  text: string;
  selection: number;
  num: number;
  setSelection: (num: number) => void;
};

const SelectionBtn = (props: Props) => {
  const selectedStyle = "h-16 border border-diazolRed rounded-full text-white";
  const defaultStyle =
    "h-16 border rounded-full text-midGrey backdrop-blur-sm bg-[rgba(255, 255, 255, 0.10)]";

  return (
    <div
      className={`w-full flex items-center justify-center font-semibold`}
      onClick={() => {
        props.setSelection(props.num);
      }}
    >
      <div
        className={`w-full flex items-center ${
          props.selection == props.num ? selectedStyle : defaultStyle
        }`}
      >
        <p className="p-6">{props.text}</p>
      </div>
      <div
        className={`w-20 ${
          props.selection == props.num ? selectedStyle : defaultStyle
        }`}
      ></div>
    </div>
  );
};

export default SelectionBtn;
