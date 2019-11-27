define(["require", "exports", "./categories"], function (require, exports, categories_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CocaCola = /** @class */ (function () {
        function CocaCola() {
            this.name = 'Coca-Cola';
            this.price = 2.3;
            this.category = new categories_1.SodaCategory();
        }
        return CocaCola;
    }());
    exports.CocaCola = CocaCola;
    var Fanta = /** @class */ (function () {
        function Fanta() {
            this.name = 'Fanta';
            this.price = 2;
            this.category = new categories_1.SodaCategory();
        }
        return Fanta;
    }());
    exports.Fanta = Fanta;
    var Sprite = /** @class */ (function () {
        function Sprite() {
            this.name = 'Sprite';
            this.price = 1.80;
            this.category = new categories_1.SodaCategory();
        }
        return Sprite;
    }());
    exports.Sprite = Sprite;
    var Peanuts = /** @class */ (function () {
        function Peanuts() {
            this.name = 'Peanuts';
            this.price = 1.50;
            this.category = new categories_1.NutsCategory();
        }
        return Peanuts;
    }());
    exports.Peanuts = Peanuts;
    var Cashews = /** @class */ (function () {
        function Cashews() {
            this.name = 'Cashews';
            this.price = 2.80;
            this.category = new categories_1.NutsCategory();
        }
        return Cashews;
    }());
    exports.Cashews = Cashews;
    var Plain = /** @class */ (function () {
        function Plain() {
            this.name = 'Plain';
            this.price = 2;
            this.category = new categories_1.ChipsCategory();
        }
        return Plain;
    }());
    exports.Plain = Plain;
    var Cheddar = /** @class */ (function () {
        function Cheddar() {
            this.name = 'Cheddar';
            this.price = 2;
            this.category = new categories_1.ChipsCategory();
        }
        return Cheddar;
    }());
    exports.Cheddar = Cheddar;
    var Mints = /** @class */ (function () {
        function Mints() {
            this.name = 'Mints';
            this.price = 1.30;
            this.category = new categories_1.CandyCategory();
        }
        return Mints;
    }());
    exports.Mints = Mints;
    var Gummies = /** @class */ (function () {
        function Gummies() {
            this.name = 'Gummies';
            this.price = 1.90;
            this.category = new categories_1.CandyCategory();
        }
        return Gummies;
    }());
    exports.Gummies = Gummies;
    var Hersey = /** @class */ (function () {
        function Hersey() {
            this.name = 'Hersey\'s';
            this.price = 1.30;
            this.category = new categories_1.CandyBarCategory();
        }
        return Hersey;
    }());
    exports.Hersey = Hersey;
    var MilkyWay = /** @class */ (function () {
        function MilkyWay() {
            this.name = 'Milky Way';
            this.price = 1.80;
            this.category = new categories_1.CandyBarCategory();
        }
        return MilkyWay;
    }());
    exports.MilkyWay = MilkyWay;
});
//# sourceMappingURL=products.js.map