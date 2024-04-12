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
    <Image
      key={props.idx}
      src={props.emo[1]}
      width={80}
      height={80}
      alt="sample"
      className={`rounded-full border-2 ${
        props.current === props.idx
          ? "shadow-midGrey shadow-xl border-white"
          : "border-darkGrey"
      }`}
      onClick={() => {
        props.selectEmoji(props.idx);
      }}
    />
  );
};

export default Emoji;
