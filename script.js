function getRandomComputerResult() {
  const options = ["Piedra", "Papel", "Tijeras"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Piedra" && computer === "Tijeras") ||
    (player === "Tijeras" && computer === "Papel") ||
    (player === "Papel" && computer === "Piedra")
  );
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `¡Gana Jugador! ${userOption} vence ${computerResult}`;
  } else if (computerResult === userOption) {
    return `Empate! Ambos eligieron: ${userOption}`;
  } else {
    computerScore++;
    return `¡Gana Computadora! ${computerResult} vence ${userOption}`;
  }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;

  if (playerScore === 3 || computerScore === 3) {
    winnerMsgElement.innerText = `${
      playerScore === 3 ? "¡Jugador" : "¡Computadora"
    } ganó el juego!`;

    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }

};
function resetGame() {
 playerScore = 0;
  computerScore = 0;
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  winnerMsgElement.innerText = "";
  roundResultsMsg.innerText = "";
  optionsContainer.style.display = "block";
  resetGameBtn.style.display = "none";
};

resetGameBtn.addEventListener("click", resetGame);

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
  showResults("Piedra");
});

paperBtn.addEventListener("click", function () {
  showResults("Papel");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Tijeras");
});
