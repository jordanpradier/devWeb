# Derived State

------

C'est un "state" qui est calculé à partir d'un autre "piece of state" ou de props

Voici un mauvais exemple de l'utilisation de state trop abusé

```react
const [cart, setCart] = useState([
	{name : "Livre 1", price: 13},
	{name : "Livre 2", price: 10},
]);
const [numItems, setNumItems] = useState(2)
const [totalPrice, setTotalPrice] = useState(23)
```

Ici, cette pratique de déclaration de state ne ferait que d'augmenter les risques d'avoir des problèmes dans notre application

Comme on peut le voir, le premier state suffirait à notre application car les deux derniers sont simplement une somme des objets dans le panier et le second un calcul des différents objets dans le panier

Le besoin de les garder synchronisé et mis à jour en même temps deviens donc assez redondant et compliqué à faire, de plus, ces 3 state rendront 3 re-render de l'application au lieu d'un simple qui aurait suffit avec uniquement le premier state

Au lieu de ça, il est possible de dériver le premier state pour rendre le nombre d'objets et le prix total du panier car ce state suffit à rendre les données désirées

```react
const [cart, setCart] = useState([
	{name : "Livre 1", price: 13},
	{name : "Livre 2", price: 10},
]);
const numItems = cart.length
const totalPrice =
	cart.reduce((acc, cur) => acc + cur.price, 0)
```

On les stock dans des variables normales au lieu d'utiliser le hook useState, donc éviter un re-render inutile dans ce cas

Ce seul state agît comme une "source unique de vérité" pour ces données liées et s'assure qu'ils soient toujours synchronisés