import React from "react";
import bgImg from "../../assets/images/bgEmoji.png";
import Image from "next/image";
type Props = {};

const BackGroundEmoji = (props: Props) => {
  return (
    <div className="w-full h-full max-w-[360px] -z-10">
      <Image
        src={bgImg}
        alt="background image"
        width={400}
        className="absolute -right-36 -top-12 rotate-[30deg] -z-10"
      />
      <Image
        src={bgImg}
        alt="background image"
        width={200}
        className="absolute -left-10 top-[50%] -rotate-[24deg] -z-10"
      />
      <Image
        src={bgImg}
        alt="background image"
        width={400}
        className="absolute -right-12 -bottom-24 rotate-[10deg] -z-10"
      />
    </div>
  );
};

export default BackGroundEmoji;
