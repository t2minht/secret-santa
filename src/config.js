// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBu9Uf5aAPLRqBX-ixLxrsBS_-0Y6q_5Y",
  authDomain: "cousin-secret-santa.firebaseapp.com",
  databaseURL: "https://cousin-secret-santa-default-rtdb.firebaseio.com",
  projectId: "cousin-secret-santa",
  storageBucket: "cousin-secret-santa.appspot.com",
  messagingSenderId: "192721610037",
  appId: "1:192721610037:web:a12697778aff69837d987c",
  measurementId: "G-LJNHD3TW08",
};

// Initialize Firebase
export function initialize() {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
}
