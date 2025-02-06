# Lifting Up State

-------

Lorsqu'on a besoin de remonter le state au composant parent pour le partager à ses composants enfants, il faut aussi donner la possibilité à ceux-ci de récupérer les données de ce state

C'est pour cette raison qu'il faut le(s) lui donner dès l'affichage des composants enfants dans le composant parent

```react
export default function App() {
  const [items, setItems] = useState([]);
    
   function handleAddItems(item) {
	  setItems((items) => [...items, item]);
   }
    
   return (
    <div className="app">
      <Form onAddItems={handleAddItems} />
    </div>
   );      
```

Ici, nous déclarons un state dans le composant parent du composant enfant "Form" et nous lui passons la fonction associée à cet état directement dans le marquage HTML du JSX que retournera le composant parent

```react
export default function Form({ onAddItems }) {
  onAddItems(newItem);
}
```

Et ici, nous nous en servons directement depuis le composant enfant "Form", c'est aussi faisable sur tous les composants enfants du composant parent et c'est aussi possible de lui en donner plusieurs de la même manière

```react
<PackingList
   items={items}
   onDeleteItem={handleDeleteItems}
   onToggleItem={handleToggleItem}
/>

function PackingList({ items, onDeleteItem, onToggleItem }) {}
```

C'est ce qu'on appelle une communication "enfant à parent" ou child-to-parent