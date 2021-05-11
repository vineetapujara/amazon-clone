import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2KiBtNA9NlNHVLlGkyGl34CaW8iA8xO8",
  authDomain: "clone-7a6b5.firebaseapp.com",
  projectId: "clone-7a6b5",
  storageBucket: "clone-7a6b5.appspot.com",
  messagingSenderId: "347062777617",
  appId: "1:347062777617:web:4e30e74876086b979dbeb0",
  measurementId: "G-YQ0ZFQNGRV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
