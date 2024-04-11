import React, { useEffect, useState } from "react";
import MainBtn from "../common/MainBtn";
import { useData } from "@/utils/DataContext";
import { putUserData } from "@/utils/putEmojiNum";
import MorseGraphic from "./MorseGraphic";

type Props = {
  showResult: () => void;
};

const CheckCenter = (props: Props) => {
  const { data } = useData();
  const [seeResult, setSeeResult] = useState(false);

  const lastSubmit = async () => {
    await putUserData(data);
    props.showResult();
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
          <h1 className="text-3xl font-semibold mt-20 text-white leading-10">
            <p>중앙에서</p>
            <p>결과를 확인하세요!</p>
          </h1>
          <MainBtn text="확인 !" available={true} onclick={lastSubmit} />
        </div>
      ) : (
        <div className="h-dvh flex justify-center items-center">
          <MorseGraphic />
        </div>
      )}
    </div>
  );
};

export default CheckCenter;
