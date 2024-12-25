// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcQyb_bVZ3jMmh6OT17gORYVgONwjCWHs",
  authDomain: "videovibe-db928.firebaseapp.com",
  projectId: "videovibe-db928",
  storageBucket: "videovibe-db928.firebasestorage.app",
  messagingSenderId: "758305624320",
  appId: "1:758305624320:web:4a0a12e17607391e3ca3e5"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);