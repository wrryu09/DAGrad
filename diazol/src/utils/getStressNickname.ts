import { smage, smageQr } from "@/assets/images/smage/smage";
import { NickNameIdxType, NickNameType } from "@/types";

const NICKNAME = {
  low1: { name: "Largo", content: "느리고 폭 넓게" },
  low2: { name: "Adagio", content: "느리고 장중하게" },
  low3: { name: "Lento", content: "느리고 무겁게" },
  mid1: { name: "Andante", content: "느리게" },
  mid2: { name: "Adagietto", content: "조금 빠르게" },
  mid3: { name: "Andantino", content: "조금 빠르게" },
  high1: { name: "Vivace", content: "빠르고 경쾌하게" },
  high2: { name: "Presto", content: "빠르고 성급하게" },
  high3: { name: "Allegro", content: "빠르게" },
};

/** 구분된 결과 받아 state에 반영 */
const putNicknameState = (
  setNickname: React.Dispatch<React.SetStateAction<NickNameType>>,
  nicknameState: NickNameIdxType
) => {
  setNickname({
    name: NICKNAME[nicknameState].name,
    content: NICKNAME[nicknameState].content,
    image: smage[nicknameState],
    qrImage: smageQr[nicknameState],
  });
};

/** 스트레스 닉네임 반영 */
export const getStressNickName = (
  setNickname: React.Dispatch<React.SetStateAction<NickNameType>>,
  score: number,
  stressType: number
) => {
  switch (stressType) {
    case 1:
      if (score <= 13) {
        putNicknameState(setNickname, "low1");
      } else if (score <= 26) {
        putNicknameState(setNickname, "mid1");
      } else {
        putNicknameState(setNickname, "high1");
      }
      break;
    case 2:
      if (score <= 13) {
        putNicknameState(setNickname, "low2");
      } else if (score <= 26) {
        putNicknameState(setNickname, "mid2");
      } else {
        putNicknameState(setNickname, "high2");
      }
      break;
    case 3:
      if (score <= 13) {
        putNicknameState(setNickname, "low3");
      } else if (score <= 26) {
        putNicknameState(setNickname, "mid3");
      } else {
        putNicknameState(setNickname, "high3");
      }
      break;
    default:
      console.log("smt went wrong with myStressType");
      break;
  }
};
