// exercice 1 

let age = prompt("Quel est votre âge ?")

if (age >= 18) {
    alert("L'utilisateur est majeur !")
} else if {
    alert("L'utilisateur est mineur !")
}

// exercice 2 

let nb = prompt("Choisir un nombre entier :")

if (nb % 2 == 0) {
    alert("Le nombre est PAIR")
} else {
    alert("Le nombre est IMPAIR")
}

// exercice 3 

let password = "secret"

let identify = prompt("Veuillez vous identifier :")
if (identify == "secret") {
    alert("Hello Mr Anderson")
} else {
    alert("Mauvais mot de passe")
}

// exercice 4 

let gender = prompt("Quel est votre genre ? (H/F)")
let age = prompt("Quel âge avez vous ?")

if (gender == "H" && age >= 18) {
    alert("L'utilisateur est de type masculin et majeur.")
} else if (gender == "H" && age < 18) {
    alert("L'utilisateur est de type masculin et mineur.")
}

if (gender == "F" && age >= 18) {
    alert("L'utilisateur est de type féminin et majeure.")
} else if (gender == "F" && age < 18) {
    alert("L'utilisateur est de type féminin et mineure.")
}

// exercice 5

let moyenne = prompt("Quelle est votre moyenne sur 20 ?")

if (moyenne == 0) {
    alert("Un rendez-vous sera programmé en raison de la moyenne.")
}
if (moyenne >= 1 && moyenne <= 5) {
    alert("Trimestre insuffisant.")
}
if (moyenne >= 6 && moyenne <= 10) {
    alert("Trimestre moyen.")
}
if (moyenne >= 11 && moyenne <= 13) {
    alert("Bon trimestre.")
}
if (moyenne >= 14 && moyenne <= 18) {
    alert("Excellent trimestre.")
}
if (moyenne > 18 && moyenne <= 20) {
    alert("Félicitations.")
}
if (moyenne > 20 || moyenne < 0) {
    alert("Invalide.")
}

// exercice 6 

let mois = prompt("Saisir un numéro de mois (1-12) :")

switch (mois) {
    case "1":
        alert("1 correspond à janvier")
        break;
    case "2":
        alert("2 correspond à février")
        break;
    case "3":
        alert("3 correspond à mars")
        break;
    case "4":
        alert("4 correspond à avril")
        break;
    case "5":
        alert("5 correspond à mai")
        break;
    case "6":
        alert("6 correspond à juin")
        break;
    case "7":
        alert("7 correspond à juillet")
        break;
    case "8":
        alert("8 correspond à août")
        break;
    case "9":
        alert("9 correspond à septembre")
        break;
    case "10":
        alert("10 correspond à octobre")
        break;
    case "11":
        alert("11 correspond à novembre")
        break;
    case "12":
        alert("12 correspond à décembre")
        break; 
        default: 
        alert ("Cette option n'est pas valide")
        break;
}

// exercice 7 

if (window.confirm ("en cliquant sur OK je confirme que je rentre sur le site") == true) {
    alert("L'utilisateur a cliqué OK")
} else {
    alert("L'utilisateur n'a pas validé")
}