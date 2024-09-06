const element = document.querySelector("#gangetabell")

// Oppgaven med en for loop

for (let x = 1; x <= 10; x++) {
    element.innerHTML += " " + x * 1;
    element.innerHTML += " " + x * 2;
    element.innerHTML += " " + x * 3;
    element.innerHTML += " " + x * 4;
    element.innerHTML += " " + x * 5;
    element.innerHTML += " " + x * 6;
    element.innerHTML += " " + x * 7;
    element.innerHTML += " " + x * 8;
    element.innerHTML += " " + x * 9;
    element.innerHTML += " " + x * 10 + "<br>";


};


// Oppgaven med to for looper

function gange() {
    console.log("found")
for (let x = 1; x <= 10; x++) {
    for (let i = 1; i <= 10; i++) {
        if ( i >= 10) {
            element.innerHTML += x*i + " " + "<br>"
        }
        else {
            element.innerHTML += x*i + " "
        }
        

        }
    }
};
