import React from "react";
import bgImg from "../../assets/images/bgEmoji.png";
import Image from "next/image";
type Props = {};

const BackGroundEmoji = (props: Props) => {
  return (
    <div className="absolute w-full h-full overflow-clip -z-10">
      <Image
        src={bgImg}
        alt="background image"
        width={400}
        className="-right-36 -top-12 rotate-[30deg] translate-x-60 -translate-y-24 -z-10"
      />
      <Image
        src={bgImg}
        alt="background image"
        width={200}
        className="-left-10 top-[50%] -rotate-[24deg] -translate-x-[60px] -z-10"
      />
      <Image
        src={bgImg}
        alt="background image"
        width={400}
        className="-right-12 -bottom-24 rotate-[10deg] translate-x-60 -z-10"
      />
    </div>
  );
};

export default BackGroundEmoji;
