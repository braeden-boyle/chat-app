import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEnHrqEBApTAaZ621t8N5kfrfNQt5VBmE",
  authDomain: "chatapp-b6799.firebaseapp.com",
  projectId: "chatapp-b6799",
  storageBucket: "chatapp-b6799.appspot.com",
  messagingSenderId: "959449918084",
  appId: "1:959449918084:web:98e0434d28e56a95b130d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db }