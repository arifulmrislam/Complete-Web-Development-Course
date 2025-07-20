// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBswbQRXfBcgblzrUoz_7q0bMC-_qnbLSU',
  authDomain: 'auth-moha-milon-c7c18.firebaseapp.com',
  projectId: 'auth-moha-milon-c7c18',
  storageBucket: 'auth-moha-milon-c7c18.firebasestorage.app',
  messagingSenderId: '888222169848',
  appId: '1:888222169848:web:f8cbaabb38b9dbc63cd90d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);