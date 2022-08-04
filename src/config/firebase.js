// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-Yqa66iq0uxOankEdG-9d0Xylus1r2Z4",
  authDomain: "musik-bagus.firebaseapp.com",
  projectId: "musik-bagus",
  storageBucket: "musik-bagus.appspot.com",
  messagingSenderId: "855406207108",
  appId: "1:855406207108:web:519f530687c557f57b22d1",
  measurementId: "G-2G94E7HNHX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };

