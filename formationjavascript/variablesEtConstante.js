
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


/*

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
    // switch (commutateur) : permet de vérifier plusieurs conditions en même temps et d'exécuter une action en conséquence.

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

        let monAge3 = 44;
        switch(monAge3) {
            case 17 :
                console.log ("vous avez 17 ans !")
                break; // on sort de la condition
            case 45 :
                console.log ("vous avez 45 ans !")
                break; // on sort de la condition
            default : // si aucune des conditions n'est vraie, on exécute cette action
                console.log ("vous n'avez ni 17 ni 45 ans !")
                break; // on sort de la condition
        }

*/
/*
// Exercice :  if else / condition

    
       // Petit exercice, faire une condition qui établie si un nombre est pair ou impaire ( astuce utiliser le modulo % )

        let nombre = 5; // nombre à tester
            if (nombre % 2 == 0) {  // on teste si le reste de la division par 2 est égal à 0
                console.log("Le nombre est pair !") // si le reste de la division par 2 est égal à 0, c'est un nombre pair
            }
            else {
                console.log("Le nombre est impair !")// si le reste de la division par 2 est différent de 0, c'est un nombre impair
            };
*/

/*

// La différence entre undening et null est que undefined signifie qu'une variable n'a pas été initialisée, tandis que null signifie qu'une variable a été initialisée mais n'a pas de valeur.
// null est un objet, undefined est un type de données primitif.
// null est une valeur assignée, undefined est une valeur par défaut..

    let maVariable; // undefined (non initialisée)
        console.log(maVariable); // undefined

    let maVariable2 = null; // null (initialisée mais sans valeur)
        console.log(maVariable2); // null

    console.log (undefined == null); // true (null est égal à undefined)
    console.log (undefined === null); // false (null est strictement différent de undefined)

*/

/*

// La boucle while est une structure de contrôle qui permet d'exécuter un bloc de code tant qu'une condition est vraie.

    let nombre = 1; // initialisation de la variable nombre
    while (nombre <= 100 ) { // tant que nombre est inférieur ou égal à 100
        
        if (nombre === 10 ){
            break; // on sort de la boucle si nombre est égal à 10
        }
        console.log(nombre); // on affiche le nombre
        nombre++; // on incrémente le nombre de 1
        // ou nombre += 1; // on incrémente le nombre de 1
        // ou nombre = nombre + 1; // on incrémente le nombre de 1
    }
    console.log("Fin de la boucle while"); // on affiche un message à la fin de la boucle

*/

/*
// La boucle for est une structure de contrôle qui permet d'exécuter un bloc de code un certain nombre de fois.
// Elle est souvent utilisée pour parcourir des tableaux ou des objets.
// La syntaxe de la boucle for est la suivante : for (initialisation; condition; incrémentation) { bloc de code à exécuter }
// L'initialisation est exécutée une seule fois au début de la boucle.
// La condition est vérifiée avant chaque itération de la boucle. Si elle est vraie, le bloc de code est exécuté. Si elle est fausse, la boucle s'arrête.
// L'incrémentation est exécutée à la fin de chaque itération de la boucle.
// Elle permet de modifier la variable d'initialisation pour passer à l'itération suivante.
// La boucle for est souvent utilisée pour parcourir des tableaux ou des objets.
// Elle est plus concise et plus lisible que la boucle while dans ce cas.

    for (let nombre = 1 ; nombre < 10 ; nombre++) { // initialisation de la variable nombre
        console.log(nombre); // on affiche le nombre
    }

*/

// Les fonctions sont des blocs de code qui peuvent être appelés plusieurs fois dans un programme.
// Elles permettent de regrouper des instructions et de les réutiliser facilement.
// Elles peuvent prendre des paramètres en entrée et renvoyer une valeur en sortie.
// Elles sont définies avec le mot-clé function, suivi du nom de la fonction, des paramètres entre parenthèses et du bloc de code entre accolades.
// Elles peuvent être appelées en utilisant leur nom suivi de parenthèses contenant les arguments.
// Elles peuvent également être anonymes (sans nom) et assignées à une variable ou passées en argument à une autre fonction.
// Elles peuvent être imbriquées (une fonction à l'intérieur d'une autre) et peuvent également être récursives (une fonction qui s'appelle elle-même).
// Elles peuvent être utilisées pour créer des closures (une fonction qui a accès à des variables de son environnement lexical) et des callbacks (une fonction passée en argument à une autre fonction qui sera exécuter à la fin ) 
// Quand je déclare une variable au sein d'une fonction, elle est locale à cette fonction et ne peut pas être utilisée en dehors de celle-ci. ( sauf si je la déclare avec le mot-clé var, dans ce cas elle est globale )
// Quand je déclare une variable en dehors d'une fonction, elle est globale et peut être utilisée dans toutes les fonctions du programme. 

    function airCarre (coteCarre) { // déclaration de la fonction airCarre avec un paramètre coteCarre
        let air = coteCarre * coteCarre; // on calcule l'air du carré
        return air; // on renvoie l'air du carré
    }

    let tarteAuCitron = 4; // variable pour le côté du carré
    let airDeMonCarre = airCarre(tarteAuCitron); // on appelle la fonction airCarre avec le côté du carré, les parenthèses serve a donner la valeur de la variable coteCarre,
                                                 // let tarteAuCitron = 4 mais si je veux je met 10 et 10 sera la valeur de coteCarre car elle appelle la fonction airCarre avec le paramètre coteCarre.
    console.log("L'air du carré est de : " + airDeMonCarre); // on affiche l'air du carré