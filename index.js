document.querySelector('#rc').addEventListener('click', () => {
    playGame('rock');

})

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {

        playGame('rock');
    }
    if (event.key === 'p') {

        playGame('paper');
    }
    if (event.key === 's') {

        playGame('scissors');
    }
});

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

function playGame(playerMove) {

    function pickComputerMove() {
        const randomNumber = Math.random();

        let computerMove = '';

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
            computerMove = 'rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
            computerMove = 'paper';
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
            computerMove = 'scissors';
        }

        return computerMove;
    }
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose.';
        } else if (computerMove === 'paper') {
            result = 'You win.';
        } else if (computerMove === 'scissors') {
            result = 'Tie.';
        }

    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win.';
        } else if (computerMove === 'paper') {
            result = 'Tie.';
        } else if (computerMove === 'scissors') {
            result = 'You lose.';
        }

    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie.';
        } else if (computerMove === 'paper') {
            result = 'You lose.';
        } else if (computerMove === 'scissors') {
            result = 'You win.';
        }
    }

    if (result === 'You win.') {
        score.wins += 1;
    } else if (result === 'You lose.') {
        score.losses += 1;
    } else if (result === 'Tie.') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.posi').innerHTML = ` You  <img src="/photos/${playerMove}-emoji.png"class="move-icon" alt=" ${playerMove}">  ||  <img src="/photos/${computerMove}-emoji.png"class="move-icon" alt=" ${computerMove}"> Computer <br><br>`;
    document.querySelector('#winLo').innerHTML = `  ${result} <br> <br>Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;


}
function reset() {
    document.querySelector('#winLo').innerHTML = 'Wins: 0, Losses: 0, Ties: 0';

}