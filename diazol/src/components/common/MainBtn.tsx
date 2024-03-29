import { useRouter } from "next/navigation";
import React from "react";

type Props = { text: string; route?: string; available?: boolean };

const MainBtn = (props: Props) => {
  const router = useRouter();
  const availableStyle = "bg-white text-black hover:bg-lightGrey";
  const unavailableStyle = "bg-darkGrey text-midGrey";
  return (
    <div
      className={`w-full py-3 flex rounded-md items-center justify-center font-semibold ${
        props.available === false ? unavailableStyle : availableStyle
      }`}
      onClick={() => {
        if (props.route && props.available !== false) {
          router.push(props.route);
        }
      }}
    >
      <p>{props.text}</p>
    </div>
  );
};

export default MainBtn;
