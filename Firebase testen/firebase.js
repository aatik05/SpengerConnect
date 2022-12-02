// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCofWK1H89D0H9vcr4HanbpQHRL2Va7MGA",
  authDomain: "spengerconnect-bcad2.firebaseapp.com",
  projectId: "spengerconnect-bcad2",
  storageBucket: "spengerconnect-bcad2.appspot.com",
  messagingSenderId: "501249531781",
  appId: "1:501249531781:web:ba31e663e0101c465aaeec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Write data to Firestore
document.querySelector("#signup").addEventListener("click", () => {
  const usr = document.getElementById("username").value;
  const pss = document.getElementById("password").value;
  writeData(usr, pss);
});

function writeData(usr, pss) {
  try {
    const docRef = addDoc(collection(db, "users"), {
      username: usr,
      password: pss
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
