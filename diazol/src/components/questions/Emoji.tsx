import Image, { StaticImageData } from "next/image";

type EmojiProps = {
  idx: number;
  emo: [string, StaticImageData];
  current: number;
  selectEmoji: (num: number) => void;
};

const Emoji = ({ idx, emo, current, selectEmoji }: EmojiProps) => {
  return (
    <Image
      key={idx}
      src={emo[1]}
      width={80}
      height={80}
      alt="stress emoji"
      className={`rounded-full border-2 ${
        current === idx
          ? "shadow-midGrey shadow-xl border-white"
          : "border-darkGrey"
      }`}
      onClick={() => {
        selectEmoji(idx);
      }}
    />
  );
};

export default Emoji;
