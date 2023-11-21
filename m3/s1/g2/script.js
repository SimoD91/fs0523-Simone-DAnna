"use strict";
class SonAccount {
    constructor() {
        this.balanceInit = 0;
    }
    oneDeposit(amount) {
        this.balanceInit += amount;
        console.log("Saldo depositato", this.balanceInit);
    }
    oneWithDraw(amount) {
        if (amount <= this.balanceInit) {
            this.balanceInit -= amount;
            console.log("Prelievo avvenuto con successo");
        }
        else {
            console.log("Saldo non disponibile", amount);
        }
    }
}
class MotherAccount extends SonAccount {
    addInterest() {
        let interest = this.balanceInit * 0.1;
        this.balanceInit += interest;
    }
}
let sonAccount = new SonAccount();
sonAccount.oneDeposit(300);
sonAccount.oneWithDraw(270);
let motherAccount = new MotherAccount();
motherAccount.oneDeposit(290);
motherAccount.oneWithDraw(80);
motherAccount.addInterest();
console.log("Credito", motherAccount.balanceInit);
