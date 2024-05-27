import { getMorseCode } from "@/apis/morseApi";
import { convert } from "hangul-romanization";

/** getRomanWord를 이용한 모스부호 제작 */
const changeToMorse = (
  sword: string,
  handleMorseCode: (text: string) => void
) => {
  let morseStressCode = "..- -. -.- -. --- .-- -.";
  if (sword !== "-1") {
    const romanStressWord = convert(sword);
    console.log(romanStressWord);
    if (romanStressWord) {
      morseStressCode = getMorseCode(romanStressWord);
    }
  } else {
    console.log("error: no stress word stored");
  }
  handleMorseCode(morseStressCode);
};

export default changeToMorse;
