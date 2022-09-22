

//Ici je fait mes selection d'éléments
let inputSelector = document.querySelector("input[type=text]");
let allButtonSelector = document.querySelectorAll("input[type=button]");
let result = "";
let firstValue = "";
let secondValue = "";
let operator = "";
let flag = false;
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
            event.addEventListener("click",function(){               
                //calcResult(result);
                if (firstValue === "") {
                    firstValue = inputSelector.value;
                }else if(secondValue === ""){
                    secondValue = inputSelector.value;
                }                
                updateDisplay(0);
               calcResult(Number(firstValue),Number(secondValue),operator);
            });
            break;
            case "+": case "-": case "*": case"/":
                event.addEventListener("click",function(){               
                    //calcResult(result);
                    console.log("dans event + - * / ")
                    if(result === ""){
                        if (firstValue === "") {
                            firstValue = inputSelector.value;
                            operator = event.value;
                            console.log(firstValue);
                            updateDisplay(0);    
                        }else if(secondValue === ""){
                            secondValue = inputSelector.value;
                            console.log(secondValue);
                            updateDisplay(0);
                        }
                        checkValue(firstValue, secondValue);
                    }else{
                        firstValue = result;
                        if(secondValue === ""){
                            secondValue = inputSelector.value;
                            console.log(secondValue);
                            updateDisplay(0);
                        }
                        checkValue(firstValue, secondValue);
                    }
                });
            break;
            case "A/C":
                event.addEventListener("click",function(){  
                    //on change l'affichage en lui mettant la valeur precedente plus celle cliquez    
                    inputSelector.value = "";
                    firstValue = "";
                    secondValue = "";
                    operator = "";
                    result = "";
                });
                break;
                
        default:
            event.addEventListener("click",function(){  
                //on change l'affichage en lui mettant la valeur precedente plus celle cliquez    
                updateDisplay(event.value);
            });           
    } 
}
/**
 * 
 * @param {*} firstNumber 
 * @param {*} secondNumber 
 * @param {*} operatorCalcul 
 */
function calcResult(firstNumber = 10, secondNumber = 20, operatorCalcul = "/"){
    console.log("est entré dans calcResult")
    if(operatorCalcul === "+"){
        console.log("dans l'addition");
        result = firstNumber + secondNumber;
        console.log(result);
    }else if(operatorCalcul === "-"){
        console.log("dans soustraction");

        result = firstNumber - secondNumber;
    }else if(operatorCalcul === "*"){
        console.log("dans multiplication");

        result = firstNumber * secondNumber;
    }else if(operatorCalcul === "/"){
        console.log("dans division");
        result = firstNumber / secondNumber
        
        console.log(firstNumber / secondNumber)
    }
    inputSelector.value = result
    firstValue = result
    secondValue = "";
    operator = "";
}
/**
 * Met à jour l'affichage 
 * si ActualValue vaut zero alors on vide l'input
 * sinon on met l'ancienne valeur plus la nouvelle dans inputSelector.value
 */
function updateDisplay(actualValue){
    if(actualValue === 0){
        console.log("l'affichage est vidé")
        inputSelector.value = ""; //l'affichage de input est vidé.
    }else{
        inputSelector.value = inputSelector.value + actualValue
    }
}

/**
 * Verifie les valeurs et lance le calcul si tout est ok
 * @param {String} firstValue 
 * @param {String} secondValue 
 */
function checkValue(firstValue, secondValue){
    if (firstValue != "" && secondValue != ""){
        console.log(`dans la troisieme condition qui lance le calcul ${operator}`)
        updateDisplay(0);
        calcResult(Number(firstValue), Number(secondValue), operator);
    }
}



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