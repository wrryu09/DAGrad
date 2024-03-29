import React from "react";

type Props = { title: string; content: string };

const Question = (props: Props) => {
  return (
    <div className="flex flex-col text-white break-keep whitespace-pre-wrap">
      <div className="mt-10 px-8">
        <h3 className="text-3xl font-semibold mb-3">{props.title}</h3>
        <p className="text-lg">{props.content}</p>
      </div>
    </div>
  );
};

export default Question;
