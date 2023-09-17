// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN0pN13o70KkQTJhfaqh_VRf_WvoiDXpM",
  authDomain: "coderhouse-greencorner.firebaseapp.com",
  projectId: "coderhouse-greencorner",
  storageBucket: "coderhouse-greencorner.appspot.com",
  messagingSenderId: "202088652484",
  appId: "1:202088652484:web:854bd889b2fcf4698c7391",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
