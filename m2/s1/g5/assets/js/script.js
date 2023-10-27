/*
let navi = document.querySelector('header');
let button2 = document.querySelector('#button2');
let button = document.querySelector('.button');

window.onscroll = () => {
    if (window.scrollY > 300) {
        navi.classList.add('header:active');
        button.style.display = 'none';
        button2.style.display = 'block';
    } else {
        navi.classList.remove('header:active');
        button.style.display = 'block';
        button2.style.display = 'none';
    }
};

Ho provato a cambiare colore alla navbar durante lo scroll con mille varianti ma non me lo prende, cambia solo colore dello sfondo dopo averci
cliccato, sicuramente a causa di :active che non serve al mio scopo ma ormai l'ho capito troppo tardi,
e mi prendeva 2 pulsanti per poi farmeli scomparire una volta scrollato invece di mostrarne uno per volta, ho disattivato tutto perchè
erano sovrapposti e mi rimane poco tempo, se vedrai un button2 nel css mai utilizzato è per queste prove che ho fatto
*/