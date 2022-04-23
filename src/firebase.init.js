// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0ZIv9oyKJwNKXrPIHDJxzLILSu5eh4Eg",
  authDomain: "ema-john-shopping-4a7d2.firebaseapp.com",
  projectId: "ema-john-shopping-4a7d2",
  storageBucket: "ema-john-shopping-4a7d2.appspot.com",
  messagingSenderId: "132140095267",
  appId: "1:132140095267:web:9f239358a6c308d5f8de96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;