import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  text: string;
  route?: string;
  available?: boolean;
  setScore?: (score: number) => void;
  score?: number;
};

const MainBtn = (props: Props) => {
  const router = useRouter();
  const availableStyle = "bg-white text-black hover:bg-lightGrey";
  const unavailableStyle = "bg-darkGrey text-midGrey";
  return (
    <div
      className={`absolute w-10/12 bottom-12 py-3 flex rounded-md items-center justify-center font-semibold ${
        props.available === false ? unavailableStyle : availableStyle
      }`}
      onClick={() => {
        if (props.route && props.available !== false) {
          router.push(props.route);
        }
        if (props.setScore && props.score) {
          props.setScore(props.score);
        }
      }}
    >
      <p>{props.text}</p>
    </div>
  );
};

export default MainBtn;
