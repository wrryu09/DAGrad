import { getMorseCode } from "@/apis/morseApi";

/** romanizatin API 사용하지 않는 morsecode 생성 */
const changeToStableMorse = async (
  sword: string,
  handleMorseCode: (text: string) => void
) => {
  if (sword !== "-1") {
    const engRegx = /[a-zA-Z]/;
    let stressWord = "";
    // 영소문자, 대문자로 이루어진 경우
    if (engRegx.test(sword)) {
      stressWord = await getMorseCode(sword);
    } else {
      // 다른 기호나 언어 포함하는 경우
      const stressWordLen = sword.length;
      const randomStressWord = makeRandomAlphabet(stressWordLen);
      stressWord = await getMorseCode(randomStressWord);
    }
    handleMorseCode(stressWord);
  } else {
    console.log("error: no stress word stored");
  }
};

/** 영문 알파벳 아닐 경우 랜덤 알파벳으로 변환 */
const makeRandomAlphabet = (len: number) => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let alpha = "";
  for (let i = 0; i < len; i++) {
    alpha += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return alpha;
};

export default changeToStableMorse;
