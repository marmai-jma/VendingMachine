define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    exports.Cell = Cell;
});
//# sourceMappingURL=cell.js.map