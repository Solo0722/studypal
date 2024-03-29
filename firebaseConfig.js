// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const API_KEY = process.env.EXPO_PUBLIC_FIREBASE_API_KEY;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQXCQUksz4sqIvwTH1 - HJJy1_a6_zz_aI",
  authDomain: "studypal-1f2ef.firebaseapp.com",
  projectId: "studypal-1f2ef",
  storageBucket: "studypal-1f2ef.appspot.com",
  messagingSenderId: "728499823804",
  appId: "1:728499823804:web:8cfafa181f081db6f0dcb9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const googleProvider = new GoogleAuthProvider();

export default app;
