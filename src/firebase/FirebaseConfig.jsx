// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlt0k1gUIdvMQ0nih0rCZw4cOxwCVNOOw",
  authDomain: "myfirstapp-9c7fa.firebaseapp.com",
  projectId: "myfirstapp-9c7fa",
  storageBucket: "myfirstapp-9c7fa.appspot.com",
  messagingSenderId: "902085426961",
  appId: "1:902085426961:web:d76d88641d4da3d5e316b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;