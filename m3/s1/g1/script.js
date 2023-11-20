var player1 = 35;
var player2 = 69;
function randomNum() {
    return Math.ceil(Math.random() * (100 - 1) + 1);
}
function winner(player1, player2) {
    var numeroCasuale = randomNum();
    console.log("Il numero sorteggiato \u00E8 ".concat(numeroCasuale));
    var numberPlayer1 = Math.abs(player1 - numeroCasuale);
    var numberPlayer2 = Math.abs(player2 - numeroCasuale);
    if (numberPlayer1 === numberPlayer2) {
        return "I giocatori sono in parità perchè nessuno ci è andato più vicino";
    }
    else if (numberPlayer1 < numberPlayer2) {
        return "Il giocatore 1 ha vinto perchè ci è andato più vicino";
    }
    else {
        return "Il giocatore 2 ha vinto perchè ci è andato più vicino";
    }
}
var result = winner(player1, player2);
console.log(result);
