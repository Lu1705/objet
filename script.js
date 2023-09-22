"use strict";


let eleve={
    prenom : "samuel",
    alimentPrefere : "carotte",
    ville : "ermont",
} //création d'un ojbet comprenant trois propriétés 

let values=Object.values(eleve); // on récupère les valeurs (propriétés) de notre objet eleve et on les assignie à la valeur de la variable values
console.log(values); // on vérifie si on a bel et bien incorporé les différentes propriété dans notre variable
let result= 0; // on créé une variable qui est égale a zéro
values.forEach(values=> {
    result += values.length
}) /* on mesure la taille et la variable values et on l'additionne à la variable result (0 + une valeur = à la valeur) 
result est donc égale aux nombre de charactère de eleve 
*/

console.log(result); // on donne et vérifié le résultat
