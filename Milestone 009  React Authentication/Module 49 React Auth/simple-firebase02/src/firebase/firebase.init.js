// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzyGMOlBxAqHzapeAGsO-RFz_o0mcd3Ow",
  authDomain: "simple-firebase02-b7cca.firebaseapp.com",
  projectId: "simple-firebase02-b7cca",
  storageBucket: "simple-firebase02-b7cca.firebasestorage.app",
  messagingSenderId: "47268766599",
  appId: "1:47268766599:web:e3c251f922fba36e282922"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);