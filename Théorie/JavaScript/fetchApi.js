fetch("https://jsonplaceholder.typicode.com/users")         // Appelle une API fetch() avec son URL

// Renverra un Promise contenant les données de réponse
// Ces données de réponse contiennent des propriétés pour le statut
// Ainsi que des méthodes pour convertir les données de réponse brutes en JSON, texte ou autres formats.

fetch("https://jsonplaceholder.typicode.com/users").then(res => {
  console.log(res.ok) 
  console.log(res.status) 
  return res.json()
})

// Appelle la méthode JSON dans notre réponse et retourne depuis la fonction ".then()"
// Car la méthode JSON retourne aussi un Promise qui évalue les données JSON de notre réponse
// On peut enchaîner un 2eme ".then" pour récupérer les données de la méthode JSON

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => console.log(data))

// La plupart de vos requêtes de récupération, si vous les récupérez à partir d'une API JSON, ressembleront à ça
// Récupération de l'URL en premier, convertir la réponse en JSON et enfin utiliser les données dans ".then"


// --------------------------------------------------------------------------------------------------------------- //

// Fetch Options

// method: Permet de définir quel verbe HTTP utiliser (GET, POST, PUT, DELETE...)

fetch("https://jsonplaceholder.typicode.com/users/2", {
  method: "DELETE",
})

// body: Si vous modifiez la méthode, vous devrez probablement transmettre des données avec votre demande
// C'est là que l'option "body" entre en jeu, cette option n'accepte pas les objets, donc si on souhaite transmettre
// du JSON à notre API, il faut d'abord le convertir en string avec "stringify"

fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  body: JSON.stringify({ name: "Kyle" }),
})

// headers: method et body ne suffisent pas pour transmettre du JSON à une API, il faut aussi définir les headers 
// appropriés pour lui indiquer que nous envoyons des informations en JSON
// headers permet de définir n'importe quel header HTTP de notre choix.

fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  body: JSON.stringify({ name: "Kyle" }),
  headers: { "Content-Type": "application/json" },
})


// --------------------------------------------------------------------------------------------------------------- //

// Options Avancées

// 90% du temps, les 3 options ci dessus correspondront à nos besoins de récupération, il existe quelques options à connaitre

// mode: Permet de spécifier si la demande est une demande "cors", "no-cors" ou "same-origine"
// Par défaut, toutes les demandes fetch sont "cors" donc nous pouvont y accéder avec d'autres origines, mais
// si l'on veut forcer le fetch à donner uniquement "same-origin", 
// qui généreront une erreur si vous essayez de récupérer une URL qui ne se trouve pas sur la même origine

fetch("https://jsonplaceholder.typicode.com/users", {
  mode: "same-origin",
}).catch(e => console.error(e))

// credentials: Ses options peuvent être "omit", "same-origin" ou "include" et détermineront si l'API de récupération
// transmet et reçoit ou non des cookies et d'autres informations basées sur les informations d'identification
// "omit" n'enverra/recevra aucune information d'identification
// "same-origin" n'enverra/recevra que les informations d'identification à partir de la même URL
// "include" enverra/recevra des informations d'identification à partir de n'importe quelle URL
// Cette option est par défaut réglée sur "same-origin"

fetch("https://jsonplaceholder.typicode.com/users", {
  credentials: "include",
})

// signal: Prend en compte un "AbortSignal" qui peut être utilisé pour abandonner une demande de récupération

const controller = new AbortController()

fetch("https://jsonplaceholder.typicode.com/users", {
  signal: controller.signal,
}).catch(e => console.error(e.name)) 

controller.abort()

// Il faut d'abord créer un nouveau "AbortController" qui aura une propriété "signal" puis une méthode "abort"
// qui, quand elle est appelée, abandonne la demande de récupération avec le "signal" associé.
// Ce qui entraînera le Promise du fetch à rejeter une "AbortError"


// --------------------------------------------------------------------------------------------------------------- //

// Utilisation de Fetch Avancées

// La chose qui est confuse avec le fetch API, c'est qu'il n'enverra pas d'erreur, la seule façon de déterminer
// s'il y a un échec de la demande est de vérifier avec la propriété "ok"

fetch("https://jsonplaceholder.typicode.com/users/-1").then(res => {
  console.log(res.ok) 
  console.log(res.status) 
})

// A cause de cette nuance, il faut souvent écrire du code pour faire échouer une demande lorsque le statut n'est pas correct

fetch("https://jsonplaceholder.typicode.com/users/-1")
  .then(res => {
    if (res.ok) return res.json()
    return Promise.reject(res)
  })
  .then(data => console.log(data))
  .catch(res => console.error(res.status)) 

// Si la réponse est correcte, je garde tout mon code comme d'habitude, sinon je renverra un Promise rejeté contenant
// la réponse afin de pouvoir la gérer dans un fichier ".catch", ou même créer sa propre fonction de récupération perso

function jsonFetch(url, { body, headers, ...options } = {}) {
    return fetch(url, {
      headers: { "Content-Type": "application/json", ...headers }
      body: JSON.stringify(body)
      ...options
    })
    .then(res => {
      if (res.ok) return res.json()
      return Promise.reject(res)
    })
    .then(res => res.json())
  }

// Prendra en charge tout le code supplémentaire dont j'ai besoin pour envoyer des donénes JSON et me permet toujours
// d'utiliser toutes les options personnalisées de récupération
// Gère également les erreurs