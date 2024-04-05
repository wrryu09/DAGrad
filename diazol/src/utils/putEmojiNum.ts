import { db } from "@/utils/firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

/** store emojiNum to firestore */
export const putEmojiNum = async (num: number) => {
  const emojiDBRef = doc(db, "survey", "emoji");
  const date = new Date();
  try {
    await updateDoc(emojiDBRef, {
      emo: arrayUnion({ date, num }),
    });
  } catch (e) {
    console.log(e);
  }
};
