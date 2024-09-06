
const element = document.querySelector("#svar");
const element1 = document.querySelector("#forsok")

let tries = 0;
let passord = false
let answer

function c() {
    if (answer === "hei") {
        element.innerHTML = 'Riktig passord';
        passord = true
        
    } else {
        element.innerHTML = 'Feil passord';
        while (passord === false) {
            element1.innerHTML = "Du har brukt " + tries + " av 3 forsøk";
            break;
        }
    }
}

function again() {
if (passord === false && tries <= 2) {
    answer = prompt('Passord');
    tries++;
    console.log(tries)
}

else {
    if (passord === true)
        element.innerHTML = 'Du har allerede skrevet riktig passord'

        else {
            element.innerHTML = 'For mange forsøk'
        }
}
}

