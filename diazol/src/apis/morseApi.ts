import axios from "axios";

/** get morse code from english text */
export const getMorseCode = async (text: string) => {
  const morseCode = await axios.get(
    `https://api.funtranslations.com/translate/morse.json?text=${text}`
  );
  return morseCode.data.contents.translated;
};
