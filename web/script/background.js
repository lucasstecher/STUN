const URL_NARUTO = "https://i.ibb.co/2YPMPcw/wp5845402.jpg";
const CARD_COLOR_NARUTO = "linear-gradient(rgb(93, 94, 170), rgb(93, 66, 103))";
const URL_HERO = "https://i.ibb.co/c2CsvNN/wallup-net.jpg";
const CARD_COLOR_HERO = "#1780a1";
const URL_FUTEBOL =
  "https://i.ibb.co/JFZrNZt/Neymar-JR-Neymar-Paris-Saint-Germain-P-S-G-soccer-1389397.jpg";
const CARD_COLOR_FUTEBOL = "#7b2cbf";

//
function queryString() {
  const urlParams = new URLSearchParams(location.search);
  const deck = urlParams.get("deck");
  return deck;
}

// função para gerar o background baseado no deck selecionado.
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

backgroundSelector();
