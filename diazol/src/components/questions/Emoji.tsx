import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  idx: number;
  emo: [string, StaticImageData];
  current: number;
  selectEmoji: (num: number) => void;
};

const Emoji = (props: Props) => {
  return (
    <div
      onClick={() => {
        props.selectEmoji(props.idx);
      }}
      className={
        props.current === props.idx
          ? "border-diazolRed border-2"
          : "border-2 border-darkGrey"
      }
    >
      <Image
        key={props.idx}
        src={props.emo[1]}
        width={80}
        height={80}
        alt="sample"
      />
    </div>
  );
};

export default Emoji;
