// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { Firestore, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu3fDu2Btrl9r24BnXEUrUGmakM2qKoB8",
  authDomain: "expense-tracker-2267f.firebaseapp.com",
  projectId: "expense-tracker-2267f",
  storageBucket: "expense-tracker-2267f.appspot.com",
  messagingSenderId: "650316962565",
  appId: "1:650316962565:web:867c45182bc4dcd1ec356c",
  measurementId: "G-VRLKHC1K8Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app)