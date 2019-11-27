import { Product } from "./products";

/**
 * @file
 * Une case dans le distributeur.
*/

export class Cell {
    sold: boolean; //flag pour l'animation CSS

    constructor(public product: Product, public stock:number) {
        this.sold = false;
    }
}