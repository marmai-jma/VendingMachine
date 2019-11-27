var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Liste des types de pièces de monnaie acceptées par le distributeur.
 */
var Coin = /** @class */ (function () {
    function Coin(value, imageUrl) {
        this._value = value;
        this._image = imageUrl;
    }
    Object.defineProperty(Coin.prototype, "value", {
        //déclare un getter qui renvoie la value
        get: function () { return this._value; } //getter classique
        ,
        enumerable: true,
        configurable: true
    });
    // declare une méthode getImageUrl() qui renvoie la propriete this.image
    Coin.prototype.getImageUrl = function () { return this._image; }; // methode
    return Coin;
}());
var Quarter = /** @class */ (function (_super) {
    __extends(Quarter, _super);
    function Quarter() {
        return _super.call(this, 0.25, 'img/Quarter.png') || this;
    }
    return Quarter;
}(Coin));
var Dime = /** @class */ (function (_super) {
    __extends(Dime, _super);
    function Dime() {
        return _super.call(this, 0.10, 'img/Dime.png') || this;
    }
    return Dime;
}(Coin));
var Half = /** @class */ (function (_super) {
    __extends(Half, _super);
    function Half() {
        return _super.call(this, 0.50, 'img/Half.png') || this;
    }
    return Half;
}(Coin));
var Dollar = /** @class */ (function (_super) {
    __extends(Dollar, _super);
    function Dollar() {
        return _super.call(this, 1, 'img/Dollar.jpg') || this;
    }
    return Dollar;
}(Coin));
/**
 * @file
 * Une case dans le distributeur.
*/
var Cell = /** @class */ (function () {
    function Cell(product, stock) {
        this.product = product;
        this.stock = stock;
        this.sold = false;
    }
    return Cell;
}());
/**
 * Liste des catégories de produits.
 */
var SodaCategory = /** @class */ (function () {
    function SodaCategory() {
        this.name = 'Soda';
    }
    SodaCategory.prototype.getImageUrl = function () {
        return 'img/SodaCan.png';
    };
    return SodaCategory;
}());
var NutsCategory = /** @class */ (function () {
    function NutsCategory() {
        this.name = 'Nuts';
    }
    NutsCategory.prototype.getImageUrl = function () {
        return 'img/Nuts.png';
    };
    return NutsCategory;
}());
var ChipsCategory = /** @class */ (function () {
    function ChipsCategory() {
        this.name = 'Potato chips';
    }
    ChipsCategory.prototype.getImageUrl = function () {
        return 'img/Chips.png';
    };
    return ChipsCategory;
}());
var CandyCategory = /** @class */ (function () {
    function CandyCategory() {
        this.name = 'Candy';
    }
    CandyCategory.prototype.getImageUrl = function () {
        return 'img/Candy.png';
    };
    return CandyCategory;
}());
var CandyBarCategory = /** @class */ (function () {
    function CandyBarCategory() {
        this.name = 'Candy bar';
    }
    CandyBarCategory.prototype.getImageUrl = function () {
        return 'img/CandyBar.png';
    };
    return CandyBarCategory;
}());
///<reference path ="categories.ts"/>
/**
 * Liste des produits vendus dans le distributeur.
 */
var CocaCola = /** @class */ (function () {
    function CocaCola() {
        this.name = 'Coca-Cola';
        this.price = 2.3;
        this.category = new SodaCategory();
    }
    return CocaCola;
}());
var Fanta = /** @class */ (function () {
    function Fanta() {
        this.name = 'Fanta';
        this.price = 2;
        this.category = new SodaCategory();
    }
    return Fanta;
}());
var Sprite = /** @class */ (function () {
    function Sprite() {
        this.name = 'Sprite';
        this.price = 1.80;
        this.category = new SodaCategory();
    }
    return Sprite;
}());
var Peanuts = /** @class */ (function () {
    function Peanuts() {
        this.name = 'Peanuts';
        this.price = 1.50;
        this.category = new NutsCategory();
    }
    return Peanuts;
}());
var Cashews = /** @class */ (function () {
    function Cashews() {
        this.name = 'Cashews';
        this.price = 2.80;
        this.category = new NutsCategory();
    }
    return Cashews;
}());
var Plain = /** @class */ (function () {
    function Plain() {
        this.name = 'Plain';
        this.price = 2;
        this.category = new ChipsCategory();
    }
    return Plain;
}());
var Cheddar = /** @class */ (function () {
    function Cheddar() {
        this.name = 'Cheddar';
        this.price = 2;
        this.category = new ChipsCategory();
    }
    return Cheddar;
}());
var Mints = /** @class */ (function () {
    function Mints() {
        this.name = 'Mints';
        this.price = 1.30;
        this.category = new CandyCategory();
    }
    return Mints;
}());
var Gummies = /** @class */ (function () {
    function Gummies() {
        this.name = 'Gummies';
        this.price = 1.90;
        this.category = new CandyCategory();
    }
    return Gummies;
}());
var Hersey = /** @class */ (function () {
    function Hersey() {
        this.name = 'Hersey\'s';
        this.price = 1.30;
        this.category = new CandyBarCategory();
    }
    return Hersey;
}());
var MilkyWay = /** @class */ (function () {
    function MilkyWay() {
        this.name = 'Milky Way';
        this.price = 1.80;
        this.category = new CandyBarCategory();
    }
    return MilkyWay;
}());
///<reference path ="products.ts"/>
/***
 * Fonction factory qui renvoie des instances de produits aléatoirement.
 */
function getProduct() {
    var random = Math.floor(Math.random() * 11);
    switch (random) {
        case 0: return new CocaCola();
        case 1: return new Fanta();
        case 2: return new Sprite();
        case 3: return new Peanuts();
        case 4: return new Cashews();
        case 5: return new Plain();
        case 6: return new Cheddar();
        case 7: return new Mints();
        case 8: return new Gummies();
        case 9: return new Hersey();
        case 10: return new MilkyWay();
    }
}
///<reference path ="coins.ts"/>
///<reference path ="cell.ts"/>
///<reference path ="product-factory.ts"/>
/**
 * Fichier principal de l'application.
 */
var VendingMachineSize;
(function (VendingMachineSize) {
    VendingMachineSize[VendingMachineSize["Small"] = 6] = "Small";
    VendingMachineSize[VendingMachineSize["Medium"] = 9] = "Medium";
    VendingMachineSize[VendingMachineSize["Large"] = 12] = "Large";
})(VendingMachineSize || (VendingMachineSize = {}));
var VendingMachine = /** @class */ (function () {
    function VendingMachine(size) {
        this.total = 0;
        // liste des pieces acceptées
        this.acceptedCoins = [
            new Dime(),
            new Quarter(),
            new Half(),
            new Dollar(),
        ];
        this.cells = [];
        //Remplit le distributeur avec 12 "cells"
        for (var i = 0; i < size; i++) {
            // crée une nouvelle "cellule"
            var cell = new Cell(getProduct(), 3);
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
///<reference path ="vending-machine.ts"/>
var v = new VendingMachine(VendingMachineSize.Large);
//# sourceMappingURL=app.js.map