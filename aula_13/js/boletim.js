
var nota1 = parseFloat(prompt("Digite a 1ª nota:"));

var nota2 = parseFloat(prompt("Digite a 2ª nota:"));

var nota3 = parseFloat(prompt("Digite a 3ª nota:"));

var media = (nota1 + nota2 + nota3 ) /3;

if (media >= 6) {
    alert("Aluno Aprovado!\nMédia: " + media.toFixed(1));
} else {
    alert("Aluno Reprovado!\nMédia: " + media.toFixed(1));
}

