// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-e83b6.firebaseapp.com",
  projectId: "mern-auth-e83b6",
  storageBucket: "mern-auth-e83b6.appspot.com",
  messagingSenderId: "609418613920",
  appId: "1:609418613920:web:4a0b1ea1be3fc33473e5c5",
  measurementId: "G-L4RR0L04X2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);