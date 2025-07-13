
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = parseInt(prompt("1)Rock 2)Paper 3)Scissors \n"));
    return humanChoice;
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === 1 && computerChoice === 2) {
            console.log("You lose! Paper beats Rock");
            computerScore += 1;
        }
        else if (humanChoice === 2 && computerChoice === 3) {
            console.log("You lose! Scissors beats Rock");
            computerScore += 1;
        }
        else if (humanChoice === 3 && computerChoice === 1) {
            console.log("You lose! Rock beats Scissors");
            computerScore += 1;
        }
        else if (computerChoice === 1 && humanChoice === 2) {
            console.log("You win! Paper beats Rock");
            humanScore += 1;
        }
        else if (computerChoice === 2 && humanChoice === 3) {
            console.log("You win! Scissors beats Rock");
            humanScore += 1;
        }
        else if (computerChoice === 3 && humanChoice === 1) {
            console.log("You win! Rock beats Scissors");
            humanScore += 1;
        }
        else if ( computerChoice == humanChoice) {
            console.log("Draw")
        }
    }
    
    for(let i = 1; i <= 5; i++ ) {
        let round = i;
        console.log(`\nRound ${round}`);
        playRound(getHumanChoice(), getComputerChoice());
    }
    
    console.log("\nFinal Results");

    if (humanScore > computerScore) {
        console.log("You Won");
    }
    else if (computerScore > humanScore) {
        console.log("You Lose");
    }
    else {
        console.log("Draw");
    }
    
}

playGame();