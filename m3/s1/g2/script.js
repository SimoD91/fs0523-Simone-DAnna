"use strict";
class SonAccount {
    constructor() {
        this.bilancioIniziale = 0;
    }
    deposito(somma) {
        this.bilancioIniziale += somma;
        console.log(`Saldo depositato: ${this.bilancioIniziale}€`);
    }
    prelievo(somma) {
        if (somma <= this.bilancioIniziale) {
            this.bilancioIniziale -= somma;
            console.log(`Prelievo avvenuto. Saldo attuale: ${this.bilancioIniziale}€`);
        }
        else {
            console.log(`Richiesta prelievo non disponibile. Saldo attuale: ${this.bilancioIniziale}€`);
        }
    }
}
class MotherAccount extends SonAccount {
    aggiungiInteressi() {
        let interessi = this.bilancioIniziale * 0.1;
        this.bilancioIniziale += interessi;
        console.log(`Saldo attuale con interessi: ${this.bilancioIniziale}€`);
    }
}
let contoFiglio = new SonAccount();
contoFiglio.deposito(220);
contoFiglio.prelievo(250);
let contoMadre = new MotherAccount();
contoMadre.deposito(290);
contoMadre.prelievo(280);
contoMadre.aggiungiInteressi();
