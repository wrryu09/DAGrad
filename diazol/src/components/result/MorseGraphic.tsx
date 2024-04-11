import React from "react";
import MorseDot from "./MorseDot";

type Props = {};

const MorseGraphic = (props: Props) => {
  const sampleMorseCode = ". . ..--.  ..---..--.";
  const samleMorseCodeArr = sampleMorseCode.split("");
  return (
    <div className="h-3/5 w-full flex justify-center overflow-hidden">
      <div className="h-full w-fit flex flex-col flex-wrap gap-6 justify-center animate-moveMorse">
        {samleMorseCodeArr.map((c, idx) => {
          return <MorseDot key={c + idx + "morsedot"} type={c} />;
        })}
      </div>
    </div>
  );
};

export default MorseGraphic;
