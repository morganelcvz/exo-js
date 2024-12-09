// EXERCICE 1
//1
let mois = ["janvier", "février", "mars", "avril"]

console.log(mois) 

// 2
const mois = ["janvier", "février", "mars", "avril"]

console.log(mois)

let mois = [];
mois[0]= "";
mois[1]= "janvier";
mois[2]= "février";
mois[3]= "mars";
mois[4]= "avril";
mois[5]= "mai";

console.log(mois)

// EXERCICE 2 
let jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"]

console.log(jours[4])

// EXERCICE 3 

let jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"]

console.log(jours[5])

// EXERCICE 4 
// 1 
let mois = ["janvier", "février", "mars", "avril", "mai", "juin"]

mois.forEach(function (index, item, array) {
    console.log(item, index);
  });

// 2

  let mois = [];
  mois[0]= "";
  mois[1]= "janvier";
  mois[2]= "février";
  mois[3]= "mars";
  mois[4]= "avril";
  mois[5]= "mai";
  mois[6]= "juin"; 
  
  mois.forEach(function (index, item, array) {
      console.log(item, index);
    });  

//var mois = [null, 'janvier', 'février', 'mars', 'avril', 'mai', 'juin'];
//'First month : ' + mois[1];

//mois.forEach(function (item, index, array) {
//    console.log(index, item);
//  });  

// var map = [null, 'January', 'February', 'March'];
//'First month : ' + map[1];
// var map = {1:'January', 2:'February', 3:'March'};
//'First month : ' + map[1];

// EXERCICE 5 

const mois=["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]
const jours=["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"]

const month=["january", "febuary", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
const days=["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

const data = [
    [mois, jours],
    [month, days]
]

console.log(data)
console.log(`
    ${mois[10]} 
    ${days[4]}
    ${month} 
    ${jours} 
`)

// EXERCICE 6 

let princesses=["Cendrillon"]

console.log(princesses)

let princessesplus=["Cendrillon", "Mulan", "Peach", "Raiponce", "Belle", "Vaiana", "Zelda", "Jasmine"]

princessesplus.splice(2, 1)
princessesplus.splice(5, 1)
console.log(princessesplus)

let princessesalpha=["Belle", "Cendrillon", "Jasmine", "Mulan", "Raiponce", "Vaiana"]

console.log(princessesalpha)
console.log(`Il y a ${princessesalpha.length} princesses dans le tableau`)