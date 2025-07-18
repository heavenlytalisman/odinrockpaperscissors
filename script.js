let humanScore = 0;
let computerScore = 0;
let gameOver = false;

let resultDiv = document.getElementById("result");
let scoreDiv = document.getElementById("score");


function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    return computerChoice;
}

function getChoiceName(choice) {
    return ["Rock", "Paper", "Scissors"][choice - 1];
}

function playRound(humanChoice, computerChoice) {

    if (gameOver) return;

    let result = `You chose ${getChoiceName(humanChoice)}, Computer chose ${getChoiceName(computerChoice)}. `;

    if (humanChoice === 1 && computerChoice === 2) {
        result += "You lose this round! Paper beats Rock";
        computerScore ++;
    }
    else if (humanChoice === 2 && computerChoice === 3) {
        result += "You lose this round! Scissors beats Rock";
        computerScore ++;
    }
    else if (humanChoice === 3 && computerChoice === 1) {
        result += "You lose this round! Rock beats Scissors";
        computerScore ++;
    }
    else if (computerChoice === 1 && humanChoice === 2) {
        result += "You win this round! Paper beats Rock";
        humanScore ++;
    }
    else if (computerChoice === 2 && humanChoice === 3) {
        result += "You win this round! Scissors beats Rock";
        humanScore ++;
    }
    else if (computerChoice === 3 && humanChoice === 1) {
        result += "You win this round! Rock beats Scissors";
        humanScore ++;
    }
    else if ( computerChoice == humanChoice) {
        result += "Draw";
    }

    resultDiv.textContent = result;
    scoreDiv.textContent = `Player : ${humanScore} \nComputer : ${computerScore}`;

    checkWinner();

}

function checkWinner() {
    if (humanScore == 5 || computerScore == 5) {
        gameOver = true;

        const finalResult = humanScore == 5 ? "Player won the game!" : "Player lost the game!";
        
        const winnerPopup = document.createElement("h1");
        winnerPopup.textContent = finalResult;
        winnerPopup.style.color = humanScore == 5 ? "green" : "red";
        resultDiv.appendChild(document.createElement("br"));
        resultDiv.appendChild(winnerPopup);

        document.querySelectorAll("button").forEach(btn => btn.disabled = true);
    }
}


// UI

const pressedRock = document.querySelector(".rock");
pressedRock.addEventListener("click", () => {
    humanChoice = 1;
    playRound(humanChoice,getComputerChoice());
});

const pressedPaper = document.querySelector(".paper");
pressedPaper.addEventListener("click", () => {
    humanChoice = 2;
    playRound(humanChoice,getComputerChoice());
});

const pressedScissors = document.querySelector(".scissors");
pressedScissors.addEventListener("click", () => {
    humanChoice = 3;
    playRound(humanChoice,getComputerChoice());
});