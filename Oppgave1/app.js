const element1 = document.querySelector("#e");
const element2 = document.querySelector("#r")

let i = 1;
while (i <= 10) {
  element1.innerHTML += i + "<br>";
  i++;
}

let o = 1;
for (let o = 0; o <= 10; o++) {
  element2.innerHTML += o + "<br>";

}