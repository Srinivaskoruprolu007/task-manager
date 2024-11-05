/* eslint-disable no-undef */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Retrieve Firebase API key from environment variable
const apiKey = import.meta.env.VITE_FIREBASE_API; 

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "taskmanager-112.firebaseapp.com",
  projectId: "taskmanager-112",
  storageBucket: "taskmanager-112.firebasestorage.app",
  messagingSenderId: "1098600889415",
  appId: "1:1098600889415:web:693e97b8795e39894d0562",
  measurementId: "G-FNKSP484JJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
