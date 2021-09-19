
var total;
//variável declarada globalmente para visibilidade no documento inteiro

function comprar() {

    var produto = prompt("Qual o nome do produto?");
    var preco_unit = parseFloat(
            prompt("Qual o preço unitário desse produto?"));
    var quantidade = parseInt(
            prompt("Quantas unidades desse produto vocÊ vai comprar?"));

    alert("Calculando sua compra...");
    total = preco_unit * quantidade;

    document.write("<h2>RESUMO DA COMPRA</h2>" +
        "QTD: " + quantidade + "<br>" +
        "DESCRIÇÃO: " + produto + "<br>" +
        "VALOR UNITÁRIO: R$" + preco_unit.toFixed(2) + "<br>" +
        "<h3>TOTAL: R$" + total.toFixed(2) + "</h3>");

    document.write("<button onclick='troco()'>Pagar Agora</button>");
}

function troco(){
    var dinheiro = parseFloat(
            prompt("Com qual valor deseja pagar"));
    var troco = dinheiro - total;
    document.write("<h3>Você pagou com R$ "+ dinheiro.toFixed(2) + "</h3>");
    document.write("<h3>Seu troco é R$ "+ troco.toFixed(2) + "</h3>");
}

