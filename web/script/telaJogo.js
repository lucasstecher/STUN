function queryString(param) {
  let loc = location.search.substring(1, location.search.length);
  let paramValue = false;
  let params = loc.split("&");
  for (let i = 0; i < params.length; i++) {
    let paramName = params[i].substring(0, params[i].indexOf("="));
    if (paramName === param) {
      paramValue = params[i].substring(params[i].indexOf("=") + 1);
    }
  }
  if (paramValue) {
    return paramValue;
  } else {
    return undefined;
  }
}

function cardClick() {
  const element = document.getElementById("card-click");
  const elementCard = document.getElementById("card1");

  element.addEventListener("click", (e) => {
    elementCard.classList.add("card1-hover");
  });

  const element2 = document.getElementById("card2");
  const escolha = document.getElementById("ninjutsu");

  escolha.addEventListener("click", (e) => {
    element2.classList.add("card2-hover");
  });
}

function mudarBackground() {
  let variavel = queryString("select-deck");

  let background = document.querySelector(".tela-jogo__container");
  let backgroundCard = document.getElementsByClassName("tela-jogo__cards");

  if (variavel === "deck1") {
    background.style.backgroundImage =
      "url('https://i.ibb.co/XZv452Y/f54b0d9d056f432251c9b7ba80164db6.jpg')";
  } else if (variavel === "deck2") {
    background.style.backgroundImage =
      "url('https://i.ibb.co/c2CsvNN/wallup-net.jpg')";
    for (let i = 0; i < backgroundCard.length; i++) {
      backgroundCard[i].style.background = "#1780a1";
    }
  } else if (variavel === "deck3") {
    background.style.backgroundImage = background.style.backgroundImage =
      "url('https://i.ibb.co/yhPGJNY/e6640249f7ca7d4cd9a03d317267b37f.jpg')";
    for (let i = 0; i < backgroundCard.length; i++) {
      backgroundCard[i].style.background = "#7b2cbf";
    }
  }
}

mudarBackground();
cardClick();
