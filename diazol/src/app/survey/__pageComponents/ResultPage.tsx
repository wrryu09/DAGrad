"use client";
import Spinner from "@/components/common/\bSpinner";
import TopBar from "@/components/common/TopBar";
import CheckCenter from "@/components/result/CheckCenter";
import StressResult from "@/components/result/StressResult";
import { UserDataType } from "@/types";
import changeToMorse from "@/utils/changeToMorse";
import React, { useEffect, useState } from "react";

type Props = {
  userData: UserDataType;
};

const ResultPage = ({ userData }: Props) => {
  const [showRes, setShowRes] = useState(false);
  const [morseCode, setMorseCode] = useState<string>("");

  const handleMorseCode = (text: string) => setMorseCode(text);

  const showResult = () => {
    setShowRes(true);
  };

  useEffect(() => {
    changeToMorse(userData.stressWord, handleMorseCode);
  }, []);

  return (
    <div>
      <TopBar />
      {showRes ? (
        <StressResult userData={userData} morseCode={morseCode} />
      ) : (
        <>
          {morseCode !== "" ? (
            <CheckCenter
              userData={userData}
              showResult={showResult}
              morseCode={morseCode}
            />
          ) : (
            <div className="flex items-center justify-center mt-60">
              <Spinner />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ResultPage;
