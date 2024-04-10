// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACYuisiFBwMZZIz2mlDXgb8Shr9lutgq8",
  authDomain: "expense-tracker-fa148.firebaseapp.com",
  projectId: "expense-tracker-fa148",
  storageBucket: "expense-tracker-fa148.appspot.com",
  messagingSenderId: "524928206149",
  appId: "1:524928206149:web:704a8eb399963aa36c2a2c",
  measurementId: "G-31YBCEPDD3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
