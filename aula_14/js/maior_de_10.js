
var maior = 0;
var numeros_digitados = "O usuário digitou: ";

for (let i = 1; i <= 10; i++) {

    var numero = parseInt(prompt("Digite o " + i + "º número:"));
    console.log(numeros_digitados += numero + ", ");

    if (numero > maior) {
        maior = numero;
        console.log("A partir de agora, o maior número é: " + maior);
    }

}

alert(numeros_digitados +
    "\nO maior número digitado foi: " + maior
);
