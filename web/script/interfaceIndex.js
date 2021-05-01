document.addEventListener('DOMContentLoaded', () => {
  
  let naruto = document.getElementById("cardNaruto");
  let hero = document.getElementById("cardHero");
  let futebol = document.getElementById("cardFutebol");

  naruto.addEventListener('click', chamarTelaJogo);
  hero.addEventListener('click', chamarTelaJogo);
  futebol.addEventListener('click', chamarTelaJogo);

});

function chamarTelaJogo(e) {
  let deck = e.target.id;
  let nickname = pegarNome();
  window.location = `http://127.0.0.1:5501/web/components/telaJogo.html?deck=${deck}&nickname=${nickname}`;
}

function pegarNome() {
  let nomeValor = document.querySelector("#inputNome");
  let nome = nomeValor.value;
  if (nome) {
    return nome;
  }
  return "anonimo";
}
