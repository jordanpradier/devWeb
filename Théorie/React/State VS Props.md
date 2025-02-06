# State VS Props

------------

- State est une donnée interne gérée par le composant dans laquelle elle est déclarée, c'est la mémoire d'un composant et peut être mis à jour par le composant lui-même ce qui mène à un re-render du composant, c'est utilisé pour prendre des composants interactifs

- Props est une donnée externe gérée par le composant parent, c'est à voir comme les paramètres d'une fonction, une communication entre un composant parent et un composant enfant où le parent peut donner des données à son enfant, ces props sont en lecture seule donc ils ne peuvent pas être modifiés par le composant qui les reçois

Toutefois, quand le composant enfant reçoit des nouveaux props mis à jour, cela fera en sorte que le composant re-render

Quand "state" est utilisé pour rendre un composant interactif ; les props sont généralement utilisés pour donner au composant parent le pouvoir de configurer le(s) composant(s) enfant(s)

Pour conclure, lorsqu'une 'piece of state' d'un composant parent est reçue comme un prop dans le composant enfant et quand ce "state" est mis à jour, les deux composants sont re-render