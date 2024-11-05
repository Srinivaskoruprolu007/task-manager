// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD1XX9x1kOYgdv9POM8jRnFPRa8Awhxjmc",
  authDomain: "taskmanager-112.firebaseapp.com",
  projectId: "taskmanager-112",
  storageBucket: "taskmanager-112.firebasestorage.app",
  messagingSenderId: "1098600889415",
  appId: "1:1098600889415:web:693e97b8795e39894d0562",
  measurementId: "G-FNKSP484JJ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
