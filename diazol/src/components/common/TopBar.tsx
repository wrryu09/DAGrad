import Link from "next/link";

const TopBar = () => {
  return (
    <div className="h-10 w-full bg-black flex items-center">
      <Link href={"/"} className="text-white px-4 font-bold text-lg">
        BPM
      </Link>
    </div>
  );
};

export default TopBar;
