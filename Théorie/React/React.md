# Qu'est-ce que React?

-------

- ## Les composants

React utilise des composants pour construire à l'aide de différents blocs de code, une interface utilisateur

Tout ce que React fait, c'est prendre ces différents composants et les dessiner sur une page web en les assemblant comme des LEGOS

La force des composants réside dans le fait qu'ils soient réutilisables, par exemple pour coder un e-shop, il faudra définir la structure de base d'un objet à vendre et le réutiliser en adaptant les données selon l'objet à vendre

---------

- ## Syntaxe déclarative

Une syntaxe déclarative veut simplement dire qu'on dira à React à quoi ressemblera mon interface utilisateur et mes composants basé sur l'état actuel, les données actuelles

React fait totalement abstraction du DOM au contraire de JavaScript, nous aurons donc jamais à travailler directement avec le DOM

Il y a donc simplement à dire à React que veut-on qu'il se passe quand des données changent, et non comment le faire, c'est une syntaxe déclarative utilisant "JSX"

JSX est une syntaxe qui combine du code HTML, CSS, JavaScript et elle nous permet même de référencer d'autres composants React

--------

- ## State-driven

Il est important de se rappeler que le but principal de React est de synchroniser l'interface utilisateur avec les données, qu'on appellera "state"

En reprenant l'exemple d'un e-shop, le "state" sera un tableau de multiples objets à vendre, basé sur ce "state" initial, React va créer une interface utilisateur grâce à JSX et par la suite, avec l'aide d'un bouton par exemple, le "state" pourrait changer

Quand le "state" change, nous allons manuellement le mettre à jour dans notre application et React va automatiquement recréer l'interface utilisateur pour rafraîchir le "state" le plus récent

----------

- ## Librairie ou Framework ?

React se définit comme une librairie et non un Framework car il est simplement la partie "visuelle", il est nécessaire de prendre plusieurs autres librairies pour construire des applications web complètes

Plusieurs librairies se sont construites autour de React (Next.js / Remix) pour inclure ces fonctionnalités qu'il manque à React pour construire ces applications web complètes

-------

- ## Pourquoi choisir React ?

React est extrêmement populaire, la librairie la plus utilisée dans le monde

La plupart des grosses compagnies ont choisi React pour construire leur interface utilisateur (Netflix, PayPal, AirBNB...) et c'est dans ce fait là que les plus petites compagnies ont suivi le pas qu'on fait les géants

C'est pour cela que le besoin de développeurs React se fait ressentir dans tous types de compagnies, qu'elles soient petites, moyennes ou grandes

Par effet boule de neige, il y a maintenant, une large communauté autour de React partout à travers le web, ce qui veut dire qu'il y aura toujours beaucoup de tutoriels, de questions et surtout de réponses et de supports à son sujet

-------

- ## Pour résumer

Créer et rendre des composants sur une interface utilisateur basé sur l'état actuel des 'state' et garder cette interface utilisateur synchronisée avec les "state" en les recréant quand ceux-ci changent

React accompli tout ça en employant un DOM virtuel, un arbre hiérarchique "one-way data flow" et beaucoup d'autres techniques

