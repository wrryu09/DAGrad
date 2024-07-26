import { UserDataType } from "@/types";
import { db } from "@/utils/firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

/** store data to firestore */
export const putUserData = async (userData: UserDataType) => {
  const userDBRef = doc(db, "survey", "data");
  const date = new Date();
  try {
    await updateDoc(userDBRef, {
      data: arrayUnion({ date, userData }),
    });
  } catch (e) {
    console.log(e);
  }
};
