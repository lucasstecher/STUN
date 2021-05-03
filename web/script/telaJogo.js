let pontosJogador = 0;
let pontosCpu = 0;
let rounds = 1;

document.addEventListener("DOMContentLoaded", async () => {
  firstClick();
});


function positionReturn() {
  const cardPlayer = document.getElementById("card1");
  const cardCPU = document.getElementById("card2");
  cardPlayer.classList.remove("card1-hover");
  cardCPU.classList.remove("card2-hover");
  updateRound();
}

function firstClick() {
  const element = document.getElementById("card-click");
  const elementCard = document.getElementById("card1");
  element.addEventListener("click", (e) => {
    elementCard.classList.add("card1-hover");
  });

  const attributes = document.querySelectorAll(".atr-player-card");
  attributes.forEach((value) => {
    value.addEventListener("click", attributeSelection);
  });
}

function updateRound() {
  let roundsDiplay = document.querySelector("#tela-jogo__rodada");
  rounds += 1;
  roundsDiplay.innerHTML = rounds;
}

function updateScore() {
  let plcarPlayer = document.querySelector("#jogador-placar");
  let placarCpu = document.querySelector("#cpu-placar");
  plcarPlayer.innerHTML = pontosJogador;
  placarCpu.innerHTML = pontosCpu;
}

function attributeSelection(e) {
  const element = document.getElementById("card2");
  element.classList.add("card2-hover");
  setTimeout(positionReturn, 2000);
  let attributeValue = parseInt(e.target.innerHTML.split(" ")[1]);
  let attributeName = e.target.innerHTML.split(":")[0];
  let attributeValueCPU = attributeCPUCompare(attributeName);

  if (attributeValue > attributeValueCPU) {
    pontosJogador += 50;

    console.log("Player WIN!");
  } else {
    pontosCpu += 50;

    console.log("Player LOSE!");
  }

  updateScore();
}

function attributeCPUCompare(attributeName) {
  const attributesDivCPU = document.querySelectorAll(".atr-cpu-card");
  let valueAttribute;
  attributesDivCPU.forEach((value) => {
    let attributeNameCPU = value.innerHTML.split(":")[0];
    if (attributeName == attributeNameCPU) {
      valueAttribute = parseInt(value.innerHTML.split(" ")[1]);
    }
  });

  return valueAttribute;
}

function attributeSelectionByCPU() {
  const attributesDivCPU = document.querySelectorAll(".atr-cpu-card");
  let attributeSelected = 0;
  attributesDivCPU.forEach((value) => {
    let attributeValue = parseInt(value.innerHTML.split(" ")[1]);
    if (attributeValue > attributeSelected) {
      attributeSelected = attributeValue;
    }
  });
  return attributeSelected;
}

// dividir cartas com o posicionamento aleatorio
async function deckDivision() {
  let deck = await getCards();
  deck = deck.sort(() => {
    return 0.5 - Math.random();
  });
  const deckPlayer = deck.slice(0, 9);
  const deckCPU = deck.slice(10, 19);

  console.log(deckPlayer);
  console.log(deckCPU);
}

// ajustando o deck após jogada
function winMove(deckWinner, deckLoser) {
  let playerCard = deckWinner.shift();
  deckWinner.push(playerCard);
  deckWinner.push(deckLoser.shift);
}

