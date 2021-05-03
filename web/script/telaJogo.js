const URL_NARUTO = "https://i.ibb.co/2YPMPcw/wp5845402.jpg";
const CARD_COLOR_NARUTO = "linear-gradient(rgb(93, 94, 170), rgb(93, 66, 103))";
const URL_HERO = "https://i.ibb.co/c2CsvNN/wallup-net.jpg";
const CARD_COLOR_HERO = "#1780a1";
const URL_FUTEBOL =
  "https://i.ibb.co/JFZrNZt/Neymar-JR-Neymar-Paris-Saint-Germain-P-S-G-soccer-1389397.jpg";
const CARD_COLOR_FUTEBOL = "#7b2cbf";
const URL_NARUTO_DECK = "http://localhost:3000/narutoCards";
const URL_HEROES_DECK = "http://localhost:3000/heroesCards";
const URL_FUTEBOL_DECK = "http://localhost:3000/futebolCards";

backgroundSelector();

document.addEventListener("DOMContentLoaded", async () => {
  cardFirstClick();
});

document.addEventListener("DOMContentLoaded", async () => {
  cardFirstClick();

  const attributes = document.querySelectorAll(".atr-player-card");
  attributes.forEach((value) => {
    value.addEventListener("click", attributeSelection);
  });
});

async function getCards() {
  let deck = queryString();
  switch (deck) {
    case "cardNaruto":
      cards = await useGet(URL_NARUTO_DECK);
      break;
    case "cardHero":
      cards = await useGet(URL_HEROES_DECK);
      break;
    case "cardFutebol":
      cards = await useGet(URL_FUTEBOL_DECK);
      break;
  }

  return cards;
}

function cardReturn() {
  const cardPlayer = document.getElementById("card1");
  const cardCPU = document.getElementById("card2");
  cardPlayer.classList.remove("card1-hover");
  cardCPU.classList.remove("card2-hover");
}

function changeCard(card) {
  let deck = queryString();
  switch (deck) {
    case "cardNaruto":
      changeCardNaruto(card);
      break;
    case "cardHero":
      changeCardHeroes(card);
      break;
    case "cardFutebol":
      changeCardFutebol(card);
      break;
  }
}

async function useGet(url) {
  const response = await fetch(url);
  const cards = await response.json();

  return cards;
}

function changeCardNaruto(card) {
  const PlayerCard = document.querySelectorAll("#card1 > *");
  PlayerCard[0].src = card.image;
  PlayerCard[1].innerHTML = card.name;
  PlayerCard[2].innerHTML = `Ninjutsu: ${card.ninjutsu}`;
  PlayerCard[3].innerHTML = `Taijutsu: ${card.taijutsu}`;
  PlayerCard[4].innerHTML = `Genjutsu: ${card.genjutsu}`;
  PlayerCard[5].innerHTML = `Inteligência: ${card.intelligence}`;
}

function changeCardHeroes(card) {
  const PlayerCard = document.querySelectorAll("#card1 > *");
  PlayerCard[0].src = card.image;
  PlayerCard[1].innerHTML = card.name;
  PlayerCard[2].innerHTML = `Velocidade: ${card.velocity}`;
  PlayerCard[3].innerHTML = `Especial: ${card.special}`;
  PlayerCard[4].innerHTML = `Força: ${card.strength}`;
  PlayerCard[5].innerHTML = `Inteligência: ${card.intelligence}`;
}

function changeCardFutebol(card) {
  const PlayerCard = document.querySelectorAll("#card1 > *");
  PlayerCard[0].src = card.image;
  PlayerCard[1].innerHTML = card.name;
  PlayerCard[2].innerHTML = `Ritmo: ${card.pace}`;
  PlayerCard[3].innerHTML = `Finalização: ${card.shooting}`;
  PlayerCard[4].innerHTML = `Drible: ${card.dribbling}`;
  PlayerCard[5].innerHTML = `Fisico: ${card.physical}`;
}

function queryString() {
  const urlParams = new URLSearchParams(location.search);
  const deck = urlParams.get("deck");
  return deck;
}

function cardFirstClick() {
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

function attributeSelection(e) {
  const element = document.getElementById("card2");
  element.classList.add("card2-hover");
  setTimeout(cardReturn, 2000);
  let attributeValue = parseInt(e.target.innerHTML.split(" ")[1]);
  let attributeName = e.target.innerHTML.split(":")[0];
  let attributeValueCPU = attributeCPUCompare(attributeName);
  if (attributeValue > attributeValueCPU) {
    console.log("Player WIN!");
  } else {
    console.log("Player LOSE!");
  }
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

function backgroundSelector() {
  let deck = queryString();
  let background = document.querySelector(".tela-jogo__container");
  let backgroundCard = document.getElementsByClassName("tela-jogo__cards");

  if (deck === "cardNaruto") {
    background.style.backgroundImage = `url(${URL_NARUTO})`;
    for (let i = 0; i < backgroundCard.length; i++) {
      backgroundCard[i].style.background = CARD_COLOR_NARUTO;
    }
  } else if (deck === "cardHero") {
    background.style.backgroundImage = `url(${URL_HERO})`;
    for (let i = 0; i < backgroundCard.length; i++) {
      backgroundCard[i].style.background = CARD_COLOR_HERO;
    }
  } else if (deck === "cardFutebol") {
    background.style.backgroundImage = background.style.backgroundImage = `url(${URL_FUTEBOL})`;
    for (let i = 0; i < backgroundCard.length; i++) {
      backgroundCard[i].style.background = CARD_COLOR_FUTEBOL;
    }
  }
}
