/**
 * Liste des types de pièces de monnaie acceptées par le distributeur.
 */
abstract class Coin {
    //déclare une proprieté privée "value"
    private _value: number;
    private _image: string;

    //déclare un getter qui renvoie la value
    get value() {return this._value;}  //getter classique
    // declare une méthode getImageUrl() qui renvoie la propriete this.image
    getImageUrl() {return this._image;} // methode
    constructor (value:number, imageUrl:string){
        this._value=value;
        this._image=imageUrl;
    }
    

}
class Quarter extends Coin{
    constructor(){super(0.25,'img/Quarter.png' );}
    }
    
}

class Dime extends Coin{
    constructor(){super(0.10,'img/Dime.png' );}
    }

}

class Half extends Coin {
    constructor(){super(0.50,'img/Half.png' );}

}

class Dollar extends Coin {
    constructor(){super(1,'img/Dollar.jpg' );}

}