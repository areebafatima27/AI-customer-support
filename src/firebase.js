// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAo3ppZdYm13rsacyfKCWHP3BLU7yoNWJE",
  authDomain: "login-814af.firebaseapp.com",
  projectId: "login-814af",
  storageBucket: "login-814af.appspot.com",
  messagingSenderId: "181564391317",
  appId: "1:181564391317:web:6b7571e5bcf0d94759c09c",
  measurementId: "G-RTDWRD591L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);
