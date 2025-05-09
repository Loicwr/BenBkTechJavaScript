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

function perimetreCercleDiametre ( diametre, nombrePi){
    return circonference = nombrePi * diametre
};

let resultat2 = perimetreCercleDiametre (5, 3.14);
console.log( "Le périmètre du cercle en fonction de son diamètre est :" + resultat2)

    //périmètre d'un cercle en fonction de son rayon

function perimetreCercleRayon ( deux, pi, rayon ){
    return deux * pi * rayon
}

let deux = 2;
let pi = 3.14;
let rayon = 5;
console.log ("Le périmètre du cercle en fonction de son rayon est :" + perimetreCercleRayon(2, 3.14, 5))

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