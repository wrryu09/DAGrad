"use client";

import { useRouter } from "next/navigation";
import React from "react";

type MainBtnProps = {
  text: string;
  route?: string;
  available?: boolean;
  onScoreReceived?: (score: number) => void;
  score?: number;
  onClick?: () => void;
};

const MainBtn = ({
  text,
  route,
  available,
  onScoreReceived,
  score,
  onClick,
}: MainBtnProps) => {
  const router = useRouter();
  const availableStyle =
    "text-white border-diazolRed bg-black/60 border-[0.5px]";
  const unavailableStyle =
    "text-midGrey border-darkGrey/20  bg-white/opacity-5";
  return (
    <div
      className={`fixed w-10/12 border rounded-full max-w-[500px] bottom-16 py-3 flex items-center justify-center font-semibold backdrop-blur-md ${
        available === false ? unavailableStyle : availableStyle
      }`}
      onClick={() => {
        if (available) {
          // route to page
          if (route) {
            router.push(route);
          }

          // set score per question
          if (onScoreReceived && score) {
            onScoreReceived(score);
          }

          if (onClick) {
            onClick();
          }
        }
      }}
    >
      <p>{text}</p>
    </div>
  );
};

export default MainBtn;
