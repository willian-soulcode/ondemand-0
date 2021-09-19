
let text = "";

let i = 0;

while (i < 10) {
    text += "<br>O número é " + i;
    i++;
}

document.getElementById("resposta").innerHTML = text;

