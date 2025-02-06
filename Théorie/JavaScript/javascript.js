// TYPES DE VARIABLES 

var Prenom = "Maxime";
Prenom = "Max";
let Nom = "Raylet";
const pi = 3.14;

// ADDITION DE VARIABLES

var ami;    // Création d'une variable non déclarée
var phrase = "Mon ami est ";  // Création d'une variable déclarée
ami = Pedro;    // Déclaration de la variable "Ami" créer auparavant
var phraseComplete = phrase + ami;   // Création d'une variable en additionnant deux
var somme = 10 + 10;    // Création d'une variable "somme" qui sera égale à 10+10 donc 20

// INCREMENTATIONS DE VARIABLE

var maVar = 10;     // Création d'une variable "maVar" égale à 10
maVar = maVar + 1;  // Modifie la variable "maVar" en lui rajoutant + 1 donc 11
maVar++;    // Autre façon d'ajouter 1 à une variable (idem pour "-")

var a = 10;
a = a + 1;      // Modifie la variable "a" en lui rajoutant la valeur voulue
a += 1;     // Autre façon (idem pour "-", "*" et "/")

// SYNTAXE QUOTES

var quote = "Je suis une string "double quote" dans une "double quote"";    // Deviendra
var quote = "Je suis une string \"double quote\" dans une \"double quote\"";    // Ou bien
var quote = 'Je suis une string "double quote" dans une "double quote"' // Pour éviter les " ou ' dans une string

// CONCATENATIONS DE STRINGS

var twoStrings = "Je viens en premier " + "Je viens en second";    // Concaténation de deux strings
var twoStr = "Premier";
twoStr += "Second";     // Autre façon de concatener des strings
var strPhrase = "Je suis " + twoStr + "à la course" // Concaténation de strings avec variable
var oneVar = "Raylet";
var twoVar = "Maxime ";
twoVar += oneVar;     // Concaténation de deux variables renverra "Maxime Raylet"

// CALCUL DE LONGUEUR

var Info = "Salut"
longueurInfo = Info.length;     // Calcule la longueur d'une variable, longueurInfo sera donc égal à 5
premierInfo = Info[0];      // premierInfo aura la valeur du premier élément de Info
dernierInfo = Info[Info.length - 1];    // dernierInfo aura la valeur du dernier élément de Info

// IMPLEMENTATION DANS UNE VARIABLE

function wordBlanks(Nom, Adjectif, Verbe, Adverbe) {    // Création d'une fonction qui attend des éléments
    var resultat = "";      // Création de la variable qui sera implémentée des éléments demandés dans la fonction
    resultat += Nom + " " + Verbe + " un " + Adjectif + " steak " + Adverbe;  // Implémentation des éléments dans la variable
    return resultat;    // Retour du résultat
}
console.log(wordBlanks("maxime", "grand", "mange", "rapidement"));  // Affichage sur l'écran console

// ARRAYS ET PARAMETRES

var array = ["Maxime", 24];     // Stocker plusieurs valeurs avec un array
var data = array[0];    // "data" sera égal au premier élément de "array" donc Maxime
array[1] = 25;  // Modifie la valeur 2 de "array" en 25, donc 25 au lieu de 24
var array2 = [["Maxime", 24], ["Maria", 23]];     // array imbriqué
var data2 = array2[1][0];  // "data2" sera égal au premier élément du deuxième tableau de "array2" donc Maria
array2.push(["Maya", 3]);    // Rajoute un tableau à la fin de "array2" avec ses valeurs
array2.unshift(["Maman", 42]);     // Rajoute un tableau au début de "array2" avec ses valeurs
array2.map((item) => item + "!");   // Rajoutera un "!" à  chaque valeurs de l'array 2
var removedArray = array2.pop();    // Création d'une variable contenant le dernier tableau de "array2"
var shiftArray = array2.shift();    // Création d'une variable contenant le premier tableau de "array2"
var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]]   // Exemple liste de course
var [prenom, nom] = ["Max", "Raylet"];  // prenom sera "Max" et nom sera "Raylet"



//EXEMPLE   MAP/FILTER

let names = ["Jordan", "Maxime", "PEDRO"];

names.map((item) => {       //Pour chaques elements dans "names"
  console.log(item);        //Afficher l'élement   (l'élement courant sera la variable item)
})

names.filter((item) => {                //Pour chaques elements dans "names"
  console.log(item !== "PEDRO");        //Affiche TRUE, si l'élement est DIFFERENT de "PEDRO"
})


// FONCTIONS

function reusableFunction(a, b) {    // Tout ce qui se passe dans les {} est exécuté à chaque fois que la fonction est appelée
    console.log(a - b);
}
reusableFunction(40, 10);    // Appel de la fonction qui renverra a - b donc 40 - 10 (30)

// La déstructuration de paramètres de fonction

function storeOrder(order) {
  localStorage.setItem('id', order.id);
  localStorage.setItem('currency', order.currency);
}
// deviendra
function storeOrder({id, currency}) { 
  localStorage.setItem('id', id);
  localStorage.setItem('currency', currency);
}
// et sera apppelée de la sorte:
storeOrder({id: 5, currency: 'USD', amount: 15.99}); // un argument par valeur

// storeOrder prend qu'un seul paramètre dans cet exemple, il n'accepte pas 2 paramètres
// il sera déstructuré à l'intérieur


// IF

var globalScope = 10;
function fun() {
    var output = "";
    if (typeof globalScope != "undefined") {       // Si le type de la variable "globalScope" n'est pas égal à undefined (oui, car number)
        output += "globalScope: " + globalScope;       // Alors incrémentation de "output"
    }
}

// CALCUL DANS FONCTION

function minusSeven(num) {
    return num - 7;         // Retourne la valeur contenue dans "num" - 7
}
console.log(minusSeven(10)); // Affiche la fonction avec l'élément 10 donc 10 - 7 donc 3

var changed = 0;
function change(num) {
  return (num + 5) / 3;     // Retourne la valeur contenue dans "num" + 5 puis / 3 () en premier
}
changed = change(10);     // Création de la variable 'changed' avec comme résultat la valeur de la fonction avec l'élément 10
console.log(changed);     // Afficher la variable "changed" donc (10 + 5) / 3 = 5

// ARRAY + PARAMETRES DANS FONCTION

function nextInLine(arr, item) {
    arr.push(item);     // Rajoute l'élément "item" à "arr" à la fin de l'array
    return arr.shift();     // Retourne la valeur première de "arr"
  }
var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr));    // Retour de la valeur de testArr (avant)
console.log(nextInLine(testArr, 6));        // Appel de la fonction avec arr=testArr et item=6
console.log("After: " + JSON.stringify(testArr));     // Retour de la valeur de testArr (après)

// FONCTION BOOLEENNES

function bool() {
    return false;       // Appeler cette fonction va retourner "false"
}

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {                  // Si wasThatTrue = true 
      return "Yes, that was true";      // On retourne la phrase
    }
    return "No, that was false";        // Sinon, on retourne cette phrase
  }
  console.log(trueOrFalse(true));       // Affiche la fonction avec l'élément true donc le if est utilisé

// OPERATEURS

function testEqual(val) {
if (val == 12) {        // Si val est égal à 12
    return "Equal";       // On retourne "Equal"
    }
return "Not Equal";     // Sinon, on retourne "Not Equal"
}
console.log(testEqual(12));   // Affiche la fonction avec val=12, donc Equal car 12 == 12

// AND (OR = ||)

function testAnd(val) {
if (val <= 50 && val >= 25) {   // Si "val" est inf ou égal à 50 ET sup ou égal à 25
    return "Yes";               // Retourne Yes
    }
return "No";                    // Sinon, retourne No
}
console.log(testAnd(50));       // Affiche la fonction avec val=50, donc Yes

// ELSE

function testElse(val) {
    var result = "";            // Initialisation de la variable result sans valeur
    if (val > 5) {              // Si "val" est supérieur à 5
        result = "Plus grand que 5";    // Variable "result" prendra la phrase "Plus grand que 5"
    } else {                    // Sinon
        result = "Plus petit que 5";    // Variable "result" prendra la phrase "Plus petit que 5"
    }
    return result;      // Retourne le résultat
}
console.log(testElse(4));   // Affiche la fonction avec val=4, donc "result" = Plus petit que 5

// ELSE IF

function testElseIf(val) {
    if (val > 10) {             // Si "val" est supérieur à 10
        return "Plus grand que 10";    // Retourne "Plus grand que 10"
    } else if (val < 5) {       // Sinon, si "val" est inférieur à 5
        return "Plus petit que 5";  // Retourne "Plus petit que 5"
    } else {                    // Sinon
      return "Entre 5 et 10"    // Retourne "Entre 5 et 10"
    }
}
console.log(testElseIf(6));     // Affiche la fonction avec val=6, donc retourne 'Entre 5 et 10'

// ELSE IF + ARRAY

var names = ["Hole in one", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"] // Array avec valeurs
function golfScore(par, strokes) {  // Création de la fonction
  if (strokes == 1) {       // Si 1 strokes
    return names[0]         // Retourne 1e valeur de l'array
  } else if (strokes <= par -2) {   // Si strokes inf ou égal à par -2
    return names[1]         // Retourne 2e valeur de l'array
  } else if (strokes == par -1) {   // Si strokes inf ou égal à par -1
    return names[2]         // Retourne 3e valeur de l'array
  } else if (strokes == par) {      // Si strokes strictement égal à par
    return names[3]         // Retourne 4e valeur de l'array
  } else if (strokes == par +1) {   // Si strokes strictement égal à par +1
    return names[4]         // Retourne 5e valeur de l'array
  } else if (strokes == par +2) {   // Si strokes strictement égal à par +2
    return names[5]         // Retourne 6e valeur de l'array
  } else if (strokes >= par + 3) {  // Si strokes sup ou égal à par +3
    return names[6]         // Retourne 7e valeur de l'array
  }
}
console.log(golfScore(5, 1));   // Affichage de la fonction avec par = 5 et strokes = 1 donc return array[1]

// SWITCH

function caseInSwitch(val) {
    var answer = "";
    switch(val) {           // Fonctionne comme un IF
      case 1:               // Compare "val" avec le cas "val===1"
        answer = "Alpha";       // Stock "Alpha" dans la variable "answer"
        break;                  // Sort de la boucle
      case 2:               // Sinon, compare "val" avec le cas "val====2"
        answer = "Beta";
        break
    }
    return answer;
}
console.log(caseInSwitch(2));    // Affichage de la fonction avec "val=2", donc "Beta"

// OPTIONS SWITCH

function switchOfStuff(val) {
    var answer = "";
    switch(val) {           
      case "a":               // Compare "val" avec le cas "val===a"
        answer = "Apple";       // Stock "Apple" dans la variable "answer"
        break;                  // Sort de la boucle
      case "b":               
        answer = "Bird";
        break
      default:              // Si aucun des cas n'est retenu, default agira comme un ELSE IF
        answer = "Rien"         // Stock "Rien" dans la variable "answer"
    }
    return answer;
}
console.log(switchOfStuff(1));    // Affichage de la fonction avec "val=1" donc aucun des cas n'est retenu donc "Rien" car ELSE IF

// OR SWITCH

function caseInSwitch(val) {
    var answer = "";
    switch(val) {           // Fonctionne comme un IF
      case 1:               // Compare "val" avec le cas "val===1"
      case 2:               // OU Compare "val" avec le cas "val===2"
        answer = "Entre 1 et 2";    // Retourne "Entre 1 et 2"
        break
      default:              // Si aucun des cas n'est retenu, default agira comme un ELSE IF
        answer = "Supérieur à 2"         // Retourne "Supérieur à 2"
    }
    return answer;
}
console.log(caseInSwitch(2));    // Affichage de la fonction avec "val=2", donc "case 1" OR "case 2" donc "Entre 1 et 2"

// RETOURNER VALEURS BOOL DEPUIS FONCTION

function isLess(a, b) {
    return a < b;           // Retourne "true" ou "false" selon si "a" est inf à "b"
}
console.log(isLess(10,15));   // Dans ce cas "a=10" et "b=15" donc "true"

// OBJECTS

var myCat = {
    "name": "Maya",   // Propriété "name" = valeur "Maya" 
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]    // La valeur peut être une string, un nombre, un array, tous les types de data
};
var nameValue = myCat.name;     // Stock la valeur de "name" dans mon objet "myCat" dans la variable "nameValue"
myCat.name = "Maya la zinzin";  // Change la valeur de la propriété "name" de mon objet "myCat" en "Maya la zinzin"
myCat.eyes = "Verts";       // Rajoute la propriété "eyes" dans l'objet "myCat" avec la valeur "Verts"
delete myCat.eyes;      // Supprime la propriété "eyes" de l'objet "myCat"


const user = {
  name: "Max",
  age: 24
};
const name = user.name;
const age = user.age;
console.log("name")
console.log("age")
// peut devenir avec la déstructuration
const {name: username, age} = {
  name: "Max",
  age: 24
};
console.log(username);
console.log(age);

// il est possible de déclarer une fonction dans un objet
const user = {
  max: "Max",
  age: 24,
  greet() {
    console.log("Hello")
  }
}
// et l'appeler comme ceci
user.greet();


var myMom = {
    "mom surname": "Sonik"
}
var surnameValue = myMom["mom surname"] // Fonctionne pareil qu'avec le "." mais les [] peuvent stocker une propriété avec des espaces


var testObj = {
    12: "Max",
    13: "Jordan",
    14: "Pedro"
}
var playerNumber = 13;
var player = testObj[playerNumber];   // Stock la valeur de la variable "playerNumber" dans "player" et compare la valeur de la variable avec la propriété associée, donc "Jordan"


function mesAmis(val) {
    var result = "";
    var ami = {
      "a": "Anthony",
      "b": "Bastien",
      "c": "Connard",
      "d": "Didier"
    };
    result = ami[val]
    return result;
}
console.log(mesAmis("c"))   // Affiche la fonction avec "val = "c"" donc, retourne ami[c] et "c" : "Connard"


var myObj = {
    gift : "pony",
    pet: "kitten",
    bed: "sleigh"
};
function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {  // Si "myObj" contient la propriété "checkProp"
      return myObj[checkProp]       // Retourne la valeur de la propriété "checkProp"
    } else {                
      return "Not Found";       // Sinon, retourne "Not Found"
    }
}
console.log(checkObj("bed")); // Affiche la fonction avec la propriété "bed" donc renvoie de sa valeur "sleigh"

// OBJETS COMPLEXES

var myMusic = [
    {
    "artist": "Alpha Wann",
    "title": "Pistolet Rose",
    "release": 2020,
    "formats": [        // Dans la propriété "formats" de mon objet "myMusic", il y aura 2 valeurs avec []
    "CD",
    "Spotify"
    ],
    "colors": true
    }
];
var musicFormats = myMusic[0].formats[1];   // Création de la variable avec comme élément, le premier objet de mon objet, et le deuxième élément de "formats" donc Spotify


var myStorage = {       // Création de l'objet "myStorage"
    "car": {            // Création de l'objet "car" dans l'objet "myStorage"
      "inside": {       // Création de l'objet "inside" dans l'objet "car" dans l'objet "myStorage"
        "glovebox": "map",     // Création de la propriété "glovebox" dans l'objet "inside"
        "passenger seat": "leather"
      },
      "oustide": {
        "vehicle": "Pedro"
      }
    }
};
var gloveboxContents = myStorage.car.inside.glovebox;  // Défini la variable avec la valeur de la propriété "glovebox" de l'objet "inside" de l'objet "car" de l'objet "myStorage" donc "map"

  
var collection = {      // Création de l'objet "collection"
    "2548" : {          // Création de la propriété "2548" dans l'objet "collection"
        "album": "Slippery When Wet",   // "Création de la propriété "album" dans la propriété "2548" de l'objet "collection avec sa valeur"
        "artist": "Bon Jovi",
        "tracks": [   // "Création de la propriété "tracks" dans la propriété "2548" de l'objet "collection avec ses valeurs"
              "Let It Rock",
              "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
             "1999",
             "Little Red Corvette"
        ]
    },
    "1245": {
           "artist": "Robert Palmer",
           "tracks": [ ]
    },
        "5439": {
           "album": "ABBA Gold"
        }
};
  
var collectionCopy = JSON.parse(JSON.stringify(collection));   // Création d'une variable copiant l'objet "collection"
function updateRecords(id, prop, value) {     // Création d'une fonction attendant un id, prop et value
    if (value === "") {     // Si "value" est strictement égale à " " (blank)
      delete collection[id][prop];    // Supprime la propriété "prop" de la propriété "id" de l'objet "collection"
    } else if (prop === "tracks") {   // Sinon si "prop" est strictement égal à "tracks"
      collection[id][prop] = collection[id][prop] || [];  // Si "prop" de "id" existe déjà, on le rajoute OU si il n'existe pas, on créer la propriété "prop"
      collection[id][prop].push(value);   // Rajoute "value" à la fin de l'array "prop"
    } else {    // Sinon, si "value" n'est pas blank et "prop" != "tracks"
      collection[id][prop] = value;   // Renvoie la "value" dans "prop"
    }
    return collection;
}
console.log(updateRecords(1245, "artist", "Pedro"));  // Modifie l'artiste de "id = 1245" de "Robert Palmer" à "Pedro"
console.log(updateRecords(5439, "artist", "ABBA"));   // Créer la propriété "artist" dans "id = 5439" avec la valeur "ABBA"

// WHILE LOOP (boucle si "True", break si "False")

var myArray = [];   // Création d'un array vide
var i = 0;          // Création d'une variable avec la valeur "0"
while(i < 3) {    // Tant que "i" est inférieur à 3
  myArray.push(i);  // Rajoute la valeur à la suite de l'array "myArray"
  i++;              // Incrémentation de +1 sur "i" à chaque "while"
}
console.log(myArray)   // Renverra [0,1,2]

// FOR LOOP

var myArray = [];   // Création d'un array vide
for (var i = 0; i < 3; i++) {   // Pour "i = 0", tant que "i est inférieur à 3", on l'incrémente de +1 chaque boucle
  myArray.push(i);    // Rajoute la valeur à la suite de l'array "myArray"
}
console.log(myArray)  // Renverra [0,1,2]


var myArray = [];   
for (var i = 0; i < 21; i += 5) {   // Pour "i = 0", tant que "i est inférieur à 21", on l'incrémente de +5 chaque boucle
  myArray.push(i);    
}
console.log(myArray)  // Renverra [0,5,10,15,20]


var myArray = [];   
for (var i = 10; i > 0; i -= 2) {   // Pour "i = 10", tant que "i est supérieur à 0", on le décrémente de -2 chaque boucle
  myArray.push(i);    
}
console.log(myArray);   // Renverra [10,8,6,4,2]


var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;
for (var i = 0; i < ourArr.length; i ++) {  // Pour "i = 0", tant que "i est inférieur à la longueur de "ourArr"", on incrémente de 1 chaque boucle
  ourTotal += ourArr[i];      // Remplace le "0" de la valeur de variable de base par "ourTotal" + les éléments trouvés dans "ourArr" donc 9 + 10 + 11 + 12
}
console.log(ourTotal);  // Renverra "42"

// FOR LOOP IMBRIQUEES

function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {      // Pour "i = 0", tant que "i est inférieur à la longueur de "arr", on incrémente de 1 chaque boucle
    for (var j = 0; j < arr[i].length; j++)   // Pour "j = 0", tant que "j est inférieur à la longueur de "i" dans "arr", on incrémente de 1 chaque boucle
      product *= arr[i][j]    // Remplace le "1" de la valeur de variable de base par "product" + les éléments trouvés dans "i" et "j" de "arr"
  }
  return product;
}
var product = multiplyAll([[1, 2], [3,4], [5,6]]);  // Création de la variable avec comme valeur, la fonction loop et ses arrays + valeurs
console.log(product);   // Renverra (1*2)*(3*4)*(5*6) donc 720

// DO WHILE LOOP

var myArray = [];
var i = 10;
do {                // Fera cette boucle 1 fois coute que coute
  myArray.push(i);
  i++;
} while (i < 5)     // Vérifiera ensuite la condition "while" pour boucler ou non
console.log(i, myArray);  // Renverra 11 et [10] même si i (10) est supérieur à 5


var contacts = [
  {
    "firstName": "Maxime",
    "lastName": "Raylet",
    "number": "06aa",
    "likes": ["Pizza", "Coding", "Video Games"]
  },
  {
    "firstName": "Jordan",
    "lastName": "Pradier",
    "number": "06bb",
    "likes": ["Burger", "C++", "LoL"]
  }
];
function lookUpProfile(name, prop){
  for (var i = 0; i < contacts.length; i++) {   // Pour "i = 0"; tant que "i est inférieur à la longueur de "contacts" (2)", on incrémente de +1 chaque boucle
    if(contacts[i].firstName === name) {        // Si "firstName" est strictement égal à "name"
      return contacts[i][prop]                    // Retourne "prop" la valeur de "i" la propriété de "contacts"
    }
  }
  return "No such contact";         // Sinon, retourne "No such contact"
}
var data = lookUpProfile("Maxime", "likes");   // Stock la fonction avec les éléments "Maxime" et "likes" dans la variable "data"
console.log(data)     // Affiche la variable "data", donc ["Pizza","Coding","Video Games"]

// FRACTIONS ALEATOIRES

function randomFraction() {
  return Math.random();   // Va renvoyer un nombre entre 0 et 1 (0 inclu et 1 exclu)
}


function randomWholeNumber() {
  return Math.floor(Math.random() * 10); // Retournera un nombre entier (floor) d'un nombre random entre 0 et 1 * 10 donc de 0 à 9
}


function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // Retournera un nombre entier d'un nombre random entre 0 et 1 * ("max" - "min" +1) + "min"
}
randomRange(1, 9);    // Dans ce cas là, entre 1 inclu et 9 exclu 

// FONCTION PARSEINT - CONVERTIR STR EN INT

function convertToInteger(str) {
  return parseInt(str);     // Converti en "int" une string
}
convertToInteger("56");     // Dans ce cas là, "56" deviendra 56


function convertToInteger(str) {
  return parseInt(str, 2)   // Converti en "int" une string en base 2 (binaire) (10 étant classique)
}
convertToInteger("10011");    // Dans ce cas là, "10011", deviendra 10011 qui deviendra 19

// OPERATEUR TERNAIRE

function checkEqual(a, b) {
  return a === b ? true : false   // Si a === b alors true, sinon false
}
console.log(checkEqual(1, 2));    // Renverra false car 1 != 2

// OPERATEUR TERNAIRE MULTIPLES

function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero"   // Si num est supérieur à 0 alors "positive", si num est inférieur à 0 alors "negative", sinon "zero"
}
checkSign(-10);   // Renverra "negative" car -10 est inférieur à 0

// MUTATION DE VARIABLE CONST

const s = [5, 7, 2];      // Création d'une variable constante 
function editInPlace() {    
  "use strict";           // Voir Bloc Notes JS
  // s = [2, 5, 7];       // Comme la variable s est une "const", elle ne pourra pas être redéclarée
  s[0] = 2;       // Changer la 1 ere valeur de "s" en 2
  s[1] = 5;       // Changer la 2 eme valeur de "s" en 5
  s[2] = 7;       // Changer la 3 ere valeur de "s" en 7
}
editInPlace();    // Remplacera "s" de [5, 7, 2] à [2, 5, 7]

// EMPECHER LA MUTATION DE VARIABLE CONST

function freezeObj() {
  "use strict"
  const MATH_CONSTANTS = {    // Initialisation de MATH_CONSTANTS à PI qui est égal à 3.14
    PI: 3.14
  };
  Object.freeze(MATH_CONSTANTS)   // Freeze les valeurs dans MATH_CONSTANTS
  try {           // Essayer de
    MATH_CONSTANTS.PI = 99;   // Associer PI de MATH_CONSTANTS à 99
  } catch( ex ) {     // Sinon
    console.log(ex);  // Print (ex)
  }
  return MATH_CONSTANTS.PI; 
}
const PI = freezeObj();   // Initialisation de la variable const "PI" à la valeur de la fonction "freezeObj" donc 3.14 puisqu'elle est inchangée avec le freeze
console.log(PI);    // Renverra 3.14

// FONCTION ARROW

var magic = function() {    // Fonction anonyme (pas de nom) associée à la variable "magic"
  return new Date();
}
// deviendra
const  magic = () => new Date();


// Si la fonction ne contient qu'un seul paramètre (pas + pas -), il est possible d'omettre les paranthèses:
(userName) => { ... }
// deviendra
userName => { ... }


// Si la fonction ne contient qu'une seule logique (pas + pas -), il est possible d'omettre les {}:
number => { 
  return number * 3;
}
// deviendra
number => number * 3;

// Toutefois si l'on veut retourner un "objet"
number => { age: number };
// deviendra 
number => ({ age: number });
// Car JavaScript interprète les {} comme un body wrapper, pour lui indiquer qu'un objet doit être créé
// il faut l'entourer avec une paire {} supplémentaire


var myConcat = function(arr1, arr2) {   // Fonction à deux arguments
  return arr1.concat(arr2);     // Concaténation des deux arrays transmises
}
myConcat([1, 2], [3, 4, 5]);
// deviendra
const myConcat = (arr1, arr2) => arr1.concat(arr2);
myConcat([1, 2], [3, 4, 5]);

// OPERATEUR REST

const sum = (function() {
  return function sum(...args) {  // Permet d'avoir un nombre infini d'arguments s'ils sont spécifiés
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // Renverra 1 + 2 + 3 donc 6

// OPERATEUR SPREAD

const arr1 = ["JANVIER", "FEVRIER", "MARS", "AVRIL"]; // Création d'array avec ses éléments
let arr2;
(function() {
  arr2 = [...arr1]       // "arr2" = à tout le contenu de "arr1" et non pas une copie directe de l'array
  arr1[0] = "Patate"  // Change la première valeur de "arr1" en "Patate"
})();
console.log(arr2)   // Affichera "arr2" donc "arr1" avant son changement
console.log(arr1)   // Affichera "arr1" avec son changement

// DESTRUCTURATION

var voxel = {x: 3.6, y: 7.4, z: 6.54 };   // Création de la variable avec 3 éléments et leurs valeurs
var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54
// deviendra
const { x : a, y : b, z : c } = voxel; // Récupère le champ de x, y et z et le copier dans les valeurs a, b et c


const AVG_TEMPERATURES = {   
  today: 77.5,
  tomorrow: 79
};
function getTempOfTmrw(avgTemperatures) {
  "use strict"
  const { tomorrow : tempOfTomorrow } = avgTemperatures;   // Prend le champ "tomorrow" de l'objet "avgTemperatures" et l'assinge à la variable "tempOfTomorrow"
  return tempOfTomorrow;
}
console.log(getTempOfTmrw(AVG_TEMPERATURES));   // Retournera 79

// DESTRUCTURATION IMBRIQUEE

const LOCAL_FORECAST = {         // Objet
  today: {min: 72, max: 83},        // Objet imbriqué 1
  tomorrow: {min: 73.3, max: 84.6}  // Objet imbriqué 2
};
function getMaxOfTmrw(forecast) {
  "use strict"
  const { tomorrow : {max : maxOfTomorrow}} = forecast;   // Prend le champ "tomorrow" de l'objet "max" de l'objet "forecast" et l'assigne à la variable "maxOfTomorrow"
  return maxOfTomorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST));    // Retournera 84.6

// ATTRIBUER DES VARIABLES A PARTIR DE TABLEAU AVEC LA DESTRUCTURATION

const [z, x, , y] = [1, 2, 3, 4, 5, 6];  // Déclare une array avec 2 éléments et assigne des valeurs (seulement 1 et 2 seront prises car 2 éléments)
console.log(z, x, y)     // Affichage de z, x et y donc 1, 2 et 4 car le 3 est sauté (non défini dans l'array)


let a = 8, b = 6;     // Défini a = 8 et b = 6
(() => {
  "use strict";
  [a, b] = [b, a]   // Interverti les deux valeurs des variables
})();
console.log(a);   // Affichage de a donc 6
console.log(b);   // Affichage de b donc 8

// DESTRUCTURATION + OPERATEUR REST

const source = [1,2,3,4,5,6,7,8,9,10];    // Création de l'array allant de 1 à 10
function removeFirstTwo(list) {   
  const [ , ,...arr] = list;    // Création d'une variable "arr" contenant les valeurs de "list" sans les deux premières
  return arr;   
}
const arr = removeFirstTwo(source); // Création de la variable contenant les valeurs de l'array "source" en y enlevant les deux premières valeurs avec la fonction removeFirstTwo
console.log(arr);   // Renverra [3,4,5,6,7,8,9,10]
console.log(source);  // Renverra [1,2,3,4,5,6,7,8,9,10]


const stats = {   // Création d'objet avec deux propriétés ainsi que leurs valeurs chacunes
  max: 56.78,
  min: -0.75
};
const half = (function () {   
  return function half({ max, min }) {  // Récupère uniquement les propriétés souhaitées au lieu de tout l'objet
    return (max + min) / 2.0; // Calcule la moyenne des deux valeurs max et min de "stats"
  };
})();
console.log(stats);   // Renverra l'objet entier avec ses deux propriétés et ses valeurs
console.log(half(stats));   // Renverra la moyenne des valeurs des deux stats min et max

// TEMPLATE LITERALS

const person = {        // Création de l'objet "person" ayant 2 propriétés et chacune une valeur
  name: "Maxime Raylet",
  age: 24
};
const greeting = `Hello, my name is ${person.name}!   
I am ${person.age} years old.`;     // Création de la variable "greeting" avec un remplissage automatique pour aller chercher le nom de la personne
console.log(greeting);              // Ainsi que son âge sur deux lignes (``), donc "Hello, my name is Maxime Raylet! I am 24 years old."


const result = {    // Création de l'objet "result" ayant 3 propriétés et chacune une valeur
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  const resultDisplayArray = [];
  for (let i = 0; i < arr.length; i++) { // Tant que i est infénieur à la longueur de "arr" (3), on incrémente de +1
    resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)  // Rajouter le texte entre `` à la fin de la variable résultat
  }
  return resultDisplayArray;
}
const resultDisplayArray = makeList(result.failure);   // Créer la variable résultat et lui donne la propriété "failure" de l'objet "result" à la fonction
console.log(resultDisplayArray)   // Renverra ["<li class='text-warning'>no-var</li>","<li class='text-warning'>var-on-top</li>","<li class='text-warning'>linebreak</li>"]


const createPerson = (name, age, gender) => {   // Création d'une variable qui prend en compte 3 variables (name, age, gender)
  return {        // Retourne un objet aura une série de clés de valeur, où les clés seront name, age, gender et leurs valeurs du même nom (après :)
    name: name,
    age: age,
    gender: gender
  };
};
console.log(createPerson("Maxime", 24, "Homme"));   // Création d'une personne en lui donnant les clés de valeur
// deviendra
const createPerson = (name, age, gender) => ( { name, age, gender })  
console.log(createPerson("Maxime", 24, "Homme"));   


const bicycle = {
  gear: 2,
  setGear(newGear) {   // sans le keyword "function"
    "use strict";
    this.gear = newGear;
  }
};
bicycle.setGear(3)

// CLASS

class Rectangle {       // Création de l'objet "Rectangle" avec la méthode class
  constructor(hauteur, largeur) {   // Permet d'initialiser l'objet créé avec des classes
    this.hauteur = hauteur;
    this.largeur = largeur;
  }
get area() {    // get permet de lier une propriété d'un objet à une fonction qui sera appelée lorsqu'on accédera à la propriété.
    return this.calcArea();
 }
calcArea() {
    return this.largeur * this.hauteur;
 }
}
const carré = new Rectangle(10, 10);   // Renverra 100 car 10*10=100

// GETTERS ET SETTERS - CONTROL D'ACCES

function makeClass() {
  class Thermostat {
    constructor(temp) {
      this._temp = 5/9 * (temp - 32)     // this. veut dire que la variable n'est accessible qu'au sein de cette classe // chaque variable qui commence par _ signifie généralement qu'il s'agit d'une variable privée 
    }                                     // + Conversion de farenheit en celsius
    get temperature(){
      return this._temp;
    }
    set temperature(updatedTemp){
      this._temp = updatedTemp;
    }
  }
  return Thermostat;
}
const Thermostat = makeClass();   // Cette variable aura le result de la fonction makeClass, donc Thermostat
const thermos = new Thermostat(76); // Instanciation d'un objet avec "new" et passage de 76 à "temp" du constructeur
let temp = thermos.temperature;   // Va utiliser le "get" pour définir la valeur de la variable
thermos.temperature = 26;   // Va utiliser le "set" pour rajouter 26 à "updatedTemp"
temp = thermos.temperature;  // Va stocker "updatedTemp" dans "temp"
console.log(temp)   // Affichera 26

// IMPORT ET EXPORT

const cap = capitalizeString("hello");
console.log(cap)    // Renverrais ""capitalizeString" is not defined"
// il faudra alors donner un export dans "autrefichier.js" avec cette ligne
export const capitalizeString = str => str.toUpperCase()
// ou bien 
export { capitalizeString } // dans autrefichier.js
// et l'importer avec cette ligne
import { capitalizeString } from "autrefichier.js"

// pour tout importer d'un fichier
import * as capitalizeStrings from "autrefichier.js";

// et l'appeler avec
console.log(capitalizeString.x)

// ou pour exporter une seule chose d'un fichier avec default export
export default x;
// et pour l'importer
import x from "autrefichier.js";

// ajouter aussi le type module dans le HTML avec "type="module""