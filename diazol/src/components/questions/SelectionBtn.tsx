import React from "react";

type SelectionBtnProps = {
  text: string;
  selection: number;
  num: number;
  setSelection: (num: number) => void;
};

const SelectionBtn = ({
  text,
  selection,
  num,
  setSelection,
}: SelectionBtnProps) => {
  const selectedStyle =
    "border-diazolRed text-white bg-black/60 border-[0.5px] font-semibold";
  const defaultStyle = "border-darkGrey/60 text-midGrey bg-white/5";

  return (
    <div
      className={`w-11/12 self-center flex items-center justify-center`}
      onClick={() => {
        setSelection(num);
      }}
    >
      <div
        className={`w-full h-14 border flex items-center justify-center backdrop-blur-md rounded-full ${
          selection == num ? selectedStyle : defaultStyle
        }`}
      >
        <p className="p-6">{text}</p>
      </div>
    </div>
  );
};

export default SelectionBtn;
