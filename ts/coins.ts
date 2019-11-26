/**
 * Liste des types de pièces de monnaie acceptées par le distributeur.
 */

class Quarter {
    value : number = 0.25;
    getImageUrl() :string {
        return 'img/Quarter.png';
    }
    
}

class Dime {
    value : number = 0.10;
    getImageUrl(){
        return 'img/Dime.png';
    }

}

class Half {
    value : number = 0.50;
    getImageUrl(){
        return 'img/Half.png';
    }

}

class Dollar {
    value : number = 1; 
    getImageUrl(){
        return 'img/Dollar.jpg';
    }

}