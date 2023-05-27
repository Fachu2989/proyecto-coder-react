// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9_WP7_aD8rI_vMqcIZAFvIZZU_QsCXJY",
  authDomain: "proyecto-coder-24ce1.firebaseapp.com",
  projectId: "proyecto-coder-24ce1",
  storageBucket: "proyecto-coder-24ce1.appspot.com",
  messagingSenderId: "1021049681909",
  appId: "1:1021049681909:web:38315bc44a67bffae292bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)