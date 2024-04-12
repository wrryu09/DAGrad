import axios from "axios";
/** get romanized text */
export const getRomanWord = async (text: string) => {
  try {
    const newTxt = text.replace(" ", "");
    console.log(newTxt)
    const translated = await axios.get(
      `${process.env.NEXT_PUBLIC_MY_SERVER}/romanize?text=${newTxt}`
    );
    console.log(translated.data.translated);

    return translated.data.translated;
  } catch (e) {
    console.log(e);
    // romanization 실패시 exception 스트링 반환
    return "exception";
  }
};
