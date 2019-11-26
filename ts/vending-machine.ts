///<reference path ="coins.ts"/>
///<reference path ="cell.ts"/>
///<reference path ="product-factory.ts"/>
/**
 * Fichier principal de l'application.
 */

 enum VendingMachineSize {
     Small = 6,
     Medium = 9,
     Large = 12
 }
class VendingMachine{
    total : number = 0;

    // liste des pieces acceptées
    acceptedCoins : Array <Quarter | Dime | Half | Dollar> = [
        new Dime(),
        new Quarter(),
        new Half(),
        new Dollar(),
    ];

    cells : Cell[] =[];

    constructor(size: VendingMachineSize){
        //Remplit le distributeur avec 12 "cells"
        for (let i = 0 ; i<size; i++){
            // crée une nouvelle "cellule"
            const cell =  new Cell(getProduct(),3);
            // ajoute la nouvelle cellule au distributeur
            this.cells.push(cell);
        }

        this.refreshView();
        this.displayCoins();
        this.displayProducts();
    }

    addCoin(coin : Quarter | Dime | Half | Dollar) {
        this.total = this.total + coin.value;
        this.refreshView();
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
             const img = document.createElement('img');

             //Set son attribut "src" --BALISE.setAttribute('src',VALEUR)
             
             img.src = coin.getImageUrl();

             //Ajoute un listener "click" sur l'image qui appelle acceptCoin()
            img.addEventListener('click',() => {
                this.addCoin(coin);
        
            });

             //Insere l'image dans la page HTML
             document.getElementById('coins').appendChild(img)

         })
     }

     displayProducts(){
         let html = '';
         //Pour chaque cellule du distrib, on génère de l'HTML
         this.cells.forEach(cell => {
             html=html+
             `<div class="col-md-4 cell">
             <div class="col-md-6 image">
               <img src="${cell.product.category.getImageUrl()}" alt="${cell.product.name}">
             </div>
             <div class="col-md-6 productInfo">
               <div>${cell.product.name}</div>
               <h4>${cell.stock}</h4>
               <h3>${cell.product.price} €</h3>
             </div>
           </div>`
         })
         document.getElementById('products').innerHTML = html;
     }

 /**
  * Crée les listeners d'evenements 
  */
    
}