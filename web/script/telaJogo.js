let playerScore = 0;
let CpuScore = 0;
let rounds = 1;
let deckPlayer = [];
let deckCPU = [];
const POINT_WIN = 50;
const URL = "https://app-stun.herokuapp.com/players";

document.addEventListener("DOMContentLoaded", async () => {
  
  await deckDivision();
  changeCardPlayer(deckPlayer[0]);
  changeCardCPU(deckCPU[0]);
  firstClick();


});


// levanta a carta e aguarda o player selecionar o atributo.
function firstClick() {
  const clickArea = document.getElementById("card-click");
  const card = document.getElementById("card1");
  clickArea.addEventListener("click", (e) => {
    card.classList.add("card1-hover");
  });

  const attributes = document.querySelectorAll(".atr-player-card");
  attributes.forEach((value) => {
    value.addEventListener("click", attributeSelection);
  });
}

// comparação de atributos
function attributeSelection(e) {
  // levanta carta do oponente
  const element = document.getElementById("card2");
  element.classList.add("card2-hover");
  
  // retorna ambas as cartas para posição inicial
  setTimeout(positionReturn, 2000);
  
  // pega o valor e o nome do atributo selecionado
  let attributeValue = parseInt(e.target.innerHTML.split(" ")[1]);
  let attributeName = e.target.innerHTML.split(":")[0];
  let attributeValueCPU = attributeCPUCompare(attributeName);

  // verifica qual atributo venceu
  if (attributeValue > attributeValueCPU) {
    playerScore += POINT_WIN;
    winMove(deckPlayer, deckCPU);
  } else if(attributeValue < attributeValueCPU) {
    CpuScore += POINT_WIN;
    CPUTurn();
    winMove(deckCPU, deckPlayer);
    attributeCPUSelection();
  } else {
    drawMove(deckPlayer, deckCPU);
  }
}

// retorna as cartas para posição inicial.
function positionReturn() {
  const cardPlayer = document.getElementById("card1");
  const cardCPU = document.getElementById("card2");
  cardPlayer.classList.remove("card1-hover");
  cardCPU.classList.remove("card2-hover");
  // após posicionar as cartas, atualiza score e round.
  updateRound();
  updateScore();
}

// atualiza round apresentado em tela
function updateRound() {
  let roundsDiplay = document.querySelector("#tela-jogo__rodada");
  rounds++;
  roundsDiplay.innerHTML = rounds;
  
  // atualiza as cartas
  setTimeout(() => {
    changeCardPlayer(deckPlayer[0]);
    changeCardCPU(deckCPU[0]);
  }, 700);
}

// atualiza pontuação em tela
function updateScore() {
  // atualiza pontuação
  let placarPlayer = document.getElementById("jogador-placar");
  let placarCpu = document.getElementById("cpu-placar");
  placarPlayer.innerHTML = playerScore;
  placarCpu.innerHTML = CpuScore;

  //atualiza quantida de cartas
  let cardsCountPlayer = document.getElementById("qtd-cartas-player");
  let cardsCountCPU = document.getElementById("qtd-cartas-cpu");
  cardsCountPlayer.innerHTML = deckPlayer.length;
  cardsCountCPU.innerHTML = deckCPU.length;

}

// controla jogada da CPU
function attributeCPUSelection() {
  let CPUdata;
  let playerValue;
  // movimento das cartas
  setTimeout(() => {
    const elementCard = document.getElementById("card1");
    elementCard.classList.add("card1-hover");

    const element = document.getElementById("card2");
    element.classList.add("card2-hover");
    CPUdata = attributeSelectionByCPU();
    playerValue = attributePlayerCompare(CPUdata.name);
  }, 700);

    setTimeout(positionReturn, 1800);
 
    setTimeout(() => {
    if(CPUdata.value > playerValue) {
      CpuScore += POINT_WIN;
      winMove(deckCPU, deckPlayer);
      attributeCPUSelection();
    } else if(CPUdata.value < playerValue) {
      playerScore += POINT_WIN;
      playerTurn();
      winMove(deckPlayer, deckCPU);
    } else {
      drawMove(deckPlayer, deckCPU);
      attributeCPUSelection();
    }
  
  }, 2500); 
}

// altera contéudo da tela para indicar jogada do player
function playerTurn() {
  let element = document.getElementById("mensagem-player");
  element.innerHTML = "Clique na carta e escolha o atributo";
}

// altera contéudo da tela para indicar jogada da CPU
function CPUTurn() {
  let element = document.getElementById("mensagem-player");
  element.innerHTML = "Aguarde o turno do oponente";
}

// compara atributo selecionado pelo player com atributo equivalente da CPU
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

// ajustando o deck após jogada quand há um vencedor
function winMove(deckWinner, deckLoser) {
  deckWinner.push(deckLoser.shift());
  deckWinner.push(deckWinner.shift());
  gameOver();
}

// ajustando o deck após jogada quando há empate
function drawMove(deckPlayer, deckCPU) {
    deckPlayer.push(deckPlayer.shift());
    deckCPU.push(deckCPU.shift());
}

// indetifica se o jogo acabou, caso o player ganhe dobra pontuação caso contrário fica com metade.
function gameOver() {
  if(deckCPU.length == 0){
    playerScore *= 2;
    scoreDocument();
  } else if(deckPlayer.length == 0){
    playerScore /= 2;
    scoreDocument();
  }
}

// cria um novo registro no banco de dados com o player e sua pontuação
async function savePlayerStatus(url) {
  const urlParams = new URLSearchParams(location.search);
  let scoreCurrentGame = playerScore
  let nickname = urlParams.get("nickname");
  let data = {nickname: nickname, score: scoreCurrentGame};

  const settings = {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
  };
  const fetchResponse = await fetch(url, settings);
}

// chama a função para cadastrar o usuario e a pontuação e segue para a tela de score
async function scoreDocument() {
  const urlParams = new URLSearchParams(location.search);
  const nickname = urlParams.get("nickname");
  let scoreCurrentGame = playerScore;
  await savePlayerStatus(URL);
  window.location = `http://127.0.0.1:5501/web/components/telaPlacar.html?nickname=${nickname}&score=${scoreCurrentGame}`;
}
