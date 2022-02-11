import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const firebaseApp = firebase.initializeApp( {
  apiKey: "AIzaSyBbPGRD5Qkngcq0wFYjtNZsOK1HV5KWU7c",
  authDomain: "clone-1d5c6.firebaseapp.com",
  projectId: "clone-1d5c6",
  storageBucket: "clone-1d5c6.appspot.com",
  messagingSenderId: "1050924795114",
  appId: "1:1050924795114:web:d88b157a694e62d5a9c393",
});

const auth = firebase.auth();

export {auth};

