var paswvergl;
var uservergl;
var newuser;
var newpasw;
function daten() 
{
    var p;
var u;
u = document.getElementById("username").value;
p = document.getElementById("passwort").value;
let pattern = /[0-9]/;
     //if(u.length > 4 && u.length < 16 && p.length > 4 && p.length < 12 && p.includes("1") || p.includes("2") || p.includes("3") || p.includes("4") || p.includes("5") || p.includes("6") || p.includes("7")  ||p.includes("8") || p.includes("9") || p.includes("0") && u.includes("1") || u.includes("2") || u.includes("3") || u.includes("4") || u.includes("5") || u.includes("6") || u.includes("7") || u.includes("8") || u.includes("9") || u.includes("0")) {
        if (pattern.test(u) && pattern.test(p) && p.length > 4 && p.length < 12 && u.length > 4 && u.length < 16) { 
        paswvergl = p;
         uservergl = u;
         passwortvergleichenbittemachmalchristoph()
         window.location.href = "index.html";
        }
     else {
        
        document.getElementById("shitpasswort").innerHTML = "Passwort muss zwischen 4 und 12 Zeichen lang sein und eine Zahl beeinhalten."
        document.getElementById("shitusername").innerHTML = "Username muss zwischen 4 und 16 Zeichen lang sein und min. eine Zahl beeinhalten."
        console.log("shitshow");
        
    }
    console.log(p, u)
    }


function login() 
{
    window.location.assign("index.html")
    window.location.href = "index.html";
    window.open("../html/index.html");
}

function passwortvergleichenbittemachmalchristoph()
{
console.log("christopgh mach mal magie");
console.log(paswvergl, uservergl)
}

function registerdaten()
{
    var u;
    var p;
    var e;
    p = document.getElementById("newpasswort").value;
u = document.getElementById("newusername").value;
    if()
}