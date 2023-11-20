let player1:number = 35;
let player2:number = 69;

function randomNum():number {
    return Math.ceil(Math.random() * (100 - 1) + 1);
}

function winner(player1:number, player2:number):string {
    let numeroCasuale:number = randomNum();
    console.log(`Il numero sorteggiato è ${numeroCasuale}`);

    let numberPlayer1:number = Math.abs(player1 - numeroCasuale);
    let numberPlayer2:number = Math.abs(player2 - numeroCasuale);

    if (numberPlayer1 === numberPlayer2) {
        return "I giocatori sono in parità perchè nessuno ci è andato più vicino";
    } else if (numberPlayer1 < numberPlayer2) {
        return "Il giocatore 1 ha vinto perchè ci è andato più vicino";
    } else {
        return "Il giocatore 2 ha vinto perchè ci è andato più vicino";
    }
}

let result:string = winner(player1, player2);
console.log(result);