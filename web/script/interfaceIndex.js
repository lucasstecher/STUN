document.addEventListener('DOMContentLoaded', () => {
  
  let naruto = document.getElementById("cardNaruto");
  let hero = document.getElementById("cardHero");
  let futebol = document.getElementById("cardFutebol");

  naruto.addEventListener('click', gameDocument);
  hero.addEventListener('click', gameDocument);
  futebol.addEventListener('click', gameDocument);

});

function gameDocument(e) {
  let deck = e.target.id;
  let nickname = getName();
  window.location = `http://127.0.0.1:5501/web/components/telaJogo.html?deck=${deck}&nickname=${nickname}`;
}

function getName() {
  let nameValue = document.querySelector("#inputNome");
  let name = nameValue.value;
  if (name) {
    return name;
  }
  return "Anônimo";
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} 