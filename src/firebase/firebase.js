import firebase from "firebase/compat";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

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
const st = firebase.storage();

export { auth, db, st };

export const getUserInfo = async (id) => {
  const dbRef = db.collection("users").doc(id);
  const doc = await dbRef.get();
  const userData = doc.data();
  return userData;
};

export const updateUserInfo = async (id, data) => {
  const dbRef = db.collection("users").doc(id);
  const doc = await dbRef.get();
  dbRef.set(data, { merge: true });
  console.log("ok", data);
};
