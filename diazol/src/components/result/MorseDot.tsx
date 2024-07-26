type MorseDotProps = {
  type: string;
};

const MorseDot = ({ type }: MorseDotProps) => {
  const dotStyle = "bg-lightGrey w-12 h-12 rounded-full";
  const dotBarStyle = "bg-lightGrey w-12 h-32 rounded-full";
  const blankStyle = "w-12 h-32 rounded-full";
  return (
    <>
      {type === "-" && <div className={dotBarStyle} />}
      {type === "." && <div className={dotStyle} />}
      {type === " " && <div className={blankStyle} />}
    </>
  );
};

export default MorseDot;
