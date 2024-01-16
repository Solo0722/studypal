// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const API_KEY = process.env.EXPO_PUBLIC_FIREBASE_API_KEY;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "studypal-1f2ef.firebaseapp.com",
  projectId: "studypal-1f2ef",
  storageBucket: "studypal-1f2ef.appspot.com",
  messagingSenderId: "728499823804",
  appId: "1:728499823804:web:8cfafa181f081db6f0dcb9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

export default app;
