import React from "react";

type Props = {
  text: string;
  selection: number;
  num: number;
  setSelection: (num: number) => void;
};

const SelectionBtn = (props: Props) => {
  const selectedStyle = "h-14 border border-diazolRed rounded-full text-white";
  const defaultStyle = "h-14 border rounded-full text-midGrey";

  return (
    <div
      className={`w-11/12 self-center flex items-center justify-center font-semibold`}
      onClick={() => {
        props.setSelection(props.num);
      }}
    >
      <div
        className={`w-full flex items-center justify-center bg-white/opacity-5 backdrop-blur-md ${
          props.selection == props.num ? selectedStyle : defaultStyle
        }`}
      >
        <p className="p-6">{props.text}</p>
      </div>
      <div
        className={`w-16 bg-white/opacity-5 backdrop-blur-md ${
          props.selection == props.num ? selectedStyle : defaultStyle
        }`}
      ></div>
    </div>
  );
};

export default SelectionBtn;
