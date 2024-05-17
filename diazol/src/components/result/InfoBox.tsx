import React from "react";

type Props = {
  title: string;
  content: string;
};

const InfoBox = (props: Props) => {
  return (
    <div className="w-10/12 flex flex-col m-10 text-white items-start whitespace-pre-wrap">
      <h3 className="text-lg font-semibold px-4 py-2">{props.title}</h3>
      <div className="w-full bg-white/20 p-6 rounded-lg border border-darkGrey backdrop-blur-lg">
        <p className="text-sm break-keep text-start leading-relaxed">
          {props.content}
        </p>
      </div>
    </div>
  );
};

export default InfoBox;
