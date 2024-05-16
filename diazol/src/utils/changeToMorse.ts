import { getMorseCode } from "@/apis/morseApi";
import { getRomanWord } from "@/apis/translateApi";

/** getRomanWord를 이용한 모스부호 제작 */
const changeToMorse = async (
  sword: string,
  handleMorseCode: (text: string) => void
) => {
  if (sword !== "-1") {
    const romanStressWord = await getRomanWord(sword);
    if (typeof romanStressWord === "string") {
      const morseStressCode = await getMorseCode(romanStressWord);
      handleMorseCode(morseStressCode);
    }
  } else {
    console.log("error: no stress word stored");
  }
};

export default changeToMorse;
