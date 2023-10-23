// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2f8wumoRL3gy_NC93kta7TF5NKzJjilU",
  authDomain: "blogging-app-93363.firebaseapp.com",
  projectId: "blogging-app-93363",
  storageBucket: "blogging-app-93363.appspot.com",
  messagingSenderId: "948527027511",
  appId: "1:948527027511:web:b581fc35dd91cac4a3b6b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
