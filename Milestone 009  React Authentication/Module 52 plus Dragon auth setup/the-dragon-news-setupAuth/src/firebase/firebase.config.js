// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuH8BDkTmavkKyQ91dvvjLd7kTY7b56zI",
  authDomain: "dragon-news-37892.firebaseapp.com",
  projectId: "dragon-news-37892",
  storageBucket: "dragon-news-37892.firebasestorage.app",
  messagingSenderId: "1081342868688",
  appId: "1:1081342868688:web:2a95a94821444ac81cf2d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
