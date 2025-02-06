# JSX

---------

JSX est une syntaxe déclarative pour décrire à quoi les composants ressemblent et comment ils fonctionnent en se basant sur leur logique et leurs données

Ce qui veut dire que chaque composant doit retourner un bloc de code JSX dont React se servira pour afficher le composant sur l'UI

C'est une extension de JavaScript qui permet de pouvoir écrire du code HTML, CSS, Javascript et des composants React dans un seul bloc de code

Lorsqu'on fabrique des UI en utilisant JavaScript, on utilise par défaut l'approche impérative

Ce qui signifie que l'on choisi manuellement les éléments en traversant le DOM, et on attaches des écouteurs d'évènements aux éléments, alors, à chaque fois que quelque chose se passe dans l'application, comme un clic sur un bouton, on donne au navigateur des instructions étape par étape jusqu'à ce que l'on atteigne la mise à jour désirée

Simplement, on dit au navigateur exactement comment faire les choses

Tandis qu'une approche déclarative est de décrire simplement à quoi l'UI devrait-elle ressembler tous le temps en se basant sur les données actuelles dans le composant (props, state) sans manipuler le DOM 

La différence entre ces deux approches sont que la manière déclarative on utilisera JSX pour dire à React ce que l'on souhaite voir à l'écran (résultat) tandis que la manière impérative donnera des ordres étapes par étapes pour arriver à ce résultat

JSX marche principalement comme du HTML mais il est possible d'entrer en "mode JavaScript" en utilisant des accolades { }

Dans ces accolades { } il est possible d'ajouter des expressions JavaScript par exemple référencer des variables, créer des array, objets, loop sur les array avec des méthodes (map...) et utiliser des opérateurs

Mais il n'est pas possible d'ajouter des "if/else", des boucles "for", des "switch"...

JSX en rendement, produit une expression JavaScript donc

```react
const bonjour = <h1>Bonjour</h1> 
```

produira

```javascript
const bonjour = React.createElement("h1", null, "Bonjour") 
```

Il est possible d'écrire du code JSX partout dans un composant, donc dans un "if/else", l'assigner à des variables et le passer en tant que fonction

Du code JSX peut avoir uniquement un seul élément parent, pour renvoyer plusieurs éléments, il est possible d'utiliser React Fragment (<Fragment> (ou <>))

Il y a des différences entre du JSX et du HTML tout de même voici une liste:
- "class" deviendra "className"
- tous les "tags" (<>) doivent être fermés
- tous les events et les propriétés doivent être écrites en camelCase
- les éléments CSS en ligne doivent être écrits comme : {{<style>}}
- les propriétés CSS doivent aussi être écrites en camelCase
- et les commentaires doivent être entre accolades {/* Commentaire */}
