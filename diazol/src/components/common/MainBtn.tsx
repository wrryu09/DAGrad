import { useRouter } from "next/navigation";
import React from "react";

type Props = { text: string; route?: string };

const MainBtn = (props: Props) => {
  const router = useRouter();
  return (
    <div
      className="w-9/12 py-3 flex bg-white rounded-md items-center justify-center font-semibold hover:bg-slate-100"
      onClick={() => {
        if (props.route) {
          router.push(props.route);
        }
      }}
    >
      <p>{props.text}</p>
    </div>
  );
};

export default MainBtn;
