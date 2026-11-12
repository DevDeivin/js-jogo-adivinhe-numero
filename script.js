alert("Boas vindas")

let nomeJogador = prompt("Digite seu nome:");

let querJogar = confirm("Deseja Jogar?");

if(querJogar){
    alert("Boa Sorte, " + nomeJogador);

    const numeroSecreto = 7;

    let numeroDigitado = prompt("Digite um número");
    if(numeroDigitado == numeroSecreto) {
        alert("Acertou Mizéra.");
    } 
    if(numeroDigitado > numeroSecreto) {
        alert("menos");     
    } 
    if(numeroDigitado < numeroSecreto) {
        alert("Mais");
    }

} else{
    alert("Que pena " + nomeJogador + ", até a próxima.");
}
