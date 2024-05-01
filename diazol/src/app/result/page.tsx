"use client";
import { getMorseCode } from "@/apis/morseApi";
import { getRomanWord } from "@/apis/translateApi";
import Spinner from "@/components/common/\bSpinner";
import TopBar from "@/components/common/TopBar";
import CheckCenter from "@/components/result/CheckCenter";
import StressResult from "@/components/result/StressResult";
import { useData } from "@/utils/DataContext";
import React, { useEffect, useState } from "react";

type Props = {};

const Page = (props: Props) => {
  const [showRes, setShowRes] = useState(false);
  const { data } = useData();
  const [morseCode, setMorseCode] = useState<string>("");

  const showResult = () => {
    setShowRes(true);
  };

  useEffect(() => {
    changeToMorse();
  }, []);

  const changeToMorse = async () => {
    if (data.stressWord !== "-1") {
      const romanStressWord = await getRomanWord(data.stressWord);
      if (typeof romanStressWord === "string") {
        const morseStressCode = await getMorseCode(romanStressWord);
        setMorseCode(morseStressCode);
      }
    } else {
      console.log("error: no stress word stored");
    }
  };
  return (
    <div>
      <TopBar />
      {showRes ? (
        <StressResult morseCode={morseCode} />
      ) : (
        <>
          {morseCode !== "" ? (
            <CheckCenter showResult={showResult} morseCode={morseCode} />
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

export default Page;
