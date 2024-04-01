"use client";
import MainBtn from "@/components/common/MainBtn";
import React from "react";

type Props = {};

const MainPage = (props: Props) => {
  return (
    <div className="flex flex-col items-center">
      <p>LogoImg</p>
      <MainBtn text="나의 BPM 체크하기" route="survey/type" />
    </div>
  );
};

export default MainPage;
