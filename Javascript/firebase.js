// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmUa0icMFyj3fMkHTDjsfbLtbCc6UERSs",
  authDomain: "spengerconnect-4430a.firebaseapp.com",
  databaseURL:
    "https://spengerconnect-4430a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "spengerconnect-4430a",
  storageBucket: "spengerconnect-4430a.appspot.com",
  messagingSenderId: "509038491157",
  appId: "1:509038491157:web:069eb2aabce5c3d64b001c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}
