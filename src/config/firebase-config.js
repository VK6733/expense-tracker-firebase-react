// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9zJftY3OrHby-X8Apfz6b7iU5vSlJ38k",
  authDomain: "expense-tracker-60e8f.firebaseapp.com",
  projectId: "expense-tracker-60e8f",
  storageBucket: "expense-tracker-60e8f.appspot.com",
  messagingSenderId: "559929116518",
  appId: "1:559929116518:web:754a1f7aef422ca7066aa7",
  measurementId: "G-PS1GRWXF1S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)
export const provider=new GoogleAuthProvider()
export const db=getFirestore(app)

//firebase-deploy command
//firebase login
//firebase init
//firebase deploy