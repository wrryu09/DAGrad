import React from "react";

type Props = {
  text: string;
  val: number;
  num: number;
  setVal: React.Dispatch<React.SetStateAction<number>>;
};

const SelectionBtn = (props: Props) => {
  const selectedStyle = "text-black bg-lightGrey";
  const defaultStyle = "text-midGrey bg-darkGrey";

  const selectValue = () => {
    props.setVal(props.num);
  };
  return (
    <div
      className={`w-full py-3 flex rounded-md items-center justify-center font-semibold hover:text-black hover:bg-lightGrey ${
        props.val == props.num ? selectedStyle : defaultStyle
      }`}
      onClick={selectValue}
    >
      <p>{props.text}</p>
    </div>
  );
};

export default SelectionBtn;
