// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4GNLfuoS42ve2J8v79ShBnLyFQUfiqwA",
  authDomain: "diabetesapp-b04d6.firebaseapp.com",
  projectId: "diabetesapp-b04d6",
  storageBucket: "diabetesapp-b04d6.appspot.com",
  messagingSenderId: "266379904083",
  appId: "1:266379904083:web:665d88c81698d30e7c32a6",
  measurementId: "G-KHTE5CPJ21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
