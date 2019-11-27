define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    exports.SodaCategory = SodaCategory;
    var NutsCategory = /** @class */ (function () {
        function NutsCategory() {
            this.name = 'Nuts';
        }
        NutsCategory.prototype.getImageUrl = function () {
            return 'img/Nuts.png';
        };
        return NutsCategory;
    }());
    exports.NutsCategory = NutsCategory;
    var ChipsCategory = /** @class */ (function () {
        function ChipsCategory() {
            this.name = 'Potato chips';
        }
        ChipsCategory.prototype.getImageUrl = function () {
            return 'img/Chips.png';
        };
        return ChipsCategory;
    }());
    exports.ChipsCategory = ChipsCategory;
    var CandyCategory = /** @class */ (function () {
        function CandyCategory() {
            this.name = 'Candy';
        }
        CandyCategory.prototype.getImageUrl = function () {
            return 'img/Candy.png';
        };
        return CandyCategory;
    }());
    exports.CandyCategory = CandyCategory;
    var CandyBarCategory = /** @class */ (function () {
        function CandyBarCategory() {
            this.name = 'Candy bar';
        }
        CandyBarCategory.prototype.getImageUrl = function () {
            return 'img/CandyBar.png';
        };
        return CandyBarCategory;
    }());
    exports.CandyBarCategory = CandyBarCategory;
});
//# sourceMappingURL=categories.js.map