const URL = "http://localhost:3000/players";


document.addEventListener("DOMContentLoaded", () => {
    getScore();
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

function getScore() {
    const urlParams = new URLSearchParams(location.search);
    let ScoreLastPlay = urlParams.get("score") || 0;
    let elementScore = document.querySelector('.score');
    elementScore.innerHTML = `Score: ${ScoreLastPlay}`;
}

async function savePlayerStatus(url) {
    const urlParams = new URLSearchParams(location.search);
    let ScoreLastPlay = urlParams.get("score");
    let nickname = urlParams.get("nickname");

    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    }

    const fetchResponse = await fetch(url, settings);

}


