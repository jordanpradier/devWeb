# Props

-------------

C'est un outil essentiel de React pour configurer et personnaliser des composants

Les props sont utilisés pour passer des données des composants parents vers les composants enfants (vers le bas de l'arbre), on s'en sert donc pour communiquer entre les composants parents et enfants

Avec les props, les composants parents contrôlent comment les composants enfants fonctionnent et à quoi ils ressemblent

Ce sont tout comme des arguments passés à des fonctions JavaScript régulières

N'importe quoi peut être passé avec les props, des strings, des nombres, des tableaux, des objets, des fonctions et même d'autres composants (tout type de valeurs)

Les props ne peuvent être modifiés dans le composant enfant, ils peuvent uniquement être mis à jour dans le composant parent lui-même

Ce qui veut dire que les props sont immuables (ne changent pas), ils sont en lecture-seule

Les props sont des objets, si l'on pouvait changer ces props dans les composants, cela affecterais aussi le composant parent car c'est comme ça que les objets fonctionnent en JavaScript

Un composant ne doit jamais changer les données qui sont écrites en dehors de sa portée de fonction

Si toutefois, on a besoin de changer ces props, on a besoin de "state"

State est utilisé pour les données qui changent au fil du temps

"One-way data flow" veut dire que dans les applications React, les données peuvent uniquement être passées des composants parents vers ses composants enfants

En d'autres termes, les données proviennent des parents vers ses enfants mais jamais dans l'autre sens, donc du haut vers le bas de l'arbre composants hiérarchique 

React utilise ce one-way data flow pour rendre les applications beaucoup plus prévisibles et beaucoup plus simples à comprendre

C'est aussi beaucoup plus simple à débugger car nous avons beaucoup plus de contrôle sur les données et on comprend exactement comment le circuit de données circule autour de l'application

Et pour finir, cette méthode de one-way data flow est beaucoup plus performante 

