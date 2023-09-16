// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAA_cy-OuSVzVo9k9vuOC6oU1n093_ihNk",
    authDomain: "expense-tracker-edfe2.firebaseapp.com",
    projectId: "expense-tracker-edfe2",
    storageBucket: "expense-tracker-edfe2.appspot.com",
    messagingSenderId: "605376336438",
    appId: "1:605376336438:web:911cec84bee3e111b1be97",
    measurementId: "G-57T4X2N8BY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// firebase login
// firebase init
// firebase deploy
