import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyBEgFwQ-IhZ4qZ_XdkdsRMZzQ8OUQ3FXwg",
  authDomain: "instagram-yt-c2a14.firebaseapp.com",
  projectId: "instagram-yt-c2a14",
  storageBucket: "instagram-yt-c2a14.appspot.com",
  messagingSenderId: "282302953121",
  appId: "1:282302953121:web:45d27becd5d6b4c3f322e0",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
