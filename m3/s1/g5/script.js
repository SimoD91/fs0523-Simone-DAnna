"use strict";
class Smartphone {
    constructor() {
        this.carica = 0;
        this.costoMinuto = 0.20;
        this.numeroChiamate = 0;
    }
    ricarica(credito) {
        this.carica += credito;
    }
    numero404() {
        return `Credito disponibile: ${this.carica}€`;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    chiamata(min) {
        this.carica -= min * this.costoMinuto;
        this.numeroChiamate++;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
let smartphone1 = new Smartphone();
smartphone1.ricarica(30);
console.log(smartphone1.numero404());
//Effettuo 3 chiamate per prova//
smartphone1.chiamata(10);
console.log(`Chiamate eseguite: ${smartphone1.getNumeroChiamate()}`);
smartphone1.chiamata(8);
console.log(`Chiamate eseguite: ${smartphone1.getNumeroChiamate()}`);
smartphone1.chiamata(45);
console.log(`Chiamate eseguite: ${smartphone1.getNumeroChiamate()}`);
smartphone1.azzeraChiamate();
console.log(`Chiamate dopo cancellazione: ${smartphone1.getNumeroChiamate()}`);
let smartphone2 = new Smartphone();
smartphone2.ricarica(10);
console.log(smartphone2.numero404());
smartphone2.chiamata(5);
console.log(`Chiamate eseguite: ${smartphone2.getNumeroChiamate()}`);
smartphone2.azzeraChiamate();
console.log(`Chiamate dopo cancellazione: ${smartphone2.getNumeroChiamate()}`);
let smartphone3 = new Smartphone();
smartphone3.ricarica(20);
console.log(smartphone3.numero404());
smartphone3.chiamata(7);
console.log(`Chiamate eseguite: ${smartphone3.getNumeroChiamate()}`);
smartphone3.azzeraChiamate();
console.log(`Chiamate dopo cancellazione: ${smartphone3.getNumeroChiamate()}`);
