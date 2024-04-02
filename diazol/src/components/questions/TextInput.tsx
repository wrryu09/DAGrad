import React from "react";

type Props = { onChange: (e: React.ChangeEvent<HTMLInputElement>) => void };

const TextInput = (props: Props) => {
  return (
    <input
      className="h-[6.5rem] w-9/12 bg-midGrey rounded-md text-4xl p-4 placeholder:text-darkGrey text-center"
      placeholder="ㅠㅠ"
      maxLength={12}
      onChange={props.onChange}
    ></input>
  );
};

export default TextInput;
