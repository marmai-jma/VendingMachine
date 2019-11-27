import { SodaCategory, NutsCategory, ChipsCategory, CandyCategory, CandyBarCategory } from "./categories";

/**
 * Liste des produits vendus dans le distributeur.
 */

 export interface Product{
   name : string;
   price : number;
   category : any;
 }
 export class CocaCola implements Product{
    name = 'Coca-Cola';
    price = 2.3;
    category = new SodaCategory();
  }
  
  export class Fanta implements Product{
    name = 'Fanta';
    price = 2;
    category = new SodaCategory();
  }
  
  export class Sprite implements Product {
    name = 'Sprite';
    price = 1.80;
    category = new SodaCategory();
  }
  
  export class Peanuts implements Product {
    name = 'Peanuts';
    price = 1.50;
    category = new NutsCategory();
  }
  
  export class Cashews implements Product {
    name = 'Cashews';
    price = 2.80;
    category = new NutsCategory();
  }
  
  export class Plain implements Product{
    name = 'Plain';
    price = 2;
    category = new ChipsCategory();
  }
  
  export class Cheddar implements Product {
    name = 'Cheddar';
    price = 2;
    category = new ChipsCategory();
  }
  
  export class Mints implements Product{
    name = 'Mints';
    price = 1.30;
    category = new CandyCategory();
  }
  
  export class Gummies implements Product {
    name = 'Gummies';
    price = 1.90;
    category = new CandyCategory();
  }
  
  export class Hersey implements Product {
    name = 'Hersey\'s';
    price = 1.30;
    category = new CandyBarCategory();
  }
  
  export class MilkyWay implements Product{
    name = 'Milky Way';
    price = 1.80;
    category = new CandyBarCategory();
  }