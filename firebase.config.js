// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOVx8qyJTx8GmQQSGTFgzYhcWWB1LhdWc",
    authDomain: "login-signup-form-ca487.firebaseapp.com",
    projectId: "login-signup-form-ca487",
    storageBucket: "login-signup-form-ca487.firebasestorage.app",
    messagingSenderId: "351334713028",
    appId: "1:351334713028:web:71fa9f70b28644151eab91"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const provider=new GoogleAuthProvider
export const db=getFirestore(app)