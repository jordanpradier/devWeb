# State Management

----------------

Décider quand il faut créer une "piece of state", quel type de "state", où placer chaque "piece of state" et comment les données vont circuler dans l'application

Pour résumer penser à l'analogie selon laquelle le state management consiste essentiellement à donner à chaque "piece of state" un 'endroit' dans notre code React

Plus l'application est grande, plus le besoin de trouver le bon endroit pour chaque "piece of state" commence à devenir important peu importe si cet endroit est le composant où on a besoin de ce "state" en premier lieu

Dans React, chaque "piece of state" est soit une "local state" ou une "global state"

### Global State : 

- "state" nécessaire à de nombreux composants
- "state" partagé, accessible à tous les composants dans l'entièreté de l'application
- Par exemple le panier d'achat de Udemy (besoin pour mettre à jour le prix, le panier en lui même...)

### Local State : 

- "state" qui est nécessaire seulement par 1 ou peu de composants (enfants, siblings)
- "state" défini dans un composant et seulement ce composant et ses composants enfants y auront accès (en passant par les "props")
- Par exemple la barre de recherche de Udemy

Nous devrions toujours commencer avec des "local state" et seulement les bouger au global si l'on en a réellement vraiment besoin

---------

## State: Quand et Ou ?

### Quand ?

Besoin de stocker des données -> Est ce que ces données vont changer dans le futur ?

Si non, utiliser une simple variable const

Si oui, est ce que ces données peuvent être calculées depuis un/des "piece of state" ou "props" existants?

Si oui, dériver le "state", donc le calculer grâce à un "state" ou un "prop" existant

Si non, est ce que mettre à jour le "state" devrait re-render le composant ?

Si non, utiliser "useRef" qui conserve les données dans le temps comme des "state" réguliers mais ne re-render pas le composant

Si oui, dans ce cas, créer un "useState" dans le composant en construction (local state en premier lieu)

### Ou ?

Est ce que ce "useState" est utilisé seulement dans le composant actuel ?

Si oui, le laisser dans ce composant

Si non, est ce que ce "useState" est aussi utilisé par un composant enfant ?

Si oui, passer ce "state" grâce aux "props"

Si non, est ce que ce "useState" est aussi utilisé par 1 ou plusieurs composants siblings ou même des composants parents ?

Il est temps d'élever jusqu'au premier composant parent en commun (lifting state up)

Et si, le "useState" est nécessaire à encore + que quelques composants siblings, donc potentiellement partout dans les composants => utilisation d'un global state







