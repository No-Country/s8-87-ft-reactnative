import Constants from "expo-constants";
import firebase from "firebase/compat";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuAjTCVyFa9KP1ZvP39wWA93FOZ6YhHuI",
  authDomain: "b-stage-b16c4.firebaseapp.com",
  projectId: "b-stage-b16c4",
  storageBucket: "b-stage-b16c4.appspot.com",
  messagingSenderId: "469103376320",
  appId: "1:469103376320:web:5b65a033c682e5a33d3a25",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(app);

const db = firebase.firestore();

export { auth, db };

export const getUserInfo = async (id) => {
  const dbRef = db.collection("users").doc(id);
  const doc = await dbRef.get();
  const user = doc.data();
  return user;
};
