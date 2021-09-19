
function verificar() {

    //recebendo todas as variáveis do formulário
    var nome = document.getElementById("nome").value;
    var nasc = document.getElementById("nasc").value;
    var prova = document.getElementById("prova").value;
    var psico = document.getElementById("psico").value;
    var vista = document.getElementsByName("vista");
    var pratica = document.getElementsByName("pratica");

    var ano_atual = 2021;

    if ((ano_atual - nasc) >= 18) {
        if (prova >= 7) {
            if (psico >= 7) {
                if (vista[0].checked) {
                    if (pratica[0].checked) {
                        alert("Você cumpriu todas as exigências e sua CNH será emitida!\nParabéns!");
                    } else {
                        alert("Sua CNH NÃO será emitida!\nVocê reprovou a Prova Prática!");
                    }
                } else {
                    alert("Sua CNH NÃO será emitida!\nVocê reprovou o Exame de Visão!");
                }
            } else {
                alert("Sua CNH NÃO será emitida!\nVocê reprovou o Teste Psicológico!");
            }
        } else {
            alert("Sua CNH NÃO será emitida!\nVocê reprovou a Prova Teórica!");
        }
    } else {
        alert("Sua CNH NÃO será emitida!\nVocê ainda não tem 18 anos!");
    }
}


