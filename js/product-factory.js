define(["require", "exports", "./products"], function (require, exports, products_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /***
     * Fonction factory qui renvoie des instances de produits aléatoirement.
     */
    function getProduct() {
        var random = Math.floor(Math.random() * 11);
        switch (random) {
            case 0: return new products_1.CocaCola();
            case 1: return new products_1.Fanta();
            case 2: return new products_1.Sprite();
            case 3: return new products_1.Peanuts();
            case 4: return new products_1.Cashews();
            case 5: return new products_1.Plain();
            case 6: return new products_1.Cheddar();
            case 7: return new products_1.Mints();
            case 8: return new products_1.Gummies();
            case 9: return new products_1.Hersey();
            case 10: return new products_1.MilkyWay();
        }
    }
    exports.getProduct = getProduct;
});
//# sourceMappingURL=product-factory.js.map