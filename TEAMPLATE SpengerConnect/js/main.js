var paswvergl;
var uservergl;
var newuser;
var newpasw;
var newemail;
function daten() {
  var p;
  var u;
  u = document.getElementById("username").value;
  p = document.getElementById("passwort").value;
  let pattern = /[0-9]/;
  //if(u.length > 4 && u.length < 16 && p.length > 4 && p.length < 12 && p.includes("1") || p.includes("2") || p.includes("3") || p.includes("4") || p.includes("5") || p.includes("6") || p.includes("7")  ||p.includes("8") || p.includes("9") || p.includes("0") && u.includes("1") || u.includes("2") || u.includes("3") || u.includes("4") || u.includes("5") || u.includes("6") || u.includes("7") || u.includes("8") || u.includes("9") || u.includes("0")) {
  if (
    pattern.test(u) &&
    pattern.test(p) &&
    p.length > 4 &&
    p.length < 12 &&
    u.length > 4 &&
    u.length < 16
  ) {
    paswvergl = p;
    uservergl = u;
    passwortvergleichenbittemachmalchristoph();
    window.location.href = "index.html";
  } else {
    document.getElementById("shitpasswort").innerHTML =
      "Passwort muss zwischen 4 und 12 Zeichen lang sein und eine Zahl beeinhalten.";
    document.getElementById("shitusername").innerHTML =
      "Username muss zwischen 4 und 16 Zeichen lang sein und min. eine Zahl beeinhalten.";
    console.log("shitshow");
  }
  console.log(p, u);
}

function passwortvergleichenbittemachmalchristoph() {
  console.log("christopgh mach mal magie");
  console.log(paswvergl, uservergl);
}

function neuedatenjuhuchristophfreudichpartyparty() {
  console.log(newuser, newpasw, newemail);
}

function registerdaten() {
  var u;
  var p;
  var e;
  e = document.getElementById("schulemail").value;
  p = document.getElementById("newpasswort").value;
  u = document.getElementById("newusername").value;
  let pattern = /[0-9]/;
  if (
    pattern.test(u) &&
    pattern.test(p) &&
    p.length > 4 &&
    p.length < 12 &&
    u.length > 4 &&
    u.length < 16 &&
    e.includes("@") &&
    e.includes(".")
  ) {
    newemail = e;
    newpasw = p;
    newuser = u;
    neuedatenjuhuchristophfreudichpartyparty();
    window.location.href = "index.html";
  } else {
    document.getElementById("shitnewpasw").innerHTML =
      "Passwort muss zwischen 4 und 12 Zeichen lang sein und eine Zahl beeinhalten.";
    document.getElementById("shitnewuser").innerHTML =
      "Username muss zwischen 4 und 16 Zeichen lang sein und min. eine Zahl beeinhalten.";
    document.getElementById("shitemail").innerHTML =
      "Bitte gültige Email eingeben";
  }
}

function checkDaten() {
  var password = document.getElementById("password").value;
  var special = 0;
  var specialCharacters = "!@#$%^&*()_+~|}{[]:;?><,./-=";
  for (var i = 0; i < password.length; i++) {
    if (specialCharacters.indexOf(password.charAt(i)) > -1) {
      special++;
    }
  }
  if (special >= 2 && password.length >= 8 && password.length <= 20) {
    document.getElementById("password").style.backgroundColor = "green";
  } else {
    document.getElementById("password").style.backgroundColor = "red";
    if (special < 2) {
      document.getElementById("error").innerHTML =
        "Password must contain at least two special characters";
    } else if (password.length < 8) {
      document.getElementById("error").innerHTML =
        "Password must contain at least eight characters";
    } else if (password.length > 20) {
      document.getElementById("error").innerHTML =
        "Password must contain a maximum of twenty characters";
    }
  }


  
}
