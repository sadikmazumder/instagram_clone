import { firebase, FieldValue } from "../lib/firebase";

export async function doesUserNameExits(username) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();

  //   console.log(result);

  return result.docs.map((user) => user.data().length > 0);
}

// get user from the firestore where userId  === userId ()

export async function getUserByUserId(userId) {
  const result = await firebase.firestore().collection("users");
  const users = await result.where("userId", "==", userId).get();

  const user = users.docs.map((items) => ({
    ...items.data(),
    docId: items.id,
  }));

  return user;
}

export async function getSuggestedProfiles(userId, following) {
  const result = await firebase.firestore().collection("users").limit(10).get();
  return result.docs
    .map((user) => ({ ...user.data(), docId: user.id }))
    .filter(
      (profile) =>
        profile.userId != userId && !following.includes(profile.userId)
    );
}
