"use client";
import MainBtn from "@/components/common/MainBtn";
import React from "react";

type Props = {};

const MainPage = (props: Props) => {
  return (
    <div className="flex flex-col">
      <p>LogoImg</p>
      <div className="flex justify-center">
      <MainBtn text="나의 BPM 체크하기" available={true} route="survey/type" />
      </div>
    </div>
  );
};

export default MainPage;
