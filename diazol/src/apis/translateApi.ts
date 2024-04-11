import axios from "axios";

/** get romanized text */
export const getRomanWord = async (text: string) => {
  try {
    const translated = await axios.get(
      `${process.env.NEXT_PUBLIC_HEROKU}https://naveropenapi.apigw.ntruss.com/krdict/v1/romanization?query=${text}`,
      {
        headers: {
          "X-NCP-APIGW-API-KEY-ID":
            process.env.NEXT_PUBLIC_X_NCP_APIGW_API_KEY_ID,
          "X-NCP-APIGW-API-KEY": process.env.NEXT_PUBLIC_X_NCP_APIGW_API_KEY,
        },
      }
    );
    console.log(translated.data.aResult[0].aItems[0].name);

    return translated.data.aResult[0].aItems[0].name;
  } catch (e) {
    console.log(e);

    // romanization 실패시 exception 스트링 반환
    return "exception";
  }
};
