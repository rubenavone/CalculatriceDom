
/**
 * Démarrage simple, je clique sur un chiffre, 2 par exemple (je stocke dans firstValue)
 * Ensuite je clique sur un opérateur + par exemple, je clique de nouveau sur 2.
 * (l'operateur est stocker dans une variable, le 2 est stocker dans seconValue)
 * la soit je clique sur égal, le résultat s'affiche.
 * Soit je clique sur un opérateur le le résultat devient la firstValue et l'opérateur change.
 * (une fonction qui retourne résultat, garde résultat pour la suite)
 * Mise en place et recherche autour du projet
 * Utilisé eval pour calculer du texte 
 *      Fausse bonne idée, il est déconseiller d'éxécuter du texte avec javascript c'est une source de faille.
 * Du coup conceptualisation d'une calculatrice
 * L'utilisateur clique sur des chiffre, et ensuite un opérateur
 * lorsqu'il entre de nouveaux chiffre et ensuite un opérateur alors le calcul ce fait.
 * Il peut continuer sont calcul si il le souhaite.
 * Avec ce proceder il y a déjà une calculatrice simple mais efficace.
 * 
 * Des pistes de code déjà produit 
 *  https://freshman.tech/calculator/#bonus-content (js)
 *  https://zestedesavoir.com/tutoriels/646/apprenez-a-programmer-en-java/558_java-et-la-programmation-evenementielle/2709_tp-une-calculatrice/ (java)
**/

//Ici je fait mes selection d'éléments
let inputSelector = document.querySelector("input[type=text]");
let allButtonSelector = document.querySelectorAll("input[type=button]");
let firstNumber, secondNumber, result, swap;

//Pour chaque éléments dans mon tableau allButton alors j'execute une fonction
allButtonSelector.forEach(button => {
    addEvent(button);
});

/**
 * Prend un tableau en entrée et crée un évènement pour chaque bouton 
 * Ensuite selon le bouton une action ce déclenche
 * @param {Array} event 
 */
function addEvent(event){
    switch (event.value){
        case "=":
            /**
             * Quand j'appuie sur égal, le calcul est fait
             * Mais je doit pouvoir continuer mon calcul. 
             */ 
            event.addEventListener("click",function(){               
                
            });
            break;
            case "+": case "-": case "*": case"/":
                /**
                 * Quand j'appuie sur un opérateur 
                 * je le stocke dans une variable mais je doit également 
                 * stocker le chiffre/nombre actuel
                 */
                event.addEventListener("click",function(){               

                });
            break;
            case "A/C":
                /**
                 * Quand j'appuie sur A/C je reinitialise 
                 * la calculatrice
                 */
                event.addEventListener("click",function(){  

                });
                break;
                
        default: //Tout les chiffres
        /**
         * Quand j'appuie sur un chiffre ?
         */
            event.addEventListener("click",function(){  

            });           
    } 
}

function checkValue(firstValue, secondValue){
    /**
     * Verifie les valeurs et lance le calcul si tout est ok
     */
    }

function calcResult(firstNumber, secondNumber,operatorCalcul){
    /**
     * Ici je gère le calcul si c'est + - * /
     */

}

function updateDisplay(actualValue){
/**
 * Met à jour l'affichage 
 * si ActualValue vaut zero alors on vide l'input
 * sinon on met l'ancienne valeur plus la nouvelle dans inputSelector.value
 */
}






