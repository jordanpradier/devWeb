// Synchrone

console.log("I");
console.log("eat");
console.log("Ice Cream");       // Va afficher les 3 à la suite, 1 puis 2 puis 3


// Asynchrone

console.log("I");
setTimeout(()=>{                // Arrow function
  console.log("eat");           // Met un timeout de 2 secondes sur l'affichage de "eat"
},2000)
console.log("Ice Cream")


// Callback

function one(callTwo) {                                 // Paramètre supposé être une fonction
    console.log("Step 1 complété, appelez Step 2");     // Fonction "one" qui affiche "Step 1 complété, appelez Step 2"
    callTwo();                                          // Appelle la fonction "call_two" qui est "two"
}
function two() {
    console.log("Step 2");                              // Fonction "two" qui affiche "Step 2"
}
one(two);                                               // Appelle la fonction "one" avec l'argument "two"

// Exemples explicites

let order = (callProduction) => {
    console.log("Commande effectuée, appelez la production");
    callProduction();
};
let production = () => {
    console.log("Commande reçue, commencement de la production");
};
order(production); 

// Projet ice-cream

let stocks = {                                                // Déclare une variable objet contenant
    fruits : ["strawberry", "grapes", "banana", "apple"],     // Plusieurs éléments avec des arrays et des valeurs
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};

let order = (fruitName, callProduction) => {        // Déclare une fonction array avec 2 attributs
    setTimeout(() => {
        console.log(`Le client veut ${stocks.fruits[fruitName]}`)   // "Affiche le client veut" et va chercher le fruit indiqué lors de l'appel
        callProduction();               // Appelle la fonction indiqué lors de l'appel
    }, 2000);                           // Avec 2 secondes de timeout
};

let production = () => {                // La production de la glace
    
    setTimeout(() => {
        console.log(`La production a commencé`);        

        setTimeout(() => {                              // Imbrication de timeouts (Callback Hell)
            console.log(`Le fruit a été coupé`);

            setTimeout(() => {
                console.log(`${stocks.liquid[0]} et ${stocks.liquid[1]} sont ajoutées`);    // "water" & "ice"

                setTimeout(() => {
                    console.log(`La machine est lancée`);

                    setTimeout(() => {
                        console.log(`Le client veut sa glace en ${stocks.holder[0]}`);      // "cone"

                        setTimeout(() => {
                            console.log(`Le topping ${stocks.toppings[1]} a été selectionné`);  // "peanuts"

                            setTimeout(() => {
                                console.log(`La glace est servie!`);
                            }, 2000);

                        }, 3000);

                    }, 2000);

                }, 1000);

            }, 1000);

        }, 2000);

    }, 0);
};

order(0, production);       // Appelle la fonction array avec les attributs fruitsName = 0 et par la suite appelle la fonction "production"


// Callback Hell et Promises

let stocks = {                                                
    fruits : ["strawberry", "grapes", "banana", "apple"],    
    liquid : ["water", "ice"],                                              // Objet avec array du stock du restaurant
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};

let isShopOpen = true;                                                      // Le restaurant est ouvert (true) ou fermé (false)    

let order = (time, work) =>{                                                // Fonction avec 2 paramètres, time (ms) et work (fonction à exécuter)
    return new Promise((resolve, reject)=>{                                 // Retourne une Promise 
        if(isShopOpen){                                                     // Si le restaurant est ouvert 
            setTimeout(() => {                                
                resolve(work());                                            // Retourne une Promise qui est résolue après le délai spécifié
            },time);       
        } else {                                                            // Si le restaurant est fermé                                     
            reject(console.log("Le restaurant est fermé"));                 // Affiche "Le restaurant est fermé"
        }
    });
};

order(2000, ()=>console.log(`${stocks.fruits[0]} a été sélectionné`))       // Appel utilisant Promises pour exécuter séquentiellement les différentes étapes de la préparation de la glace

.then(()=>{                                                                 // Chaque .then représente une étape avec son temps en ms
    return order(0, ()=>console.log("La production a commencé"));
})

.then(()=>{
    return order(2000, ()=>console.log("Le fruit a été découpé"));
})

.then(()=>{
    return order(1000, ()=>console.log(`${stocks.liquid[0]} et ${stocks.liquid[1]} ont été sélectionnées`));
})

.then(()=>{
    return order(1000, ()=>console.log("La machine est lancée"));
})

.then(()=>{
    return order(2000, ()=>console.log(`Le client veut sa glace en ${stocks.holder[0]}`));
})

.then(()=>{
    return order(3000, ()=>console.log(`Le client veut des ${stocks.toppings[1]} sur sa glace`));
})

.then(()=>{
    return order(2000, ()=>console.log("La glace est servie"));
})

.catch(()=>{                                                                // Utilisé pour gérer une erreur en cas de Reject
    console.log("Le client est parti");
})

.finally(()=>{                                                              // Sera exécuté à la fin qu'il y ai eu des erreurs ou non
    console.log("Le restaurant est fermé, la journée est terminée");
}) 


// Async / Await

let stocks = {                                                
    fruits : ["strawberry", "grapes", "banana", "apple"],    
    liquid : ["water", "ice"],                                              // Objet avec array du stock du restaurant
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};

let isShopOpen = true;                                                      // Le restaurant est ouvert (true) ou fermé (false) 

let toppingChoice = () =>{
    return new Promise((resolve, reject) =>{                                // Retourne une Promise qui est Resolve après un délai de 3s
        setTimeout(()=>{
            resolve(console.log("Quel topping voulez-vous ?"));             // Affiche le message "Quel topping voulez-vous ?"
        }, 3000);
    })
}

async function kitchen() {                                                  // Fonction asynchrone
    console.log("A");
    console.log("B");
    console.log("C");

    await toppingChoice();                                                  // Attend que la fonction "toppingChoice" soit résolue avant de passer à la prochaine étape
                                                                            // Pendant ce temps, le reste du programme ne reste pas bloqué et s'exécute à d'autres tâches extérieures à la fonction
    console.log("D");
    console.log("E");
}

kitchen();                                                                  // Appel de la fonction "kitchen" qui va afficher A, B, C puis un await de 3s avec "toppingChoice" avant d'afficher D et E

console.log("faire la vaisselle");
console.log("nettoyer les tables");                                         // Affichés sans attendre que la fonction "toppingChoice" soit résolue car non inclus dans la fonction asynchrone "kitchen"
console.log("prendre d'autres commandes"); 


// Au propre avec toutes les connaissances

let stocks = {                                                
    fruits : ["strawberry", "grapes", "banana", "apple"],    
    liquid : ["water", "ice"],                                              // Objet avec array du stock du restaurant
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};

let isShopOpen = true;                                                      // Le restaurant est ouvert (true) ou fermé (false)  

function time(ms){                                                          // Retourne une Promise 
    return new Promise((resolve, reject)=>{
        if(isShopOpen){                                                     // Si le restaurant est ouvert
            setTimeout(resolve, ms);                                        // Promise résolue après un délai spécifié en ms
        } else {                                                            // Sinon
            reject(console.log("Le restaurant est fermé"));                 // Promise rejetée + affiche "Le restaurant est fermé"
        }
    });
}

async function kitchen() {                                                  // Fonction asynchrone
    try{
        await time(2000);                                                   // await pour attendre l'achèvement de l'étape pour continuer dans les prochaines étapes
        console.log(`Le client veut ${stocks.fruits[0]}`);                  // avec un délai de 2000ms (2s)

        await time(0);
        console.log("La production commence");

        await time(2000);
        console.log("Le fruit a été découpé");

        await time(1000);
        console.log(`${stocks.liquid[0]} et ${stocks.liquid[1]} ont été ajoutés`);

        await time(1000);
        console.log("La machine est lancée");

        await time(2000);
        console.log(`La glace est placée sur ${stocks.holder[0]}`);

        await time(3000);
        console.log(`Le client veut ${stocks.toppings[0]} sur sa glace`);

        await time(2000);
        console.log("La glace est servie");

    } catch(error) {  
        console.log("Le client est parti", error);                          // Utilisé pour gérer une erreur en cas de Reject

    } finally {                 
        console.log("La journée est finie");                                // Sera exécuté à la fin qu'il y ai eu des erreurs ou non
    }
}

kitchen();                                                                  // Appel de la fonction "kitchen"