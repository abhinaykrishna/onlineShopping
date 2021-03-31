import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

// Fetching the data from firestore

firestore
  .collection("users")
  .doc("Mg5Ei9Vn0vW9U2RChGwT")
  .collection("cartItems")
  .doc("aVRkRgWaMx4WUdZz4dOI");

// Alternate way to fetch data
firestore.doc("/users/Mg5Ei9Vn0vW9U2RChGwT/cartItems/aVRkRgWaMx4WUdZz4dOI");
firestore.collection("/users/Mg5Ei9Vn0vW9U2RChGwT/cartItems");
