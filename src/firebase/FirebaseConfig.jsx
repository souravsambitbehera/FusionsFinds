// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8DRngLKj8Q81-x4Gb-vfkllFY2Ld4_jc",
  authDomain: "my-first-project-11b51.firebaseapp.com",
  projectId: "my-first-project-11b51",
  storageBucket: "my-first-project-11b51.appspot.com",
  messagingSenderId: "285484980775",
  appId: "1:285484980775:web:59e1bd097c72595af28c02",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
const auth = getAuth(app);
export { auth, fireDb };
