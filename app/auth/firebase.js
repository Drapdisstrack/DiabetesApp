import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from 'firebase/analytics';
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';

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

isSupported().then((supported) => {
  if (supported) {
    const analytics = getAnalytics(app);
    console.log('Firebase Analytics inicializado');
  } else {
    console.log('Firebase Analytics no es compatible en este entorno');
  }
}).catch((error) => {
  console.error('Error al comprobar compatibilidad con Firebase Analytics:', error);
});

// Initialize Firebase Auth with persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };

// Initialize Firestore
export const db = getFirestore(app);
