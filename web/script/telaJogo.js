let pontosJogador = 0;
let pontosCpu = 0;
let rounds = 1;
let deckPlayer = [];
let deckCPU = [];

document.addEventListener("DOMContentLoaded", async () => {
  await deckDivision();
  changeCardPlayer(deckPlayer[0]);
  changeCardCPU(deckCPU[0]);
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
  changeCardPlayer(deckPlayer[0]);
  changeCardCPU(deckCPU[0]);
}

function updateScore() {
  let placarPlayer = document.getElementById("jogador-placar");
  let placarCpu = document.getElementById("cpu-placar");
  placarPlayer.innerHTML = pontosJogador;
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
    winMove(deckPlayer, deckCPU);
  } else if(attributeValue < attributeValueCPU) {
    pontosCpu += 50;
    winMove(deckCPU, deckPlayer);
  } else {
    drawMove(deckPlayer, deckCPU);
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
  deckPlayer = deck.slice(0, 10);
  deckCPU = deck.slice(10, 20);
}

// ajustando o deck após jogada
function winMove(deckWinner, deckLoser) {
  let playerCard = deckWinner.shift();
  deckWinner.push(playerCard);
  deckWinner.push(deckLoser.shift());
}

function drawMove(deckPlayer, deckCPU) {
    deckPlayer.push(deckPlayer.shift());
    deckCPU.push(deckCPU.shift());
}

