const URL_NARUTO = "https://i.ibb.co/2YPMPcw/wp5845402.jpg";
const URL_HERO = "https://i.ibb.co/c2CsvNN/wallup-net.jpg";
const CARD_COLOR_HERO = "#1780a1";
const URL_FUTEBOL =
  "https://i.ibb.co/yhPGJNY/e6640249f7ca7d4cd9a03d317267b37f.jpg";
const CARD_COLOR_FUTEBOL = "#7b2cbf";

backgroundSelector();

document.addEventListener("DOMContentLoaded", async () => {
  let deck = queryString();
  let cards;
  switch (deck) {
    case "cardNaruto":
      cards = await useGet("http://localhost:3000/narutoCards");
      changeCardNaruto(cards[0]);
      break;
    case "cardHero":
      cards = await useGet("http://localhost:3000/heroesCards");
      changeCardHeroes(cards[0]);
      break;
    case "cardFutebol":
      cards = await useGet("http://localhost:3000/futebolCards");
      changeCardFutebol(cards[0]);
      break;
  }

  console.log(cards);

  cardFirstClick();

  const attributes = document.querySelectorAll(".atr-player-card");
  attributes.forEach((value) => {
    value.addEventListener("click", attributeSelection);
  });
});

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
}

function attributeSelection(e) {
  const element = document.getElementById("card2");
  element.classList.add("card2-hover");
}

function backgroundSelector() {
  let deck = queryString();
  let background = document.querySelector(".tela-jogo__container");
  let backgroundCard = document.getElementsByClassName("tela-jogo__cards");

  if (deck === "cardNaruto") {
    background.style.backgroundImage = `url(${URL_NARUTO})`;
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
