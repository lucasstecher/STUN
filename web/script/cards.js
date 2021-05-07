const URL_NARUTO_DECK = "http://localhost:3000/narutoCards";
const URL_HEROES_DECK = "http://localhost:3000/heroesCards";
const URL_FUTEBOL_DECK = "http://localhost:3000/futebolCards";

async function useGet(url) {
    const response = await fetch(url);
    const cards = await response.json();
  
    return cards;
  }

async function getCards() {
    let deck = queryString();
    let cards;
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

  function changeCardPlayer(card) {
    let deck = queryString();
    switch (deck) {
      case "cardNaruto":
        changeCardNaruto(card, "card1");
        break;
      case "cardHero":
        changeCardHeroes(card, "card1");
        break;
      case "cardFutebol":
        changeCardFutebol(card, "card1");
        break;
    }
  }

  function changeCardCPU(card) {
    let deck = queryString();
    switch (deck) {
      case "cardNaruto":
        changeCardNaruto(card, "card2");
        break;
      case "cardHero":
        changeCardHeroes(card, "card2");
        break;
      case "cardFutebol":
        changeCardFutebol(card, "card2");
        break;
    }
  }


  function changeCardNaruto(card, cardChange) {
    const PlayerCard = document.querySelectorAll(`#${cardChange} > *`);
    PlayerCard[0].src = card.image;
    PlayerCard[1].innerHTML = card.name;
    PlayerCard[2].innerHTML = `Ninjutsu: ${card.ninjutsu}`;
    PlayerCard[3].innerHTML = `Taijutsu: ${card.taijutsu}`;
    PlayerCard[4].innerHTML = `Genjutsu: ${card.genjutsu}`;
    PlayerCard[5].innerHTML = `Inteligência: ${card.intelligence}`;
  }
  
  function changeCardHeroes(card, cardChange) {
    const PlayerCard = document.querySelectorAll(`#${cardChange} > *`);
    PlayerCard[0].src = card.image;
    PlayerCard[1].innerHTML = card.name;
    PlayerCard[2].innerHTML = `Velocidade: ${card.velocity}`;
    PlayerCard[3].innerHTML = `Especial: ${card.special}`;
    PlayerCard[4].innerHTML = `Força: ${card.strength}`;
    PlayerCard[5].innerHTML = `Inteligência: ${card.intelligence}`;
  }
  
  function changeCardFutebol(card, cardChange) {
    const PlayerCard = document.querySelectorAll(`#${cardChange} > *`);
    PlayerCard[0].src = card.image;
    PlayerCard[1].innerHTML = card.name;
    PlayerCard[2].innerHTML = `Ritmo: ${card.pace}`;
    PlayerCard[3].innerHTML = `Finalização: ${card.shooting}`;
    PlayerCard[4].innerHTML = `Drible: ${card.dribbling}`;
    PlayerCard[5].innerHTML = `Fisico: ${card.physical}`;
  }