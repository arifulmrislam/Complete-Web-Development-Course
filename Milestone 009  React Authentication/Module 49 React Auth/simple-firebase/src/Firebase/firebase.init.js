// Do not store config on the client side

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDykmA6U7VyBb3U3FZQvi6jffaqUmnDp84",
  authDomain: "simple-firebase-bdedc.firebaseapp.com",
  projectId: "simple-firebase-bdedc",
  storageBucket: "simple-firebase-bdedc.firebasestorage.app",
  messagingSenderId: "815259873091",
  appId: "1:815259873091:web:85f1740ac38d83dab9c9f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;