# State 2

------------

Le hook "useState" doit être déclaré TOUT EN HAUT du composant avant même son "return"

Avec React, une "vue" est mise à jour par le fait qu'il re-rend l'entièreté du composant (par sa fonction) dès lors qu'il trouve un changement de données dans celui-ci

On peut conceptuellement imaginer que React enlève l'entièreté de la "vue" pour la remplacer par une nouvelle à chaque fois qu'il y a un re-rendu nécessaire :

```
STATE 			->		RENDER 		   -> 		VIEW
```

Lors d'un clic sur un bouton avec un "event handler" :

```
UPDATED STATE	->		RE-RENDER 		-> 		UPDATED VIEW
```

La conclusion est qu'en tant que développeur React, lorsqu'on souhaite mettre à jour une vue d'un composant, il faut mettre à jour son "state"