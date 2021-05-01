function chamarTelaJogo(deck) {
  let nick = pegarNome();
  window.location = `http://127.0.0.1:5501/web/components/telaJogo.html?select-deck=${deck}&nick=${nick}`;
}

function pegarNome() {
  let nomeValor = document.querySelector("#inputNome");
  let nome = nomeValor.value;
  if (nome) {
    return nome;
  }
  return "anonimo";
}
