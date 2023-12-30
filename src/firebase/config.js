// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG4xaUEDFF4EJgRpk4JjKCXgOCVHR7uRc",
  authDomain: "react-cursos-1d59d.firebaseapp.com",
  projectId: "react-cursos-1d59d",
  storageBucket: "react-cursos-1d59d.appspot.com",
  messagingSenderId: "711085741506",
  appId: "1:711085741506:web:e27a77a2f86068fda6f25b"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

