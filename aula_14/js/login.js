
var tentativa = 1;

console.log(
    "Valores Esperados:" +
    "\nemail = user@soulcode.org" +
    "\nsenha = soul123" +
    "\nTentativa nº " + tentativa
);

while (tentativa <= 3) {

    var email = prompt("Digite seu e-mail:");
    var senha = prompt("Digite sua senha:");

    if (email == "user@soulcode.org" && senha == "soul123") {

        // console.log( "Tentativa nº " + tentativa );
        alert("Acesso Autorizado!");
        tentativa = "4";
        
    } else {

        alert("Dados Incorretos\nVocê tem mais " + (3 - tentativa) + " chances");
        tentativa++;
        console.log( "Tentativa nº " + tentativa );

    }
}
console.log("Tentativas Esgotadas!");

