let pontosJogador = 0;
let pontosCpu = 0;
let rounds = 1;
let deckPlayer = [];
let deckCPU = [];
const POINT_WIN = 50;

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
  rounds++;
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
    pontosJogador += POINT_WIN;
    winMove(deckPlayer, deckCPU);
  
  } 
  else if(attributeValue < attributeValueCPU) {
    pontosCpu += POINT_WIN;
    CPUTurn();
    winMove(deckCPU, deckPlayer);
    attributeCPUSelection();
  
  } else {
    drawMove(deckPlayer, deckCPU);
  }

}

async function attributeCPUSelection() {
  let CPUdata = attributeSelectionByCPU();
  console.log(CPUdata);
  let playerValue = attributePlayerCompare(CPUdata.name);
  console.log(playerValue);
  // movimento das cartas
    const elementCard = document.getElementById("card1");
    elementCard.classList.add("card1-hover");

    const element = document.getElementById("card2");
    element.classList.add("card2-hover");

  // retorno das cartas
  setTimeout(positionReturn, 1000);
  
  setTimeout(() => {
    if(CPUdata.value > playerValue) {
      pontosCpu += POINT_WIN;
      winMove(deckCPU, deckPlayer);
      attributeCPUSelection();
    } else if(CPUdata.value < playerValue) {
      playerTurn()
      pontosJogador += POINT_WIN;
      winMove(deckPlayer, deckCPU);
    } else {
      drawMove(deckPlayer, deckCPU);
      attributeCPUSelection();
    }
  }, 4000); 
  
}

function playerTurn() {
  let element = document.getElementById("mensagem-player");
  element.innerHTML = "Clique na carta e escolha o atributo";
}

function CPUTurn() {
  let element = document.getElementById("mensagem-player");
  element.innerHTML = "Aguarde o turno do oponente";
}


function attributeCPUCompare(attributeName) {
  const attributesDivCPU = document.querySelectorAll(".atr-cpu-card");
  let valueAttribute;
  let attributeNameCPU;
  attributesDivCPU.forEach((value) => {
    attributeNameCPU = value.innerHTML.split(":")[0];
    if (attributeName == attributeNameCPU) {
      valueAttribute = parseInt(value.innerHTML.split(" ")[1]);
    }
  });

  console.log(valueAttribute);
  return valueAttribute;
}

// comparação carta selecionado pela CPU x player
function attributePlayerCompare(attributeName) {
  const attributeDivPlayer = document.querySelectorAll(".atr-player-card");
  let valueAttribute;
  let attributeNamePlayer;
  attributeDivPlayer.forEach((value) => {
    attributeNamePlayer = value.innerHTML.split(":")[0];
    if (attributeName == attributeNamePlayer) {
      valueAttribute = parseInt(value.innerHTML.split(" ")[1]);
    }
  });

  return valueAttribute;
}

// seleção de carta pela CPU
function attributeSelectionByCPU() {
  const attributesDivCPU = document.querySelectorAll(".atr-cpu-card");
  let attributeSelected = 0;
  let attributeSelectedName;
  attributesDivCPU.forEach((value) => {
    let attributeValue = parseInt(value.innerHTML.split(" ")[1]);
    if (attributeValue > attributeSelected) {
      attributeSelected = attributeValue;
      attributeSelectedName = value.innerHTML.split(":")[0];
    }
  });
  return { name: attributeSelectedName, value: attributeSelected };
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
  gameOver();
  updateScore();
}

function drawMove(deckPlayer, deckCPU) {
    deckPlayer.push(deckPlayer.shift());
    deckCPU.push(deckCPU.shift());
    updateScore();
}

function gameOver() {
  if(deckCPU.length == 0){
    pontosJogador *= 2;
    scoreDocument();
  } else if(deckPlayer.length == 0){
    pontosJogador /= 2;
    scoreDocument();
  }
}

function scoreDocument() {
  const urlParams = new URLSearchParams(location.search);
  const nickname = urlParams.get("nickname");
  let score = pontosJogador;
  window.location = `http://127.0.0.1:5501/web/components/telaPlacar.html?nickname=${nickname}&score=${score}`;
}
