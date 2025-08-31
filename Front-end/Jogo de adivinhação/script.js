const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let contador = 0;

const inputPalpite = document.getElementById("palpite");
const botaoEnviar = document.getElementById("enviar");
const mensagem = document.getElementById("mensagem");
const tentativas = document.getElementById("tentativas");

botaoEnviar.addEventListener("click", () => {
    const palpite = Number(inputPalpite.value);
    contador++;
    tentativas.textContent = `Tentativas: ${contador}`;

    if (palpite === numeroSecreto) {
        mensagem.textContent = `Parabéns! Você acertou em ${contador} tentativas!`;
    } else if (palpite < numeroSecreto) {
        mensagem.textContent = "O número é maior!";
    } else if (palpite > numeroSecreto) {
        mensagem.textContent = "O número é menor!";
    }

    inputPalpite.value = "";
    inputPalpite.focus();
});
