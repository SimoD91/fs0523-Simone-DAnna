/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

let numero = 5;
console.log(numero); 
// Il datatype numerico viene indicato attraverso l'utilizzo di caratteri numerici.

let stringa = "Ciao";
console.log(stringa); 
// Il datatype stringa viene indicato attraverso l'utilizzo di parole all'interno di apici doppi ("") o singoli ('').

let booleano = true; 
console.log(booleano); 
// Il datatype booleano viene indicato con l'utilizzo esclusivamente di true o false, serve a far prendere decisioni al codice.

let array = [];
console.log(array); 
/* Il datatype array viene indicato all'interno di parentesi quadre e si tratta di un tipo particolare di variabile che ci permette di 
inserire molteplici dati in maniera ordinata (principalmente numeri).
*/

let oggetto = {};
console.log(oggetto);
/* Il datatype array viene indicato all'interno di parentesi graffe e si tratta di un tipo particolare di variabile che ci permette di
inserire molteplici dati in maniera ordinata ma, a differenza degli array, principalmente dati di testo.
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Simone";
console.log(name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let n1 = 12;
let n2 = 20;
console.log(n1 + n2);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/*
const NAME = "Simone";
NAME = "D'Anna";
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let n3 = 4;
console.log(n3 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";
console.log(name1 == name2);

function func() {
  let str = "john";
  let name1 = str.toLowerCase();
  let name2 = str.toLowerCase();
  console.log(name1 == name2);
}

func();