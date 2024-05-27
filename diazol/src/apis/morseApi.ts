/** get morse code from english text */
export const getMorseCode = (text: string) => {
  const { encode } = require("morsee");
  let morseCode = encode(text.trim());
  morseCode = morseCode.trim();
  if (morseCode.length < 1) {
    console.log("dummy morse");
    morseCode = ". .-. .-. --- .-. --";
  }
  return morseCode;
};
