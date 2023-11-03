const buttons = document.querySelectorAll("button");
const resultEl = document.getElementById("result");
const playerScoreEl = document.getElementById("user-score");
const conputerScoreEl = document.getElementById("computer-score");

let playerScore = 0;
let conputerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerPlay());
    resultEl.textContent = result;
  });
});

const computerPlay = () => {
  const choices = ["rock", "paper", "scissors"];
  const ramdomChoice = Math.floor(Math.random() * choices.length);
  return choices[ramdomChoice];
};

const playRound = (playerSelection, computerSelecion) => {
  if (playerSelection === computerSelecion) {
    return "It's a tie";
  } else if (
    (playerSelection === "rock" && computerSelecion === "scissors") ||
    (playerSelection === "paper" && computerSelecion === "rock") ||
    (playerSelection === "scissors" && computerSelecion === "paper")
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return "You win! " + playerSelection + " beats " + computerSelecion;
  } else {
    conputerScore++;
    conputerScoreEl.textContent = conputerScore;
    return "You lose! " + computerSelecion + " beats " + playerSelection;
  }
};
