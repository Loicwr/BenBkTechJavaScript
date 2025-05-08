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