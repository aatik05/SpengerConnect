// Import the functions you need from the SDKs you need
/*import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
  getFirestore,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
*/
// Your web app's Firebase configuration

//login:

function checkDaten() {
  var password = document.getElementById("password");
  var username = document.getElementById("username");
  //Christoph vergleich hier die werte mit denen aus datenbank yk
  //wenn daten richtig sind dann datencorrect aufrufen, wenn falsch dann datenerror
}
function datenError() {
  alert("Username oder Password sind Falsch!");
}

function datenCorrect() {
  console.log("warum?");
  window.open("main.html");
}

//register

authentication = null;

function defineAuth(authentication)
{
  this.authentication = authentication;
}

function checkSignUp() {
  var password = document.getElementById("newpassword");
  var username = document.getElementById("newusername");
  var email = document.getElementById("newemail");
  var vorname = document.getElementById("newvorname");
  var nachname = document.getElementById("newnachname");
  //christoph check die daten ob gültige werte und speicher falls ja ... falls richtig ruf valid auf ansosnten error xoxo
  //Passowrt mindestens 8 Zeichen:
  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (password.length < 8 || /\d/.test(password)) {
    alert("Test");
    SignUpError();
    exit(0);
  } else if (username.length <= 6) {
    alert("Test2");
    SignUpError();
    exit(0);
  } else if (emailRegex.test(email)) {
    alert("Test3");
    SignUpError();
    exit(0);
  } else if (nachname.length <= 1 || vorname.length <= 1) {
    alert("Test4");
    SignUpError();
    exit(0);
  } else {
    createUser("example@example.com", "password123");
  }
}

function createUser(email, password) {
  authentication.createUserWithEmailAndPassword(email, password)
    .then(function (response) {
      console.log("User created successfully", response);
      alert("123");
    })
    .catch(function (error) {
      console.error("Error creating user: ", error);
      alert("456");
    });
}

function validSignUpData() {
  //sollte auf konto erstellen weiterleiten aber die haben wir noch nicht einmal hahahahahahaykyk
  console.log("warum?");

  document.location = "main.html";
  window.open("main.html");
}

function SignUpError() {
  alert(
    "Bitte Gültige Werte eingeben.\nPassword muss min. 8 Zeichen lang sein und eine Zahl haben.\n Email muss eine gültige Email sein.\nUsername muss min 6 Zeichen Lang sein und noch nicht vergeben sein."
  );
}

//konto
function dateiauswahl(evt) {
  var dateien = evt.target.files; // FileList object

  // Auslesen der gespeicherten Dateien durch Schleife
  for (var i = 0, f; (f = dateien[i]); i++) {
    // nur TXT-Dateien
    if (!f.type.match("text/plain")) {
      continue;
    }

    var reader = new FileReader();

    reader.onload = (function (theFile) {
      return function (e) {
        // erzeuge "Thumbnails"
        var vorschau = document.createElement("p");
        vorschau.className = "thumb";
        vorschau.src = e.target.result;
        vorschau.title = theFile.name;
        document.getElementById("list").insertBefore(vorschau, null);
      };
    })(f);

    // Klartext mit Zeichenkodierung UTF-8 auslesen.
    reader.readAsText(f, utf8);
  }
}
// Auf neue Auswahl reagieren und gegeenenfalls Funktion dateiauswahl neu ausführen.
document
  .getElementById("files")
  .addEventListener("change", dateiauswahl, false);
