
var dolar = parseFloat(
    prompt("Quantos reais vale um dólar hoje?")
);

var real = parseFloat(
    prompt("Quantos reais você quer converter?")
);

var cambio = real / dolar;

alert("R$" + real.toFixed(2) + " equivale a $" + cambio.toFixed(2));

