// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "nestquest-42519.firebaseapp.com",
  projectId: "nestquest-42519",
  storageBucket: "nestquest-42519.firebasestorage.app",
  messagingSenderId: "756781458449",
  appId: "1:756781458449:web:54e68007994656f7e7bdb0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);