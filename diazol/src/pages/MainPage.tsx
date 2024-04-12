"use client";
import MainBtn from "@/components/common/MainBtn";
import Image from "next/image";
import bpm_logo from "../assets/images/bpm_logo.png";
import React from "react";

type Props = {};

const MainPage = (props: Props) => {
  return (
    <div className="flex flex-col items-center">
      <Image src={bpm_logo} alt="logo" priority className="mt-32 w-40 h-auto" />
      <h1 className="text-white font-bold text-2xl">BPM</h1>
      <div className="flex justify-center">
        <MainBtn
          text="나의 BPM 체크하기"
          available={true}
          route="survey/type"
        />
      </div>
    </div>
  );
};

export default MainPage;
