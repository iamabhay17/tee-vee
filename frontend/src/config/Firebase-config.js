// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCXMbJ79w06_SMwWT7ZC7xWsQDHs4mTavU",
  authDomain: "teevee-e5869.firebaseapp.com",
  projectId: "teevee-e5869",
  storageBucket: "teevee-e5869.appspot.com",
  messagingSenderId: "728483552407",
  appId: "1:728483552407:web:d1db983653ecae0ce51dd2",
  measurementId: "G-WBXT44BGWC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
