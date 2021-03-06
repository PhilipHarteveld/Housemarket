// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJzB204-0A46j4pQnzD1UycqAvDi6DVWM",
  authDomain: "house-market-app-6525f.firebaseapp.com",
  projectId: "house-market-app-6525f",
  storageBucket: "house-market-app-6525f.appspot.com",
  messagingSenderId: "622465182268",
  appId: "1:622465182268:web:1030865c92cc2444893139",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
