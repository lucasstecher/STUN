const URL_NARUTO = 'https://i.ibb.co/XZv452Y/f54b0d9d056f432251c9b7ba80164db6.jpg';
const URL_HERO = 'https://i.ibb.co/c2CsvNN/wallup-net.jpg';
const CARD_COLOR_HERO = "#1780a1";
const URL_FUTEBOL = 'https://i.ibb.co/yhPGJNY/e6640249f7ca7d4cd9a03d317267b37f.jpg';
const CARD_COLOR_FUTEBOL = "#7b2cbf";

backgroundSelector();

document.addEventListener('DOMContentLoaded', () => {
  cardFirstClick();
  const attributes = document.querySelectorAll('.atr-player-card');

  attributes.forEach( value => {
    value.addEventListener('click', attributeSelection);
  });


});


function queryString() {
  const urlParams = new URLSearchParams(location.search);
  const deck = urlParams.get('deck');
  return deck;
}


function cardFirstClick() {
  const element = document.getElementById("card-click");
  const elementCard = document.getElementById("card1");
  element.addEventListener("click", (e) => {
    elementCard.classList.add("card1-hover");
  });
};

function attributeSelection(e) {
  const element = document.getElementById("card2");
  element.classList.add("card2-hover");
}

function backgroundSelector() {

  let deck = queryString();
  let background = document.querySelector(".tela-jogo__container");
  let backgroundCard = document.getElementsByClassName("tela-jogo__cards");

  if (deck === "cardNaruto") {
    background.style.backgroundImage =
      `url(${URL_NARUTO})`;
  } else if (deck === "cardHero") {
    background.style.backgroundImage =
      `url(${URL_HERO})`;
    for (let i = 0; i < backgroundCard.length; i++) {
      backgroundCard[i].style.background = CARD_COLOR_HERO;
    }
  } else if (deck === "cardFutebol") {
    background.style.backgroundImage = background.style.backgroundImage =
      `url(${URL_FUTEBOL})`;
    for (let i = 0; i < backgroundCard.length; i++) {
      backgroundCard[i].style.background = CARD_COLOR_FUTEBOL;
    }
  }
}



