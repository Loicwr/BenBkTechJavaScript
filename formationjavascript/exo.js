/* 
//exo 1 :

let compteEnBanque = 859;
let age = 19;
let objet = 859;

if ( compteEnBanque >= objet && age >= 18 )
    {
    console.log ( "Vous pouvez acheter l'objet")
}
else  {
    console.log ( " Vous ne pouvez pas acheter l'objet")
}


let coteCarre = 18;
// air = valeur * valeur 
let airCarre = coteCarre * coteCarre;
console.log ("Air du carré est de : " + airCarre);

let rayonCercle = 14
// périmètre = 2 * 3.14 * valeur 
let perimetre = 2 * 3.14 * rayonCercle
if ( perimetre > 100)
    {
        console.log ("Le cercle a une périphérie très longue")
    }
else {
        console.log (" Le périmètre du cercle est de : " + perimetre)
}

let noteFrancais = 11;
let noteMath = 12;
let noteSvt =  16;

let moyennes = ( noteFrancais + noteMath + noteSvt ) / 3;
if ( moyennes >= 0 && moyennes < 5 ){
    console.log ( "Insuffisant" )
}
else if ( moyennes >= 5 && moyennes < 10 ){
    console.log ("Bof bof")
}
else if (moyennes >= 10 && moyennes < 15 ){
    console.log ("Bien !")
}
else if ( moyennes >= 15 && moyennes <= 20 ){
    console.log ("Très bien !")
}
else {
    console.log ( "Erreur ! ")
}
*/

//exo 2 :

    //air d'un rectangle 

function airRectangle ( longeur , largeur ){
    return longeur * largeur 
};
let resultat = airRectangle ( 5 , 6 );
console.log ("L'air de mon rectangle est de :" + resultat );

    //périmètre d'un cercle en fonction de son diamètre

function perimetreCercleDiametre ( diametre){
    return 3.14 * diametre
};

let resultat2 = perimetreCercleDiametre (4);
console.log( "Le périmètre du cercle en fonction de son diamètre est :" + resultat2)

    //périmètre d'un cercle en fonction de son rayon

function perimetreCercleRayon ( rayon ){
    return 3.14 * 2 * rayon
}

console.log ("Le périmètre du cercle en fonction de son rayon est :" + perimetreCercleRayon(2))


    //


function chaineDeCaractere (str){
    return str.length
}

let texte = ("j'aime la saucisse")
console.log (chaineDeCaractere (texte));

if (chaineDeCaractere(texte) < 10 ){
    console.log ("Vrai")
}
else {
    console.log ("Faux")
};

    //créer une fonction qui renvoie le type d''une variable passée en paramètre

    function obtenirType(variable) {
        return typeof variable;
    }
    
    // Exemple d'utilisation :
    let text = "j'aime la saucisse";
    let nombre = 42;
    let tableau = [1, 2, 3];
    let objet = {nom: "John", age: 30};
    
    console.log(obtenirType(text));    // "string"
    console.log(obtenirType(nombre));   // "number"
    console.log(obtenirType(tableau));  // "object" (en JavaScript, les tableaux sont des objets)
    console.log(obtenirType(objet));    // "object"

    //à partir du rayon d'un cercle trouve sa surface

    function aireCercle(rayon2) {
        return Math.PI * rayon2 * rayon2; // Math.PI donne la valeur de pi
    }
    
    let rayon2 = 5;
    console.log("L'aire du cercle est : " + aireCercle(rayon2)); // Affichera l'aire du cercle
    

    //à partir de la largeur, longeur, profondeur d'un pavé, obtenir son volume

    function volume (longeur, largeur ,hauteur){
        return longeur * largeur * hauteur
    }

    console.log ("Le volume de mon pavé est de :" + volume (4, 3, 2))

    //à partir de la largeur, longeur , profondeur et d'un nombre de pavé obtien leur volume total

    function volume2 (longeur, largeur ,hauteur, nombres){
        return longeur * largeur * hauteur * nombres
    }

    console.log ("Le volume de mes pavés est de :" + volume2 (4, 3, 2, 2))