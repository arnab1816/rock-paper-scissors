// getting computer choice using Random Function
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice = "";
    if (randomNumber == 1) {
        computerChoice = "Rock";
    }
    else if (randomNumber == 2) {
        computerChoice = "Paper";
    }
    else {
        computerChoice = "Scissors";
    }
    return computerChoice;
}
// deciding what will be the result for each particular round
function decider(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        tie(playerChoice, computerChoice);
    }
    if (playerChoice == "Scissors") {
        if (computerChoice == "Paper") {
            win(playerChoice, computerChoice);
        } else if (computerChoice == "Rock") {
            lose(playerChoice, computerChoice);
        }
    } else if (playerChoice == "Rock") {
        if (computerChoice == "Scissors") {
            win(playerChoice, computerChoice);
        } else if (computerChoice == "Paper") {
            lose(playerChoice, computerChoice);
        }
    }
    else if (playerChoice == "Paper") {
        if (computerChoice == "Rock") {
            win(playerChoice, computerChoice);
        } else if (computerChoice == "Scissors") {
            lose(playerChoice, computerChoice);
        }
    }
}
// for tie round
function tie(playerChoice, computerChoice) {
    document.querySelector("h2.sub-heading").innerText = "It's a tie!";
    document.querySelector("h3.sub-heading").innerText = `${playerChoice} ties with ${computerChoice}`;
}
// when player wins 
function win(playerChoice, computerChoice) {
    let playerScore = document.querySelector(".player-score").innerText;
    playerScore = parseInt(playerScore) + 1;
    document.querySelector(".player-score").innerText = playerScore;
    document.querySelector("h2.sub-heading").innerText = "You won!";
    document.querySelector("h3.sub-heading").innerText = `${playerChoice} beats ${computerChoice}`;
    if (playerScore == 5) {
        gameOver(true);
    }
}
// when player loses
function lose(playerChoice, computerChoice) {
    let computerScore = document.querySelector(".computer-score").innerText;
    computerScore = parseInt(computerScore) + 1;
    document.querySelector(".computer-score").innerText = computerScore;
    document.querySelector("h2.sub-heading").innerText = "You lost!";
    document.querySelector("h3.sub-heading").innerText = `${playerChoice} is sbeaten by ${computerChoice}`;
    if (computerScore == 5) {
        gameOver(false);
    }
}
// when player or computer complete 5 points 
function gameOver(flag) {
    document.querySelector(".modal").style.display = "block";
    document.querySelector(".main").classList.add("main-temp");
    document.querySelector(".modal-btn").addEventListener("click", () => {
        window.location.reload();
    });
    if (flag) {
        document.querySelector(".modal-heading").innerText = "Congratulation!!!You Won";
        document.querySelector(".modal-btn").innerText = "Play Again";
    }
    else {
        document.querySelector(".modal-heading").innerText = "Game Over!!!You Lost";
        document.querySelector(".modal-btn").innerText = "Try Again";
    }
}
// adding event listener in each button 
let length = document.querySelectorAll(".btn").length;
for (let i = 0; i < length; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
        let playerChoice = this.innerText;
        let computerChoice = getComputerChoice();
        document.querySelector(".player").setAttribute("src", `Images/${playerChoice}.png`);
        document.querySelector(".computer").setAttribute("src", `Images/${computerChoice}.png`);
        decider(playerChoice, computerChoice);
    });
}