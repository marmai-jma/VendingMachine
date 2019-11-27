define(["require", "exports", "./coins", "./cell", "./product-factory"], function (require, exports, coins_1, cell_1, product_factory_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Fichier principal de l'application.
     */
    var VendingMachineSize;
    (function (VendingMachineSize) {
        VendingMachineSize[VendingMachineSize["Small"] = 6] = "Small";
        VendingMachineSize[VendingMachineSize["Medium"] = 9] = "Medium";
        VendingMachineSize[VendingMachineSize["Large"] = 12] = "Large";
    })(VendingMachineSize = exports.VendingMachineSize || (exports.VendingMachineSize = {}));
    var VendingMachine = /** @class */ (function () {
        function VendingMachine(size) {
            this.total = 0;
            // liste des pieces acceptées
            this.acceptedCoins = [
                new coins_1.Dime(),
                new coins_1.Quarter(),
                new coins_1.Half(),
                new coins_1.Dollar(),
            ];
            this.cells = [];
            //Remplit le distributeur avec 12 "cells"
            for (var i = 0; i < size; i++) {
                // crée une nouvelle "cellule"
                var cell = new cell_1.Cell(product_factory_1.getProduct(), 3);
                // ajoute la nouvelle cellule au distributeur
                this.cells.push(cell);
            }
            this.refreshView();
            this.displayCoins();
            this.displayProducts();
        }
        VendingMachine.prototype.addCoin = function (coin) {
            this.total = this.total + coin.value; // ici on utilise le get value
            this.refreshView();
        };
        /**
         * Rafraichit la "vue" (HTML)
         */
        VendingMachine.prototype.refreshView = function () {
            // Actualise le total
            document.getElementById('total').textContent = String(this.total);
        };
        VendingMachine.prototype.displayCoins = function () {
            var _this = this;
            this.acceptedCoins.forEach(function (coin) {
                //Pour chaque coin...
                // créer balise <img> -- document.createElement('img)
                var img = document.createElement('img');
                //Set son attribut "src" --BALISE.setAttribute('src',VALEUR)
                img.src = coin.getImageUrl();
                //Ajoute un listener "click" sur l'image qui appelle acceptCoin()
                img.addEventListener('click', function () {
                    _this.addCoin(coin);
                });
                //Insere l'image dans la page HTML
                document.getElementById('coins').appendChild(img);
            });
        };
        VendingMachine.prototype.displayProducts = function () {
            var html = '';
            //Pour chaque cellule du distrib, on génère de l'HTML
            this.cells.forEach(function (cell) {
                html = html +
                    ("<div class=\"col-md-4 cell\">\n             <div class=\"col-md-6 image\">\n               <img src=\"" + cell.product.category.getImageUrl() + "\" alt=\"" + cell.product.name + "\">\n             </div>\n             <div class=\"col-md-6 productInfo\">\n               <div>" + cell.product.name + "</div>\n               <h4>" + cell.stock + "</h4>\n               <h3>" + cell.product.price + " \u20AC</h3>\n             </div>\n           </div>");
            });
            document.getElementById('products').innerHTML = html;
        };
        return VendingMachine;
    }());
    exports.VendingMachine = VendingMachine;
});
//# sourceMappingURL=vending-machine.js.map