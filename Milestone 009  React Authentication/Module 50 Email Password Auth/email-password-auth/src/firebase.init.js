// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Do not share config in public
const firebaseConfig = {
  apiKey: "AIzaSyAZeQQSqQyUZHp5xT0uYAvkjk5eK_lY_dQ",
  authDomain: "email-password-auth-68174.firebaseapp.com",
  projectId: "email-password-auth-68174",
  storageBucket: "email-password-auth-68174.firebasestorage.app",
  messagingSenderId: "50212438098",
  appId: "1:50212438098:web:53396661cc961581f7df8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);