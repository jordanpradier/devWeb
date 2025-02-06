// DOM Manipulation

// SELECTEURS

document.getElementById("id");      // Manipuler un élément par son id "id"

document.getElementsByClassName("class");      // Manipuler un élément par sa classe "class"

document.getElementsByTagName("tag");      // Manipuler un élément par son tag "tag"

document.querySelector("div");      // Manipuler un élément par son sélecteur "div", si plusieurs éléments partagent le même id, class, tag, il prendra le premier qu'il croise ; si besoin de sélectionner toutes les div par exemple, utiliser le SelectorAll

document.querySelectorAll("element");      // Manipuler les élément par leurs sélecteurs "div"

// STYLISER DES ELEMENTS

// Avec "id"
const item = document.querySelector("#id");  // Sélectionne l'id "id" du document et l'associe à la variable "item"
item.style.color = "red"       // Applique la propriété CSS "color: red" à la variable "item"

// Avec "class"
const listItem = document.querySelector(".class");     // Sélectionne la classe "class" du document et l'associe à la variable "listItem"
for(i = 0; i < listItems.length; i++) {     // Pour "i = 0", tant que "i est inférieur à la longueur de listItems", incrémente +1
    listItems[i].style.color = "red";       // Colorie le texte de tous les éléments de listItems en rouge
}

// CREER UN ELEMENT

const ul = document.querySelector("ul");    
const li = document.createElement('li');    // Associe la variable "li" à "créer une nouvelle "li""
ul.append(li)       // Ajoute l'élément "li" à "ul"
li.innerText = "Hello"  // Donne à "li" le texte "Hello"

// MODIFIER ET MANIPULER UN ELEMENT

// ID

li.setAttribute("id", "id");    // Défini un attribut à "li" créé auparavant avec le type d'attribut "id" et la valeur de l'attribut "id"
li.removeAttribute("id");       // Supprime le type d'attribut "id" de "li"

// CLASS

li.classList.add("list-items");  // Défini un attribut classe à "li", dans ce cas là "list-items"
li.classList.remove("list-items");  // Supprime l'attribut classe à "li", dans ce cas là "list-items"
console.log(li.classList.contains("list-items"));   // Permet de voir si "li" contient l'attribut classe "list-items"

// SUPPRIMER UN ELEMENT

li.remove();    // Supprime l'élément "li"

// TRAVERSER LE DOM

// Vers le haut (parents)
let ul = document.querySelector("ul");
console.log(ul.parentNode);         // Affiche dans la console le parent de l'élément "ul", peut être une "div"
console.log(ul.parentElement);      // Même principe mais affiche un élément et non un noeud 
// Remonter plus haut dans la hiérarchie
console.log(ul.parentNode.parentNode);  // Affiche dans la console le parent & grand parent de l'élément "ul", peut être une "div" puis "body"

// Vers le bas (enfants)
let ul = document.querySelector("ul");
console.log(ul.childNodes);         // Affiche dans la console l'enfant de l'élément "ul", peut être un "li" ou du "text"
console.log(ul.firstChild);         // Affiche dans la console le premier enfant de l'élément "ul"
console.log(ul.lastChild);          // Affiche dans la console le dernier enfant de l'élément "ul"

ul.childNodes[0].style.backgroundColor = "blue";    // Prend le premier élément "[0]" de l'enfant de "ul" et applique un style

console.log(ul.children);           // Affiche dans la console l'enfant de l'élément "ul" en version HTML, sera uniquement un/des "li"
console.log(ul.firstChildren);      // Affichera le premier enfant de l'élément "ul" qui sera sûrement le premier "li"
console.log(ul.lastChildren);       // Affichera le dernier enfant de l'élément "ul" qui sera sûrement le dernier "li"

// Les siblings (frères et soeurs)
let ul = document.querySelector("ul");
console.log(ul.previousSibling);        // Affichera le sibling précédent l'élément "ul", peut être tout dans le HTML
console.log(ul.nextSibling);            // Affichera le sibling suivant l'élément "ul", peut être tout dans le HTML
console.log(ul.previousElementSibling); // Affichera l'élément du sibling précédent l'élément "ul", peut être un "h1"...
console.log(ul.nextElementSibling);     // Affichera l'élément du sibling suivant l'élément "ul", peut être un "h1"...

// EVENT LISTENERS

// Rajouter ceci à ce tag HTML "button" va permettre lors du click du bouton, d'afficher "Je m'appelle Maxime" dans une fenêtre d'alerte
onclick="alert('Je m'appelle Maxime')">Bouton   // A mettre directement dans le HTML

// A mettre dans le JS
const buttonTwo = document.querySelector("button-2");   // Défini la variable "buttonTwo" comme étant la classe "button-2" dans le document
function alertBtn () {      // Création de la fonction alertBtn
    alert("Je m'appelle Maxime également");    // Afficher le texte entre "" dans une fenêtre d'alerte
};
buttonTwo.addEventListener("click", alertBtn);  // Ajoute un EventListener à ma variable "buttonTwo" avec le type d'event "click" et la fonction à appliquer "alertBtn"

// Mouseover
const newBackgroundColor = document.querySelector(".box-3"); // Défini la variable "newBackgroundColor" comme étant la classe "box-3" dans le document
function changeBackgroundColor () {
    newBackgroundColor.style.backgroundColor = "blue";  // Change la couleur du background en bleu
};
newBackgroundColor.addEventListener("mouseover", changeBackgroundColor);    // Ajoute un EventListener à ma variable "newBackgroundColor" avec le type d'event "mouseover" et appelle la fonction "changeBackgroundColor"

// Reveal Event
const revealBtn = document.querySelector(".reveal-btn");            // Défini la variable "revealBtn" comme étant la classe "reveal-btn" dans le document
const hiddenContent = document.querySelector(".hidden-content");    // Défini la variable "hiddenContent" comme étant la classe "hidden-content" dans le document
function revealContent() {                                   // Création de la fonction "revealContent"
    if(hiddenContent.classList.contains("reveal-btn")) [        // Si "hiddenContent" contient la classe "reveal-btn"
        hiddenContent.classList.remove("reavel-btn")                // Enlève la classe "reveal-btn"
    ] else {                                                    // Sinon
        hiddenContent.classList.add("reveal-btn")                   // Ajoute la classe "reveal-btn"
    }
}
revealBtn.addEventListener("click", revealContent);     // Ajoute un EventListener à ma variable "revealBtn" avec un event "click" et appelle la fonction "revealContent"
// et cacher l'élément qu'on veut cacher de base dans le HTML ou CSS
.hidden-content {
    display: none;  // Cache la classe "hidden-btn" 
}
.hidden-content.reveal-btn {
    display: block; // Affiche la classe "hidden-btn"
}

// EVENT PROPAGATION

// Phase 1
// Code qui va notifier les éléments par lesquels il passe dans la console
window.addEventListener("click", function() {   // Quand on clique sur la fenêtre, appelle la fonction
    console.log("Window");        // Qui va renvoyer dans la console "Window"
},true);

document.addEventListener("click", function() {     // Quand on clique sur le document, appelle la fonction
    console.log("Document");      // Qui va renvoyer dans la console "Document"
},true);

document.querySelector("div").addEventListener("click", function() {    // Quand on clique sur la div, appelle la fonction
    console.log("Div");           // Qui va renvoyer dans la console "Div"
},true);

// Phase 2
document.querySelector("button").addEventListener("click", function(e) {    // Quand on clique sur le bouton, appelle la fonction
    console.log(e);               // Qui va renvoyer dans la console "e", l'event object qui va notifier tout ce qu'il s'est passé sur ce bouton
},true);
// exemple de "e"
document.querySelector("button").addEventListener("click", function(e) {    
    console.log(e.target);        // Aurait renvoyé la cible, donc notre bouton avec "<button>Bouton</button>"         
},true);

document.querySelector("button").addEventListener("click", function(e) {    
    console.log(e.target.innerText = "Maxime");        // Aurait remplacé la cible par le texte "Maxime" & le texte de notre bouton en "Maxime" donc comme si c'était "<button>Maxime</button>"    
},true);

// Phase 3
// Code qui va notifier dans le sens inverse, les éléments par lesquels il passe dans la console donc target jusqu'à root
window.addEventListener("click", function() {  
    console.log("Window");        
},false);

document.addEventListener("click", function() {    
    console.log("Document");     
},false);

document.querySelector("div").addEventListener("click", function() {    
    console.log("Div");           
},false);

document.querySelector("button").addEventListener("click", function(e) {    
    console.log(e);               
},false);
// exemple de "e" si l'on veut stop la propagation à "div" (dans la capture ou le bubbling)
document.querySelector("div").addEventListener("click", function(e) {    
    e.stopPropagation();
    console.log("Div");
},false);

// Il est possible de notifier qu'une seule fois dans la console un élément avec 
document.querySelector("div").addEventListener("click", function() {    
    console.log("Div");           
},{once: true});    // Ceci

// Il est possible de mettre un type par défaut avec
document.querySelector(".button").addEventListener("click", function(e) {   
    e.preventDefault()      // Ceci 
    console.log(e.target.innerText = "Maxime");        
},true);

// EVENT DELEGATION

document.querySelector('#list1').addEventListener("click", function(e) {    // Quand on clique sur l'élément avec la classe "list1", appelle la fonction
    console.log("list1 is clicked")     // Affiche dans la console "list1 is clicked"
    const target = e.target;            // Défini la variable "target" comme étant la cible de l'élément donc "list1"
    if(target.matches("li")) {          // Si "list1" est un type "li"
        target.style.backgroundColor = "blue";   // Changer la couleur de fond en bleu
    }
})
// dupliquer pour tous les éléments de la liste pour les affecter de la même façon mais il y a une manière d'améliorer le code avec l'event delegation
document.querySelector("#list").addEventListener("click", function(e) { 
    console.log(e.target.getAttribute("id") + ' is clicked')   // Lorsque on clique sur la cible qui a un attribut "id" va renvoyer dans la console "id_de_l'element_de_la_liste" is clicked"
    const target = e.target;
    if(target.matches("li")) {
        target.style.backgroundColor = "blue";  // Change la couleur de fond en bleu à tous les éléments "li" dans la "#list", donc les enfants présents à l'intérieur et les futurs enfants
    }
})
