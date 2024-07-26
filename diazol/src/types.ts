import { StaticImageData } from "next/image";

export type QuestionDataType = {
  title: string;
  content: string;
};

export type NickNameType = {
  name: string;
  content: string;
  image: StaticImageData | string;
  qrImage: StaticImageData;
};

export type NickNameIdxType =
  | "low1"
  | "low2"
  | "low3"
  | "mid1"
  | "mid2"
  | "mid3"
  | "high1"
  | "high2"
  | "high3";

export interface UserDataType {
  stressType: number;
  choiceScore: number;
  emojiNum: number;
  stressWord: string;
}
