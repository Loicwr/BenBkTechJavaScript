
/*

    Test de variable avec : let

        let monNombre = 2;
        monNombre = 888;
        console.log(monNombre);
        let maPhrase = "Bonjour !";
        let maPhrase2 = 'Bonjour2 !';
        let maPhrase3 = `Bonjour3 !`;
        console.log(maPhrase);
        console.log(maPhrase2);
        console.log(maPhrase3);

*/ 


/*

    Test de variable avec : const ( avec const, la valeur est constante, elle ne peut pas être changée )

        const monNombre = 2;
        console.log(monNombre);
        monNombre = 5;
        console.log(monNombre);


*/ 

/* Test avec typeof 

    // Types de variable  ( dynamique )

        let monNombre = 2; // number (nombre)
        let monNombre2 = -2;
        let monNombre3 = 0.3;
        let maPhrase = "Ma phrase"; // string ( chaîne de caractères )
        let monBoolen = true; //boolean ( true ou false )

        //typeof : typeof renvoie le type d'une certaine variable

        console.log (typeof monNombre);
        console.log (typeof monNombre2);
        console.log (typeof monNombre3);
        console.log (typeof maPhrase);
        console.log (typeof monBoolen);

*/

/*
    // Les opérateurs arithmétiques sont des symboles qui permettent de réaliser des opérations mathématiques sur des nombres.

    // + = addition
    // - = soustraction
    // * = multiplication
    // / = division
    // % = modulo (reste d'une division)

    // Façon classique :

        let resultat = 5 - 3;
        resultat = resultat * 3;
        console.log(resultat);

        // Façon simplifiée : (+= , -=, *=, /=, %=)
        let resultat2 = 5 - 3;
        resultat2 *= 3; // resultat = resultat * 3
        resultat2 += 2; // resultat = resultat + 2
        console.log(resultat2);

    // Exercice 

        let exercice = 5 * 5; // peut être aussi écrit : let exercice = ( 5 * 5 ) + 2 
        exercice += 2;
        console.log (exercice);

        let exercice2 = 60 / 4; // peut être aussi écrit : let exercice2 = ( 60 / 4 ) - 6
        exercice2 -= 6;
        console.log (exercice2);

        let exercice3 = 5555 * 7777;
        console.log (exercice3);

        let exercice4 = 938594 - 94859304;// peut être aussi écrit : let exercice4 = ( 938594 - 94859304 ) * 948
        exercice4 *= 948;
        console.log (exercice4);

        let exercice5 = 4 * 4 * 6; // peut être aussi écrit : let exercice5 = ( 4 * 4 * 6 ) / 5
        exercice5 /= 5;            // exercices5 *= 99
        exercice5 *= 99;
        console.log (exercice5);

*/

/*

    // La concaténation est l'opération qui consiste à assembler des chaînes de caractères entre elles.
    // On peut concaténer des chaînes de caractères avec le signe + (plus) ou avec le signe += (plus égal).
    // On peut aussi concaténer des chaînes de caractères avec le signe ` (backtick) et ${} (interpolation).

        let monNombre = 33;
        let maPhrase = "Mon âge est de " + monNombre + " ans.";
        maPhrase = 'Mon âge est de ' + monNombre + ' ans.';
        maPhrase = `Mon âge est de ${monNombre} ans.`;
        console.log(maPhrase);

*/


    //Les conditions : les opérateurs de comparaison sont des symboles qui permettent de comparer deux valeurs entre elles.

    // == : égal à
    // != : différent de
    // === : strictement égal à (type et valeur)
    // !== : strictement différent de (type et valeur)
    // > : supérieur à
    // < : inférieur à
    // >= : supérieur ou égal à
    // <= : inférieur ou égal à
    // && (et) : permet de vérifier si deux conditions sont vraies en même temps ( valeur1 &&  valeur2 ) 
    // || (ou) : permet de vérifier si au moins une des deux conditions est vraie ( valeur1 ||  valeur2 ) 
    // ! (non) : permet de vérifier si une condition est fausse ( !valeur1 )
    // ? (opérateur ternaire) : permet de vérifier si une condition est vraie ou fausse et d'exécuter une action en conséquence ( condition ? actionSiVrai : actionSiFaux )

        let monNombre1 = 3;
        let monNombre2 = 5;
        let monNombre3 = 8;
        let monNombre4 = 3; // number (nombre)
        let monNombre5 = "3"; // string ( chaîne de caractères )

        console.log(monNombre1 == monNombre2); // false
        console.log(monNombre1 < monNombre2); // true
        console.log(monNombre1 >= monNombre2); // false
        console.log(monNombre1 <= monNombre2); // true
        console.log(monNombre1 != monNombre2); // true
        console.log(monNombre1 === monNombre2); // false
        console.log(monNombre1 !== monNombre2); // true
        console.log(monNombre4 === monNombre5); // false

        console.log (true && true); // true
        console.log (true && false); // false
        console.log (false && false); // false

        console.log (true || true); // true
        console.log (true || false); // true
        console.log (false || false); // false

        console.log (!true); // false
        console.log (!false); // true
        console.log (!monNombre1); // false


    // if (si) : permet de vérifier si une condition est vraie et d'exécuter une action en conséquence.
    // else (sinon) : permet d'exécuter une action si la condition est fausse.
    // else if (sinon si) : permet de vérifier une autre condition si la première est fausse.

        if(9 < 5) {
            console.log("oui c'est vrai !") //si la condition est vraie, on exécute cette action
        }
        else {
            console.log("non c'est faux !")//si la condition est fausse, on exécute cette action
        };
        
    
        let monAge = 21;
        if(monAge >= 18)
        {
            console.log("Vous êtes majeur !")   
        }    
        else {   
            console.log("Vous êtes mineur !")
        }

        let monAge2 = 78;
        if(monAge2 < 18)
        {
            console.log("Vous êtes mineur !")   
        }    
        else if (monAge2 >= 18 && monAge2 < 50)  
        {   
            console.log("Vous êtes dans la force de l'âge !")   
        }
        else if (monAge2 >= 50) 
        {   
            console.log("Vous êtes senior !")   
        }