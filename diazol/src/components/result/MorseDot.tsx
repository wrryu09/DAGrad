import React from "react";

type Props = {
  type: string;
};

const MorseDot = (props: Props) => {
  const dotStyle = "bg-lightGrey w-12 h-12 rounded-full";
  const dotBarStyle = "bg-lightGrey w-12 h-32 rounded-full";
  const blankStyle = "w-12 h-32 rounded-full";
  return (
    <div>
      {props.type === "-" ? <div className={dotBarStyle}></div> : null}
      {props.type === "." ? <div className={dotStyle}></div> : null}
      {props.type === " " ? <div className={blankStyle}></div> : null}
    </div>
  );
};

export default MorseDot;
