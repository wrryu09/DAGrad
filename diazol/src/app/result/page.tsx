"use client";
import TopBar from "@/components/common/TopBar";
import CheckCenter from "@/components/result/CheckCenter";
import StressResult from "@/components/result/StressResult";
import React, { useState } from "react";

type Props = {};

const Page = (props: Props) => {
  const [showRes, setShowRes] = useState(false);
  const showResult = () => {
    setShowRes(true);
  };
  return (
    <div>
      <TopBar />
      {showRes ? <StressResult /> : <CheckCenter showResult={showResult} />}
    </div>
  );
};

export default Page;
