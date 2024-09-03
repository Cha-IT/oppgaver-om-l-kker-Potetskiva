const element = document.querySelector("#feil");


let tries = 0;



while (passord != "hei" && tries <= 3) {
    let passord = prompt('Passord');

}

if (passord === "hei") {
    element.innerHTML = 'Riktig passord';
    
} else {
    element.innerHTML = 'Feil passord'
    tries++;
}