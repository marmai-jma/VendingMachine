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
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    exports.Coin = Coin;
    var Quarter = /** @class */ (function (_super) {
        __extends(Quarter, _super);
        function Quarter() {
            return _super.call(this, 0.25, 'img/Quarter.png') || this;
        }
        return Quarter;
    }(Coin));
    exports.Quarter = Quarter;
    var Dime = /** @class */ (function (_super) {
        __extends(Dime, _super);
        function Dime() {
            return _super.call(this, 0.10, 'img/Dime.png') || this;
        }
        return Dime;
    }(Coin));
    exports.Dime = Dime;
    var Half = /** @class */ (function (_super) {
        __extends(Half, _super);
        function Half() {
            return _super.call(this, 0.50, 'img/Half.png') || this;
        }
        return Half;
    }(Coin));
    exports.Half = Half;
    var Dollar = /** @class */ (function (_super) {
        __extends(Dollar, _super);
        function Dollar() {
            return _super.call(this, 1, 'img/Dollar.jpg') || this;
        }
        return Dollar;
    }(Coin));
    exports.Dollar = Dollar;
});
//# sourceMappingURL=coins.js.map