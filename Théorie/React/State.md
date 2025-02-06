# State

-----------

State est le concept le plus important de React

State est une donnée qu'un composant peut conserver dans le temps et qui est nécessaire pour les informations dont il doit se souvenir tout au long du cycle de vie de l'application

On peut dire en tant qu'analogie que c'est la mémoire d'un composant

On parle de "piece of state" qui sont une seule variable dans un composant 

L'aspect le plus important de "state" est de savoir que le mettre à jour préviens React de ré-évaluer le composant, donc créer une nouvelle vue mise à jour pour le composant

On parle de "vue" pour parler du rendu d'un seul composant, et donc toutes les "vues" combinés ensembles donnent l'UI finale

On a parlé aussi du fait que le but de React était de synchroniser les données avec l'UI, c'est le rôle de "state", on change le "state", on change l'UI

"state" permet aux développeurs de faire 2 choses importantes:
- Mettre à jour la vue du composant (re-rending) donc changer des parties de l'UI
- Faire persister les variables locales entre les rendus et les re-rendus

State est un outil, qui quand il est bien maîtrisé, débloque la vraie puissance de React