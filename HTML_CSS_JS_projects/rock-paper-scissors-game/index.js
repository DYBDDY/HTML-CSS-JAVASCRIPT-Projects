const buttons = document.querySelectorAll("button");
const result_show = document.getElementById("result");
const playerscore_show = document.getElementById("player-score");
const computerscore_show = document.getElementById("computer-score");

let playerscore = 0;
let computerscore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = eachRound(button.id, computerPlay());
    result_show.textContent = result;
  });
});

function computerPlay() {
  const move = ["rock", "paper", "scissors"];
  const randomchoice = Math.floor(Math.random() * move.length);
  return move[randomchoice];
}

function eachRound(playerselect, computerselect) {
  if (playerselect == computerselect) {
    return "Draw";
  } else if (
    (playerselect === "rock" && computerselect === "scissors") ||
    (playerselect === "paper" && computerselect === "rock") ||
    (playerselect === "scissors" && computerselect === "paper")
  ) {
    playerscore++;
    playerscore_show.textContent = playerscore;
    return "You Win ~" + playerselect + " destroyed ~" + computerselect;
  } else {
    computerscore++;
    computerscore_show.textContent = computerscore;
    return "You Lose loser ~" + computerselect + " annihilate " + playerselect;
  }
}
