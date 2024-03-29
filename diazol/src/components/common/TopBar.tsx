import React from "react";

type Props = {};

const TopBar = (props: Props) => {
  return (
    <div className="h-10 w-full bg-black flex items-center">
      <div className="text-white px-4 font-bold text-lg">BPM</div>
    </div>
  );
};

export default TopBar;
