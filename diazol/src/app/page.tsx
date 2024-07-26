import MainBtn from "@/components/common/MainBtn";
import bpm_logo from "../assets/images/bpm_logo.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Image src={bpm_logo} alt="logo" priority className="mt-32 w-40 h-auto" />
      <div className="flex justify-center">
        <MainBtn text="나의 BPM 체크하기" available={true} route="survey" />
      </div>
    </div>
  );
}
