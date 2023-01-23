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
  
  window.open("main.html");
}

function passwordVergessen() {
//password vergessen methode
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
  
  console.log("warum?");

  document.location = "konto.html";
  window.open("main.html");
}

function SignUpError() {
  alert(
    "Bitte Gültige Werte eingeben.\nPassword muss min. 8 Zeichen lang sein und eine Zahl haben.\n Email muss eine gültige Email sein.\nUsername muss min 6 Zeichen Lang sein und noch nicht vergeben sein."
  );
}

//konto

function bildHochladen() {
  
  var img = document.getElementById("bild")
  console.log(img);
  document.getElementById("IMAGE")=img;
}

//main seite
function datenEinfügen(){
let random = Math.floor(Math.random() * 6);
if(random <= 1) {
document.getElementById("img1").src="../images/mickeymouse1.jpg";
document.getElementById("img2").src="../images/mickeymouse2.jpg";
document.getElementById("img3").src="../images/mickeymouse3.jpg";
document.getElementById("alter").innerHTML="31";
document.getElementById("name").innerHTML="Mickey Mouse";
document.getElementById("info").innerHTML="Hallo, ich bin Mickey. Ich kann gut pfeifen und mag Hunde und so..."
}
if(random <= 2 && random > 1){
  document.getElementById("img1").src="../images/luckyluke1.jpg";
  document.getElementById("img2").src="../images/luckyluke2.jpg";
  document.getElementById("img3").src="../images/luckyluke3,jpg.jpg";
  document.getElementById("alter").innerHTML="26";
  document.getElementById("name").innerHTML="Lucky Luke"
  document.getElementById("info").innerHTML="Ich schieß gut. Und mein Pferd kann reden. Das cool so..."
}
if(random <= 3 && random > 2){
  document.getElementById("img1").src="../images/donaldduck1.jpg";
  document.getElementById("img2").src="../images/donaldduck2.jpg";
  document.getElementById("img3").src="../images/donaldduck3.jpg";
  document.getElementById("alter").innerHTML="34";
  document.getElementById("name").innerHTML="Donald Duck"
  document.getElementById("info").innerHTML="Ich muss 3 Bengel erziehen und mein Onkel verwendet mich als Sklave..."
}
if(random <= 4 && random > 3){
  document.getElementById("img1").src="../images/obelix1.jpg";
document.getElementById("img2").src="../images/obelix2.jpg";
document.getElementById("img3").src="../images/obelix3.jpg";
document.getElementById("alter").innerHTML="30";
document.getElementById("name").innerHTML="Obelix";
document.getElementById("info").innerHTML="Wer hat gesagt, dass ich dick bin?"
}
if(random > 4){
  document.getElementById("img1").src="../images/tim1.jpg";
document.getElementById("img2").src="../images/tim2.jpg";
document.getElementById("img3").src="../images/tim3.jpg";
document.getElementById("alter").innerHTML="Tim";
document.getElementById("name").innerHTML="21"
document.getElementById("info").innerHTML="Ich mag Hunde und hab eine Zipfi Frisur..."
}
}

function profileDetails() {
  alert("Email-Addresse:\nexamplemail@spg.com");
  window.setTimeout(datenEinfügen(), 10000);

}