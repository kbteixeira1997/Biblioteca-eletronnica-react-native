import firebase from "firebase";
//require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBtr23LydlEUkFxJumYuGVQIv8wagqa7SQ",
  authDomain: "biblioteca-943d0.firebaseapp.com",
  projectId: "biblioteca-943d0",
  storageBucket: "biblioteca-943d0.appspot.com",
  messagingSenderId: "302539814522",
  appId: "1:302539814522:web:1d061612540eca6887adc3"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

