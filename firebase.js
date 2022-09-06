import firebase from "firebase";
import { initializeApp } from "firebase";
import "firebase/firestore";
import "firebase/storage";
import * as SecureStore from "expo-secure-store";

const firebaseConfig = {
  apiKey: "AIzaSyChY02tljDy8xBfmBMuPb7ThibXfkUInnI",
  authDomain: "ecohacks-824c0.firebaseapp.com",
  projectId: "ecohacks-824c0",
  storageBucket: "ecohacks-824c0.appspot.com",
  messagingSenderId: "696414199160",
  appId: "1:696414199160:web:5a5f32f3834f367e4d7c8d",
  measurementId: "G-5WN8S5FVJQ",
};

// Initialize Firebase

if (!firebase.apps.length) {
  const app = initializeApp(firebaseConfig);
} else {
}

async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    console.log("🔐 Here's your value 🔐 \n" + JSON.parse(result));
    return JSON.parse(result);
  } else {
    alert("No values stored under that key.");
  }
}

const db = firebase.firestore();

const random = () => {
  return new Promise((resolve, reject) => {
    db.collection("Posts")
      .get()
      .then((querySnapshot) => {
        let tempLst = [];
        querySnapshot.forEach((doc) => {
          tempLst.push(doc.data());
          resolve(tempLst);
        });
      });
  });
};

random().then((result) => {
  console.log(result);
});

export default firebase;
