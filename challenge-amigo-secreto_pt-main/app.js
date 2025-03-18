let amigos = [];

function adicionarAmigo() { 
  let inputAmigo = document.getElementById("amigo");
  let nomeAmigo = inputAmigo.value;

  if (!nomeAmigo) {
    alert("Digite o nome do amigo");
    return;
  }
  amigos.push(nomeAmigo);
  inputAmigo.value = "";
  inputAmigo.focus(); 
  atualizarlista();
}

function atualizarlista() {
  let listaAmigos = document.getElementById("listaAmigos"); 
  listaAmigos.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li");
    item.textContent = amigos[i];
    listaAmigos.appendChild(item);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("nenhum amigo adicionado");
    return;
  }
  let sorteado = amigos[Math.floor(Math.random() *amigos.length)];
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `O amigo sorteado foi: ${sorteado}`; 
  let limparlista = document.getElementById("listaAmigos");  
  limparlista.innerHTML = "";
}

function speechSynthesis(h1, h2, button) {
  let titulo= document.querySelector('h1'); // Aqui você deve passar o seletor correto
  campo.innerHTML = h2; // h2 é o texto que você quer que seja falado
  let botao = document.querySelector('button:any'); // Seleciona o botão pela classe
  if ('speechSynthesis' in window) {
      let utterance = new SpeechSynthesisUtterance(h2); // Usamos h2 como texto a ser falado
      utterance.lang = 'pt-BR'; 
      utterance.rate = 1.2; 
      window.speechSynthesis.speak(utterance);
  } else {
      console.log("A síntese de fala não é suportada neste navegador.");
  }
}
