/** get morse code from english text */
export const getMorseCode = (text: string) => {
  const { encode } = require("morsee");
  try {
    let morseCode = encode(text.trim());
    morseCode = morseCode.trim();
    if (morseCode.length < 1) {
      console.log("dummy morse");
      morseCode = ". .-. .-. --- .-. --";
    }
    return morseCode;
  } catch (e) {
    console.log(e, "error occured");
    return ". .-. .-. --- .-. --- -.-. -.-. ..- .-. . -..";
  }
};
