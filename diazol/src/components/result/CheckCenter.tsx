import React from "react";
import MainBtn from "../common/MainBtn";

type Props = {
  showResult: () => void;
};

const CheckCenter = (props: Props) => {
  return (
    <div className="flex justify-center text-center">
      <h1 className="text-3xl font-semibold mt-20 text-white leading-10">
        <p>중앙에서</p>
        <p>결과를 확인하세요!</p>
      </h1>
      <MainBtn text="확인 !" available={true} onclick={props.showResult} />
    </div>
  );
};

export default CheckCenter;
