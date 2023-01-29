import { firebase, FieldValue } from "../lib/firebase";

export async function doesUserNameExits(userName) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", userName)
    .get();

  //   console.log(result);

  return result.docs.map((user) => user.data().length > 0);
}

export async function getElementById(userId) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("userId", "=", userId)
    .get();

  const user = result.docs.map((items) => ({
    ...items.data(),
    docId: items.id,
  }));

  return user;
}
