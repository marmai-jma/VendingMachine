///<reference path ="coins.ts"/>
/**
 * Fichier principal de l'application.
 */
class VendingMachine{
    total : number = 0;

    // liste des pieces acceptées
    acceptedCoins : Array <Quarter | Dime | Half | Dollar> = [
        new Dime(),
        new Quarter(),
        new Half(),
        new Dollar(),
    ]

    constructor(){
        this.refreshView();
        this.displayCoins();
        this.ListenToEvents();
    }

    acceptCoin(coin : Quarter | Dime | Half | Dollar) {
        this.total = this.total + coin.value;
    }

/**
 * Rafraichit la "vue" (HTML)
 */
     refreshView (){
    // Actualise le total
        document.getElementById('total').textContent = String(this.total);
     }

     displayCoins(){
         this.acceptedCoins.forEach(coin => {
             //Pour chaque coin...

             // créer balise <img> -- document.createElement('img)
             let img = document.createElement('img');

             //Set son attribut "src" --BALISE.setAttribute('src',VALEUR)
             
             img.src = coin.getImageUrl();

             //Ajoute un listener "click" sur l'image qui appelle acceptCoin()
            img.addEventListener('click',() => {
                this.acceptCoin(coin);
                this.refreshView();
            });

             //Insere l'image dans la page HTML
             document.getElementById('coins').appendChild(img)

         })
     }

 /**
  * Crée les listeners d'evenements 
  */
    ListenToEvents(){
        document.querySelector('button').addEventListener('click', ()=>{
            this.acceptCoin(new Dollar());
            this.refreshView();
        })
    }
}