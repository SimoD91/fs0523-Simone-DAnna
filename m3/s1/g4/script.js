"use strict";
class Vestito {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    getsaldocapo() {
        return this.saldo;
    }
    getacquistocapo() {
        return this.prezzoivainclusa - (this.prezzoivainclusa * (this.saldo / 100));
    }
}
let vestito1 = new Vestito(3, 1181, "inverno", "felpa", 1229, 1, "beige", 17.50, 21.35, "negozio", 50);
console.log(vestito1.getsaldocapo());
console.log(vestito1.getacquistocapo());
let api = "Abbigliamento.json";
fetch(api)
    .then(response => response.json())
    .then(data => {
    console.log(data);
});
