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


let valeurCarre = 18;
valeurCarre *= valeurCarre;
console.log (valeurCarre);

let rayonCercle = 1
let perimetre = 2 * 3.14 * rayonCercle
if ( perimetre > 100)
    {
        console.log ("Le cercle a une périphérie très longue")
    }
else {
        console.log (perimetre)
}

let noteFrancais = 10;
let noteMath = 11;
let noteSvt =  16;

let moyennes = ( noteFrancais + noteMath + noteSvt ) / 3;
if ( moyennes >= 0 && moyennes <= 4.99){
    console.log ( "Insuffisant" )
}
else if ( moyennes >= 5 && moyennes <= 9.99 ){
    console.log ("Bof bof")
}
else if (moyennes >= 10 && moyennes <= 14.99 ){
    console.log ("Bien !")
}
else if ( moyennes >= 15 && moyennes <= 20 ){
    console.log ("Très bien !")
}