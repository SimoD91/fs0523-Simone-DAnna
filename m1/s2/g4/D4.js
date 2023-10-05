/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1, l2){
    return 5 * 10;
}
area(5,10);

let risultato = area();

console.log(risultato)

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(a, b){
    return 8 + 4;
}
crazySum(8,4);

let risultato2 = crazySum();

console.log(risultato2)
/*
Riesco a fare la somma ma non riesco ad integrare if senza spaccare tutto, qui sotto metto il mio tentativo:

function crazySum(a, b){
}   for(a + b){
    if(crazySum = a = b);
        return crazySum * 3;
}

crazySum(8,4);

let risultato2 = crazySum();
*/

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(c, d){
    return 21 - 19;
}
crazyDiff(21,19);

let result3 = crazyDiff();

console.log(result3)

/*
Idem come sopra, riesco a fare la sottrazione (è molto semplice) ma per il resto ho provato di tutto

function crazyDiff(c, d){
    return c - d;
}for (let i = 0; i < crazyDiff.length; i++) {
    if (crazyDiff[i] > 19)
    return i*3;
}
crazyDiff(21, 19);

console.log(i)
/*

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 
 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n){
    if (boundary[n] = 400 > 20 < 100)
    return true;
}

boundary(); //Non credo sia giusta


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con 
 "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
let a = "EPICODE";

function epify(b){
    return b + a;
}
epify("Ciao ");

let concat = epify()

console.log(concat) //"Ciao" me lo da undefined



/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro 
 sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(EPICODE){

    let reverseString2 = EPICODE.split("");
    let reverseArray = reverseString2.reverse("");
    let joinArray = reverseArray.join("");
    return joinArray;
}
 
reverseString("EPICODE");
console.log(reverseString); //Disastro


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza 
 il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali 
 inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
