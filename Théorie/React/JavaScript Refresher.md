# JavaScript Refresher

------

- ## Destructuring

La déstructuration est une fonctionnalité qui permet d'extraire des données d'objets ou de tableaux en assignant directement leurs valeurs à des variables.

Plutôt que d'accéder aux propriétés d'un objet ou aux éléments d'un tableau un par un, la déstructuration permet de les extraire en une seule étape, simplifiant ainsi le code et le rendant plus lisible 

En utilisant la syntaxe d'accolades {} pour les objets et de crochets [] pour les tableaux

```javascript
const person = { name: 'John', age: 30 };
const { name, age } = person;
```

Ici, les variables "name" et "age" seront créées avec leurs valeurs "John" et "30", des valeurs récupérées dans l'objet "person"

-------

- ## Opérateurs Spread & Rest

L'opérateur spread (...) est utilisé pour étendre les éléments d'un tableau ou les propriétés d'un objet

Il permet de décomposer un tableau en ses éléments individuels ou un objet en ses propriétés, facilitant la manipulation et la création de nouveaux tableaux ou objets

```javascript
const numbers = [1, 2, 3];
const allNumbers = [...numbers, 4, 5];
```

Ici, "allNumbers" contiendra donc : [1, 2, 3, 4, 5]

L'opérateur rest (...) est utilisé pour rassembler les éléments restants d'un tableau ou les propriétés restantes d'un objet en un seul élément, il est souvent utilisé dans la déstructuration ou dans la définition de fonctions pour gérer un nombre variable d'arguments

```javascript
function sum(...numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1, 2, 3)); 
console.log(sum(1, 2, 3, 4, 5)); 
```

Ici, "...numbers" sera utilisé pour gérer un nombre variable d'arguments donnés lors de l'appel de la fonction

--------

- ## Template Literals

Les template literals permettent d'incorporer des expressions dans des string de manière flexible et lisible

Ils sont délimités par des `` au lieu de quotes (" ")

A l'intérieur, on peut y inclure des variables, des expressions ou des fonctions en les entourant de `${}` 

Cela permet d'interpoler dynamiquement des valeurs dans une string

```javascript
const name = 'John';
const age = 30;
console.log(`Bonjour, je m'appelle ${name} et j'ai ${age} ans.`);
```

Les template literals offrent une syntaxe plus concise et plus expressive rendant le code plus lisible et plus facile à maintenir

--------

- ## Les Opérateurs Ternaires

Egalement appelés opérateurs conditionnels, ils permettent d'écrire des expressions conditionnelles de manière concise

Ils se composent de 3 parties, une condition, suivie d'un "?", une expression à évaluer si la condition est vraie, puis un ":" suivi d'une autre expression à évaluer si la condition est fausse

```javascript
const age = 30;
const message = (age >= 18) ? 'Majeur' : 'Mineur';
console.log(message);
```

Ici, le console.log va afficher "Majeur" si l'âge est supérieur ou égal à 18, sinon il affichera "Mineur"

-------

- ## Arrow Functions

Les fonctions fléchées sont une syntaxe plus concise pour définir des fonctions

Elles offrent une syntaxe plus légère et des comportements particuliers par rapport aux fonctions habituelles

Elles permettent de réduire le code en omettant le mot-clé "function" ainsi que les accolades et le mot-clé "return"

Elles capturent le contexte de leur environnement, elles ne possèdent pas leur propre "this", "arguments", "super" ou "new.target" mais les prennent à leur environnement parent

Fonction traditionnelle :

```javascript
function addition(a, b) {
  return a + b;
}
```

Fonction fléchée équivalente : 

```javascript
const addition = (a, b) => a + b;
```

Elles sont couramment utilisées pour des fonctions anonymes, des fonctions de rappel (callbacks) ou des méthodes de classe

Il faut faire attention à leur comportement particulier en ce qui concerne le "this", surtout lorsqu'elles sont utilisées dans des méthodes d'objets ou des fonctions constructrices

--------

- ## Short Circuiting et Opérateurs Logiques "&&", "||" et "!"

Avec l'opérateur "&&" si le premier opérant est évalué à "false", l'expression entière retourne cette valeur sans évaluer le second opérant, est utilisé pour vérifier deux conditions simultanément

```javascript
const age = 25;
const carteID = true;
const entrerClub = age >= 18 && carteID;
```

Si l'âge est supérieur ou égal à 18 ET que la personne a sa carte d'identité, elle peut entrer

Avec l'opérateur "||" si le premier operand est évalué à "true", l'expression entière retourne cette valeur sans évaluer le second operand, elle est utilisé pour vérifier au moins une des conditions

```javascript
const estMembre = false;
const estPremium = true;
const entrerClub = estMembre || estPremium;
```

Si la personne est déjà membre OU elle a un accès premium, elle peut entrer

Avec l'opérateur "!" de négation, on retourne la valeur inverse de sa valeur booléenne

```javascript
const estConnecte = true;
if (!estConnecte) {
  console.log("Vous devez vous connecter pour accéder à cette fonctionnalité.");
} else {
  console.log("Bienvenue !");
}
```

Si l'utilisateur N'EST PAS connecté, affiche un message d'erreur, sinon, affiche "Bienvenue!"

--------

- ## Optional Chaining

Fonctionnalité qui permet d'accéder aux propriétés ou méthodes d'un objet sans risque de déclencher une erreur si l'objet est "null" ou non défini

Il utilise l'opérateur "?" pour vérifier si chaque niveau de la chaîne d'accès existe avant de tenter d'accéder à la propriété ou à la méthode suivante

Si un niveau est "null" ou non déclaré, l'évaluation s'arrête et retourne "undefined"

Cela permet d'éviter les erreurs de type "TypeError" lorsque l'on accède à des propriétés d'objets imbriqués

```javascript
const user = {
  name: 'John',
  address: {
    street: '123 Main St',
    city: 'Wonderland'
  }
};
```

Accès aux propriétés sans optional chaining :

```javascript
const city = user.address ? user.address.city : 'Unknown';
console.log(city); 	Affichera : "Wonderland"
```

Accès aux propriétés avec optional chaining :

```javascript
const city = user.address?.city ?? 'Unknown';
console.log(city); 		Affichera : "Wonderland"
```

Dans cet exemple, "user.address?.city" utilise l'optional chaining pour accéder à la propriété "city" de l'objet "address" sans générer d'erreur même si "address" est "null" ou non défini

Si "address" est défini, "city" est assigne à sa valeur sinon, on retourne "Unknown"

--------

- ## Les Méthodes "map", "filter", "reduce" et "sort"

Ce sont des méthodes de manipulation de tableau

"map" crée un nouveau tableau en appliquant une fonction de transformation à chaque élément du tableau d'origine SANS modifier le tableau d'origine

```javascript
const numbers = [1, 2, 3];
const doubledNumbers = numbers.map(num => num * 2);
```

Ici, "doubledNumbers" affichera [2, 4, 6]

"filter" créer un nouveau array contenant uniquement les éléments du tableau d'origine qui satisfont une condition donnée par une fonction de test

```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
```

Ici, "evenNumbers" affichera uniquement les nombres paires donc [2, 4]

"reduce" permet de réduire un array à une seule valeur en appliquant une fonction de réduction à chaque élément de l'array, la fonction de réduction prend deux arguments: l'accumulateur et la valeur courante

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
```

Ici, après le calcul de la somme des éléments du tableau, "sum" renverra "15"

"sort" permet de trier les éléments d'un array selon un ordre spécifié, par défaut elle trie les éléments de l'array

```javascript
const numbers = [4, 2, 8, 5, 1];
numbers.sort();
```

Ici, "numbers" affichera les éléments dans l'ordre [1, 2, 4, 5, 8]

```javascript
const numbers = [4, 2, 8, 5, 1];
numbers.sort((a, b) => b - a);
```

Ici, "numbers" affichera les éléments dans l'ordre décroissant [8, 5, 4, 2, 1]

----------------

- ## Immutable Arrays

Travailler avec des tableaux immuables signifie manipuler des tableaux de manière à garantir que leur contenu ne peut pas être modifié après leur création

Contrairement aux tableaux "muables" où les opérations de modification "push" "pop" "splice"... modifient directement le tableau d'origine, les opérations sur les tableaux immuables créent plutôt de nouveaux tableaux sans modifier les originaux

Cela permet d'éviter des effets de bord indésirables, rendant le code plus prévisible et plus facile à raisonner, surtout dans des contextes où l'immuabilité est importante, comme la gestion des états dans les applications React

--------------

- ## Asynchronous Promises (async, await)

Fait référence à l'utilisation combinée de fonctions asynchrones "async" et de promesses "Promise"

Les fonctions asynchrones permettent d'écrire du code asynchrone de manière plus synchrone et lisible en utilisant les mots-clés "async" et "await"

Les promesses sont des objets qui représentent l'état d'une opération asynchrone et permettent de gérer les résultats ou les erreurs de ces opérations de manière plus structurée

"async" retourne automatiquement une promesse, ce qui permet d'utiliser "await" à l'intérieur pour attendre que d'autres promesses se résolvent avant de poursuivre l'exécution du code

```javascript
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error))
  .finally(() => console.log('Fin de la requête'));
```

Dans cet exemple, la fonction "fetchData" est déclarée comme "async", ce qui permet l'utilisation de "await" à l'intérieur pour attendre que la promesse retournée par "fetch" soit résolue avant de continuer l'exécution

"then" prend une ou deux fonctions de rappel en argument : la première est exécutée lorsque la promesse est résolue avec succès et reçoit la valeur résolue en paramètre, et la deuxième est exécutée en cas de rejet de la promesse

"catch" est exécutée uniquement en cas de rejet de la promesse et reçoit l'erreur comme paramètre

"finally" est exécutée quels que soient le résultat ou l'échec de la promesse et ne reçoit aucun paramètre