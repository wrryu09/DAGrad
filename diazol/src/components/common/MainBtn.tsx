import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  text: string;
  route?: string;
  available?: boolean;
  onScoreReceived?: (score: number) => void;
  score?: number;
  increasePhase?: () => void;
  onclick?: () => void;
};

const MainBtn = (props: Props) => {
  const router = useRouter();
  const availableStyle = "text-white border-diazolRed";
  const unavailableStyle = "text-midGrey border-midGrey";
  return (
    <div
      className={`fixed w-10/12 border rounded-full max-w-[500px] bottom-16 py-3 flex items-center justify-center font-semibold bg-white/opacity-5 backdrop-blur-md ${
        props.available === false ? unavailableStyle : availableStyle
      }`}
      onClick={() => {
        if (props.available) {
          // route to page
          if (props.route) {
            router.push(props.route);
          }

          // set score per question
          if (props.onScoreReceived && props.score) {
            props.onScoreReceived(props.score);
          }

          // increase phase at survey/q
          if (props.increasePhase) {
            props.increasePhase();
          }

          if (props.onclick) {
            props.onclick();
          }
        }
      }}
    >
      <p>{props.text}</p>
    </div>
  );
};

export default MainBtn;
