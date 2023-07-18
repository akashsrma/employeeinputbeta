// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2OW0qnTbzeZRjkK5Jq5A4R3sgGQq--IQ",
  authDomain: "fir-employeesbeta.firebaseapp.com",
  projectId: "fir-employeesbeta",
  storageBucket: "fir-employeesbeta.appspot.com",
  messagingSenderId: "198635119575",
  appId: "1:198635119575:web:3ba9a41c42d8fa8f142192",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
