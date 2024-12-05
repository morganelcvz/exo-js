// exercice 1

let message = "mon message"
alert(message)

// exercice 2 

let partOne = "Hello"
let partTwo = "World"

alert(partOne + " " + partTwo)

//exercice 3

let firstname = "jojo"
let age = 33
let city = "Le Havre"

alert(`Je m'appelle ${firstname} j'ai ${age} ans, j'habite ${city}`)

console.log ("firstname : " + typeof firstname)
console.log ("age : " + typeof age)
console.log ("city : " + typeof city)

// exercice 4 

let nom = prompt("Quel est votre nom ?")
let prenom = prompt("Quel est votre prénom ?")
let age = prompt("Quel âge avez vous ?")
let email = prompt("Quelle est votre adresse e-mail ?")

alert(`
    Nom : ${nom}
    Prénom : ${prenom}
    Âge : ${age}
    Adresse e-mail : ${email}
`)

// exercice 5

let entier1 = prompt("saisir un nombre entier :")
let entier2 = prompt("saisir un autre nombre entier :")

let result = parseInt(entier1) + parseInt(entier2)
alert (`
    Le résultat de l'addition est : 
    ${entier1} + ${entier2} = ${result}
    `)
