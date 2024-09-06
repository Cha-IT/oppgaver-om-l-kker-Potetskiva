const element = document.querySelector("#print");

let a = 1;
let b = 2;

function odd() {
    while (a <= 100) {
        element.innerHTML += a + "<br>";
        a++;
        a++;
    }
};

function even() {
    while (b <= 100) {
        element.innerHTML += b + "<br>";
        b++;
        b++;
    }
};