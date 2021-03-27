import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDq55jItXA4xYbAlwb_GAzSvUJIHHQ2C4o",
  authDomain: "thefullcart-9.firebaseapp.com",
  projectId: "thefullcart-9",
  storageBucket: "thefullcart-9.appspot.com",
  messagingSenderId: "196180925177",
  appId: "1:196180925177:web:56e6835495bb42626a6028",
  measurementId: "G-4J3D2WBEGK",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
