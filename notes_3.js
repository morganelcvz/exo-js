// EXERCICE 1 : corrigé 

// Déclaration de la variable avec une valeur permettant de rentrer dans le while
let nb = 1

// nous effectuons une boucle while avec une condition 
while (nb <= 100) {
    // on affiche nb à l'aide de console.log
    console.log(nb)
    // on incrémente la variable nb de 1 à chaque itération
    // nous aurions également pu faire nb++ car il s'agit d'un pas de 1
    // et également nb += 1
    nb = nb + 1
}

// exercice 2 

let nb = 0 
while (nb <= 100) {
    console.log(nb)
    nb = nb + 2
}

// exercice 3 

let nb1 = 3
let nb2 = 6 

let total = nb1 + nb2;
let somme = 2023 - total;
while (total < 2023) {
    alert(`
        ${nb1} + ${nb2} = ${total}
        il faut ajouter ${somme}
        `)
}

// exercice 4

let nb = 0
let message = "mon message"

while (nb <= 9) {
    console.log(message + " " + nb)
    nb = nb + 1
    if (nb == 10) {
        console.log(message + " " + nb + " c'est le dernier message !")
    }
}


// exercice 5 

let nb = 0
let message = "vendredi 13"

while (nb <= 9) {
    console.log(message + " " + nb)
    nb = nb + 1
}

// exercice 6 

let message = "vendredi 13"
for (let i = 0; i < 13; i++) {
    console.log(message + " " + i)
}

// exercice 7 

for (let i = 20; i > 0; i--) {
    if (i == 20) {
        console.log("Start !!")
    }
    console.log(i)
    if (i == 1) {
        console.log("Finish !!")
    }
}

// exercice 8 

let nb = 1 
while (nb < 100) {
    console.log(nb)
    nb = nb + 1
    if (nb % 3 == 0) {
        console.log("Fizz")
    }
    if (nb % 5 == 0) {
        console.log("Buzz")
    }
    if (nb % 3 == 0 && nb % 5 == 0) {
        console.log("FizzBuzz")
    }
}

// exercice 9 (incomplet)

let message = "-"
for (let i = 0; i < 11; i++) {
    console.log(i + message)
    if (i == 10) {
        console.log (i += " ")
    }
}
