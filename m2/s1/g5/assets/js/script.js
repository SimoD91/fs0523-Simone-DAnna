
//<---- Script per cambio colore nav-bar e pulsante nav-bar --->\\

let button = document.getElementById("button");
let navi = document.querySelector("header");

window.addEventListener("scroll", function() {

    if (window.scrollY > 360) {
        button.style.backgroundColor = "#1a8917";
        button.style.border = "2px solid #1a8917";
        button.style.transition = "0.6s";
        navi.style.backgroundColor = "white";
        navi.style.transition = "0.6s";
    } else {
        button.style.backgroundColor = "#191919";
        button.style.border = "2px solid #191919";
        navi.style.backgroundColor = "#ffc017";
    }
});

//<---- Script per il popup dopo click pulsante sezione hero e nav-bar--->\\

let apriPop = document.querySelector(".buttonstart");
let apriPop2 = document.getElementById("button");
let chiudiPop = document.querySelector(".close-popup");
let popup = document.querySelector("#popup");
let popupBg = document.querySelector("#popup-Bg");

function togglePopup(){
    popup.classList.toggle("hidden");
	popupBg.classList.toggle("hidden");
}

apriPop2.addEventListener("click", togglePopup)
apriPop.addEventListener("click", togglePopup)
chiudiPop.addEventListener("click", togglePopup)
popupBg.addEventListener("click", togglePopup)