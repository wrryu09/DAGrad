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
  const availableStyle = "bg-white text-black hover:bg-lightGrey";
  const unavailableStyle = "bg-darkGrey text-midGrey";
  return (
    <div
      className={`fixed w-10/12 bottom-16 py-3 flex rounded-md items-center justify-center font-semibold ${
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
