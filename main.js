// Exercice 1 : Déclaration et affectation de variables
let prenom = "MOHAMED";
console.log(prenom);
console.log("################################################");

//Exercice 2 : Manipulation de variables numériques

let a = 4;
let b = 6;
console.log(a+b);
console.log(a*b);
console.log(a-b);
console.log(a/b);
console.log(a%b);
console.log("################################################");

// Exercice 3 : Concaténation de chaînes de caractères
let nom = "MOUSTIR";
let prenom1 = "MOHAMED";
let full_name = prenom1 +' '+nom ;
console.log(full_name);
console.log("################################################");

// Exercice 4 : Utilisation des variables booléennes
let age = 16;
let majeur = true;
if(age >= 18){
 majeur = true;
}else{
    majeur = false;
}
console.log(majeur);
console.log("################################################");

// Exercice 5 : Échange de valeurs entre deux variables
let x = 5;
let y = 6;
x = x+y
y = x-y
x = x-y
console.log(x);
console.log(y);
console.log("################################################");

// Exercice 6 : Calcul de la circonférence d'un cercle
let rayon = 8;
let R = 3.14;
let Somme = (2*R*rayon) 
console.log(Somme);
console.log("################################################");

// Exercice 7 : Conversion de température

let C = 8;
let F= (C*9/5+32) 
console.log(F);
console.log("################################################");

// Exercice 8 : Calcul de l'âge
let anneeNaissance = 2003;
let anneeActuelle = 2024;
let Yage = anneeActuelle -anneeNaissance;
console.log(Yage);
