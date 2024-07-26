import React, { useEffect, useState } from "react";
import MainBtn from "../common/MainBtn";
import { putUserData } from "@/utils/putEmojiNum";
import MorseGraphic from "./MorseGraphic";
import { playMorseSound } from "@/utils/playMorseSound";
import { UserDataType } from "@/types";

type CheckCenterProps = {
  userData: UserDataType;
  showResult: () => void;
  morseCode: string;
};

const CheckCenter = ({ userData, showResult, morseCode }: CheckCenterProps) => {
  const [seeResult, setSeeResult] = useState(false);

  const lastSubmit = async () => {
    await putUserData(userData);
    showResult();
    playMorseSound(morseCode, userData.stressType);
  };
  useEffect(() => {
    setTimeout(() => {
      setSeeResult(true);
    }, 3000);
  }, []);
  return (
    <div>
      {seeResult ? (
        <div className="flex justify-center text-center">
          <div className="text-3xl font-semibold mt-20 text-white leading-10">
            <h1>중앙에서</h1>
            <h1>결과를 확인하세요!</h1>
          </div>
          <MainBtn text="확인 !" available={true} onClick={lastSubmit} />
        </div>
      ) : (
        <div className="h-dvh flex justify-center items-center">
          <MorseGraphic morseCode={morseCode} />
        </div>
      )}
    </div>
  );
};

export default CheckCenter;
