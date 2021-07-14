import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyASQalRZHYJ21zHXcZj2lPmR12NpfbBMnQ",
  authDomain: "challenge-f4eff.firebaseapp.com",
  projectId: "challenge-f4eff",
  storageBucket: "challenge-f4eff.appspot.com",
  messagingSenderId: "728675622757",
  appId: "1:728675622757:web:e9dc5eb00ab458321c0b8c",
  measurementId: "G-VB7FQZ8P48"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};