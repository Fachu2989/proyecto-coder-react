
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apikey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
  // apiKey: "AIzaSyC9_WP7_aD8rI_vMqcIZAFvIZZU_QsCXJY",
  // authDomain: "proyecto-coder-24ce1.firebaseapp.com",
  // projectId: "proyecto-coder-24ce1",
  // storageBucket: "proyecto-coder-24ce1.appspot.com",
  // messagingSenderId: "1021049681909",
  // appId: "1:1021049681909:web:38315bc44a67bffae292bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

