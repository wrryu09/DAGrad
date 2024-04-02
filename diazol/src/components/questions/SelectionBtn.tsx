import React from "react";

type Props = {
  text: string;
  selection: number;
  num: number;
  setSelection: (num: number) => void;
};

const SelectionBtn = (props: Props) => {
  const selectedStyle = "text-black bg-lightGrey";
  const defaultStyle = "text-midGrey bg-darkGrey";

  return (
    <div
      className={`w-full py-3 flex rounded-md items-center justify-center font-semibold hover:text-black hover:bg-lightGrey ${
        props.selection == props.num ? selectedStyle : defaultStyle
      }`}
      onClick={() => {
        props.setSelection(props.num);
      }}
    >
      <p>{props.text}</p>
    </div>
  );
};

export default SelectionBtn;
