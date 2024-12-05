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

// exercice 5 

let nb = 0
let message = "vendredi 13"

while (nb <= 9) {
    console.log(message + " " + nb)
    nb = nb + 1
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
