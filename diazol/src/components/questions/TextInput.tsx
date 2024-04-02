import React, { useState } from "react";

type Props = {};

const TextInput = (props: Props) => {
  const [stressWord, setStressWord] = useState("");
  return (
    <input
      className="h-[6.5rem] w-9/12 bg-midGrey rounded-md text-4xl p-4 placeholder:text-darkGrey text-center"
      placeholder="ㅠㅠ"
      maxLength={12}
    ></input>
  );
};

export default TextInput;
