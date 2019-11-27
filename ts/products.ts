///<reference path ="categories.ts"/>
/**
 * Liste des produits vendus dans le distributeur.
 */

 interface Product{
   name : string;
   price : number;
   category : any;
 }
class CocaCola implements Product{
    name = 'Coca-Cola';
    price = 2.3;
    category = new SodaCategory();
  }
  
  class Fanta implements Product{
    name = 'Fanta';
    price = 2;
    category = new SodaCategory();
  }
  
  class Sprite implements Product {
    name = 'Sprite';
    price = 1.80;
    category = new SodaCategory();
  }
  
  class Peanuts implements Product {
    name = 'Peanuts';
    price = 1.50;
    category = new NutsCategory();
  }
  
  class Cashews implements Product {
    name = 'Cashews';
    price = 2.80;
    category = new NutsCategory();
  }
  
  class Plain implements Product{
    name = 'Plain';
    price = 2;
    category = new ChipsCategory();
  }
  
  class Cheddar implements Product {
    name = 'Cheddar';
    price = 2;
    category = new ChipsCategory();
  }
  
  class Mints implements Product{
    name = 'Mints';
    price = 1.30;
    category = new CandyCategory();
  }
  
  class Gummies implements Product {
    name = 'Gummies';
    price = 1.90;
    category = new CandyCategory();
  }
  
  class Hersey implements Product {
    name = 'Hersey\'s';
    price = 1.30;
    category = new CandyBarCategory();
  }
  
  class MilkyWay implements Product{
    name = 'Milky Way';
    price = 1.80;
    category = new CandyBarCategory();
  }