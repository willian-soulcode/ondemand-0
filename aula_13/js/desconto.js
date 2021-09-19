
function calcular(){

    var compra = document.getElementById("compra").value;
    var desconto = 0;;

    if(compra > 100){ desconto = compra * 10 / 100; }

    var valor_final = compra - desconto;

    document.getElementById("resultado").innerHTML = "Você vai pagar R$" + valor_final.toFixed(2);

}

