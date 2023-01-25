import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";

//import Firebase from 'firebase/app';
//import 'firebase/firestore';
//import 'firebase/auth';

// Here is I want import the seed file

//import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyBEgFwQ-IhZ4qZ_XdkdsRMZzQ8OUQ3FXwg",
  authDomain: "instagram-yt-c2a14.firebaseapp.com",
  projectId: "instagram-yt-c2a14",
  storageBucket: "instagram-yt-c2a14.appspot.com",
  messagingSenderId: "282302953121",
  appId: "1:282302953121:web:45d27becd5d6b4c3f322e0",
};

const Firebase = firebase.initializeApp(config);
const { FieldValue } = firebase.firestore;

// Here is where I want to call the seed file (Only ONCE!)

export { Firebase, FieldValue };
