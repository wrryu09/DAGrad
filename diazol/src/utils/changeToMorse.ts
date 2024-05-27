import { getMorseCode } from "@/apis/morseApi";
import { convert } from "hangul-romanization";

/** getRomanWord를 이용한 모스부호 제작 */
const changeToMorse = (
  sword: string,
  handleMorseCode: (text: string) => void
) => {
  if (sword !== "-1") {
    const romanStressWord = convert(sword);
    console.log(romanStressWord);

    if (romanStressWord) {
      // unknown
      let morseStressCode = "..- -. -.- -. --- .-- -.";
      try {
        morseStressCode = getMorseCode(romanStressWord);
      } catch (error) {
        console.log(error);
      }
      handleMorseCode(morseStressCode);
    }
  } else {
    console.log("error: no stress word stored");
  }
};

export default changeToMorse;
