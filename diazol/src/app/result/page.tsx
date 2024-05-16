"use client";
import Spinner from "@/components/common/\bSpinner";
import TopBar from "@/components/common/TopBar";
import CheckCenter from "@/components/result/CheckCenter";
import StressResult from "@/components/result/StressResult";
import { useData } from "@/utils/DataContext";
import changeToMorse from "@/utils/changeToMorse";
import changeToStableMorse from "@/utils/changeToStableMorse";
import React, { useEffect, useState } from "react";

type Props = {};

const Page = (props: Props) => {
  const [showRes, setShowRes] = useState(false);
  const { data } = useData();
  const [morseCode, setMorseCode] = useState<string>("");

  const handleMorseCode = (text: string) => setMorseCode(text);

  const showResult = () => {
    setShowRes(true);
  };

  useEffect(() => {
    // changeToMorse(data.stressWord, handleMorseCode);
    changeToStableMorse(data.stressWord, handleMorseCode);
  }, []);

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
