const display = document.getElementById("display");
const numeros = document.querySelectorAll("[data-num]");
const operacoes = document.querySelectorAll("[data-op]");
const clearBtn = document.getElementById("clear");
const equalsBtn = document.getElementById("equals");

numeros.forEach(botao => {
  botao.addEventListener("click", () => {
    display.value += botao.dataset.num;
  });
});

clearBtn.addEventListener("click", () => {
  display.value = ""; // Limpa o display
});

let primeiroNumero = "";
let operacaoAtual = "";
let segundoNumero = "";

operacoes.forEach(botao => {
  botao.addEventListener("click", () => {
    if (display.value === "") return;  // nada acontece se não tiver número
    primeiroNumero = display.value; // Guarda o valor que já estava no display
    operacaoAtual = botao.dataset.op; // Guarda a operação
    display.value = ""; // Limpa o display para o próximo número
  });
});

equalsBtn.addEventListener("click", () => {
  if (primeiroNumero === "" || operacaoAtual === "" || display.value === "") return; 
  segundoNumero = display.value;
  let resultado;
  switch(operacaoAtual){
    case "+":
      resultado = parseFloat(primeiroNumero) + parseFloat(segundoNumero);
      break;
    case "-":
      resultado = parseFloat(primeiroNumero) - parseFloat(segundoNumero);
      break;
    case "*":
      resultado = parseFloat(primeiroNumero) * parseFloat(segundoNumero);
      break;  
    case "/":
      resultado = parseFloat(primeiroNumero) / parseFloat(segundoNumero);
      break;
  }

  display.value = resultado; 
  primeiroNumero = "";    
  operacaoAtual = "";
  segundoNumero = "";
});