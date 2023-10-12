let tombolaccia = document.querySelector('.tombolaccia');
let numeriArea = document.querySelector('.numeri');

for(let i = 1; i < 77; i++){
let numero = document.createElement('div');
numero.classList.add('numero');
numero.innerText = i;
numeriArea.appendChild(numero);
}


function Random() {
    let numeriArea = Math.floor(Math.random() * 68) +1;
    document.getElementById('numero').value = numeriArea;
}