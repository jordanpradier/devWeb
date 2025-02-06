# State 3

------------

Chaque composant possède et gère son propre "state", quel que soit le nombre de fois que nous rendons le même composant

Donc même si nous rendons le même composant plusieurs fois sur une page, chacunes de ces instances de composant va opérer indépendament des autres

On peut donc dire que l'UI entière est une représentation de tous les "states" actuels dans tous les composants

Une application React est fondamentalement à propos du changement de "state" et aussi afficher correctement ce "state" au fil du temps, à tout moment

Guide pratique à propos de "state" :

- On devrait créer une nouvelle variable "state" pour toutes les données qu'un composant doit suivre au fil du temps (penser au fait que les variables peuvent être menées à changer au fur et à mesure)

- Lorsqu'on veut rendre quelque chose dynamique dans un composant, créer une "piece-of-state" en accord avec cette chose et mettre à jour le "state" quand cette chose devrait changer (exemple d'une fenêtre avec une variable "isOpen" qui suit si la fenêtre est fermée ou ouverte, si "isOpen" est "true" la fenêtre s'ouvre, si elle est sur "false" la fenêtre se ferme)

- Lorsqu'on veut changer la façon dont un composant est affiché ou les données qui y sont affichées, il faut mettre à jour le "state" avec généralement un "event handler"

- Lorsqu'on construit un composant, il faut imaginer sa "vue" (affichée à l'écran) comme un reflet de l'évolution de "state" dans le temps

- Ne pas utiliser "state" pour des variables qui ne doivent pas amener à un re-rendement (causerais juste des re-rendus non necéssaires et donc une perte de performance)