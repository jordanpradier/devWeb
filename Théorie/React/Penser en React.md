# Penser en React

-----------

Pour construire des applications React, il ne faut pas seulement apprendre à savoir comment travailler avec l'API React (fonctions, useState...), il faut aussi être capable de "penser en React" et entrer dans ce mindset

Lorsqu'on construit une application, penser en React veut dire qu'il faut avoir un bon mental de modèle pour comment et quand utiliser tous les outils React comme les composants, "state", "props", data-flow, effets...

Il est aussi question de toujours penser en terme de transition de "state" plutôt que des mutations "state"

Le procédé pour penser en React:
1. Diviser l'UI désirée en plusieurs composants et établir un arbre hiérarchique (ré-usabilité et composabilité des différents composants)
2. Construire une version statique de l'UI (sans "state", sans intéractivité)
3. Penser à "state", quand l'utiliser, les types de "state" (local ou global) et ou placer ces "piece of state"
4. Etablir de 'data flow', penser au "one-way data flow", la communication entre composants parents et enfants et la manière d'accéder au "state" global 

Les étapes 3 et 4 sont ce qu'on appelle "state management"

Les bonnes questions à se poser:
- Comment découper une UI en différents composants ?

- Comment rendre des composants ré-utilisables ?

- Comment assembler l'UI avec des composants ré-utilisables ?

- Quel "piece of state" j'ai besoin pour l'intéractivité ?

- Où faut-il placer "state" (Quel composant doit détenir chaque "piece of state" ?

- Quel type de "state" devrais-je utiliser ?

- Comment faire circuler les données dans l'application (data flow) ?

  

  [Thinking in React](https://react.dev/learn/thinking-in-react)
