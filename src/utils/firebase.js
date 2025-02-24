// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut,signInWithRedirect } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "realtime-dashboard-007.firebaseapp.com",
  projectId: "realtime-dashboard-007",
  storageBucket: "realtime-dashboard-007.firebasestorage.app",
  messagingSenderId: "1008822501840",
  appId: "1:1008822501840:web:0c9f75c15cb49bef0179d5",
  measurementId: "G-CLR5G12475"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

export { auth, provider, signInWithPopup, signInWithRedirect, signOut };