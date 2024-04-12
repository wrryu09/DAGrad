const express = require("express");
const router = express.Router();
router.get("/", async function (req, res, next) {
  const text = req.query.text;
  const axios = require("axios");

  const getRomanized = async () => {
    try {
      const translated = await axios.get(
        `https://naveropenapi.apigw.ntruss.com/krdict/v1/romanization?query=${text}`,
        {
          headers: {
            "X-NCP-APIGW-API-KEY-ID": process.env.X_NCP_APIGW_API_KEY_ID,
            "X-NCP-APIGW-API-KEY": process.env.X_NCP_APIGW_API_KEY,
          },
        }
      );
      console.log(translated.data.aResult[0].aItems[0].name);
      const data = { translated: translated.data.aResult[0].aItems[0].name };
      return data;
    } catch (e) {
      console.log(e);
      // romanization 실패시 exception 스트링 반환
      const data = { translated: "exception" };
      return data;
    }
  };
  const romanizedText = await getRomanized();
  res.send(romanizedText);
});

module.exports = router;
