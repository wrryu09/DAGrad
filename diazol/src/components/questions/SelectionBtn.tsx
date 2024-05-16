import React from "react";

type Props = {
  text: string;
  selection: number;
  num: number;
  setSelection: (num: number) => void;
};

const SelectionBtn = (props: Props) => {
  const selectedStyle =
    "border-diazolRed text-white bg-black/60 border-[0.5px] font-semibold";
  const defaultStyle = "border-darkGrey/60 text-midGrey bg-white/5";

  return (
    <div
      className={`w-11/12 self-center flex items-center justify-center`}
      onClick={() => {
        props.setSelection(props.num);
      }}
    >
      <div
        className={`w-full h-14 border flex items-center justify-center backdrop-blur-md rounded-full ${
          props.selection == props.num ? selectedStyle : defaultStyle
        }`}
      >
        <p className="p-6">{props.text}</p>
      </div>
    </div>
  );
};

export default SelectionBtn;
