const URL = "http://localhost:3000/players";


document.addEventListener("DOMContentLoaded", () => {
    showScore(URL);
});

async function showScore(url) {
    const response = await fetch(url); 
    const players = await response.json();

    for(let i = 0; i < players.length; i++){
        let elements = document.querySelectorAll(`.jogador${i + 1} > *`);
        elements[1].innerHTML = players[i].nickname;
        elements[2].innerHTML = players[i].score;
    }
}



