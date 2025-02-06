# Composants

---------

Les applications React sont entièrement faites à partir de composants créés, ce sont les blocs de construction des UI.

C'est une pièce de l'interface qui a ses propres données, sa propre logique et sa propre apparence (comment elle fonctionne et à quoi elle ressemble)

Construire des UI complexes se fait en construisant de multiples composants et en les combinant comme des LEGOS

Ils peuvent être réutilisés et imbriqués à l'intérieur d'autres composants pour passer des données entre eux

On fait aussi référence à une hiérarchie, un arbre pour évoquer l'arborescence des composants parents et enfants

Les deux règles importantes lors de la création d'un composant sont :

- Toujours créer le nom de la fonction composant en commençant par une majuscule pour éviter les conflits avec d'autres éléments pré-établis (header // Header)

- Toujours retourner une valeur avec "return", et uniquement une seule valeur, par exemple une <div> pour pouvoir imbriquer d'autres éléments à l'intérieur

