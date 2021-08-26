window.addEventListener("DOMContentLoaded", start);

const rndChoice = ["rock", "paper", "scissors"];
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const lose = document.querySelector("#lose");
const draw = document.querySelector("#draw");
const win = document.querySelector("#win");
function start() {
  console.log("start");
  getPlayerChoice();
}

function getPlayerChoice() {
  console.log("getPlayerChoice");
  rockBtn.addEventListener("click", function () {
    makeRandomComputerChoice("rock");
    clearTxt();
  });
  paperBtn.addEventListener("click", function () {
    makeRandomComputerChoice("paper");
    clearTxt();
  });
  scissorsBtn.addEventListener("click", function () {
    makeRandomComputerChoice("scissors");
    clearTxt();
  });
}

function makeRandomComputerChoice(userChoice) {
  console.log("makeRandomComputerChoice");
  console.log(userChoice);
  const rnd = Math.floor(Math.random() * rndChoice.length);
  console.log(rnd, rndChoice[rnd]);
  showAnimation(userChoice, rndChoice[rnd]);
}

function showAnimation(userChoice, computerChoice) {
  console.log("showAnimation");
  player1.classList.add("shake");
  player2.classList.add("shake");
  window.setTimeout(function () {
    player1.classList.add(userChoice);
    player2.classList.add(computerChoice);
    player1.classList.remove("shake");
    player2.classList.remove("shake");
    determineWinner(userChoice, computerChoice);
  }, 1800);
}

function determineWinner(userChoice, computerChoice) {
  console.log("determineWinner");
  if (userChoice === computerChoice) {
    showTie();
  } else {
    switch (userChoice) {
      case "rock":
        if (computerChoice === "paper") {
          showLose();
        } else {
          showWin();
        }
        break;
      case "paper":
        if (computerChoice === "rock") {
          showWin();
        } else {
          showLose();
        }
        break;
      case "scissors":
        if (computerChoice === "paper") {
          showWin();
        } else {
          showLose();
        }
        break;
    }
  }
}
function showWin() {
  console.log("showWin");
  win.classList.remove("hidden");
}
function showTie() {
  console.log("showTie");
  draw.classList.remove("hidden");
}
function showLose() {
  console.log("showLose");
  lose.classList.remove("hidden");
}
function clearTxt() {
  lose.classList.add("hidden");
  win.classList.add("hidden");
  draw.classList.add("hidden");
  player2.classList.remove("paper", "scissors");
  player1.classList.remove("paper", "scissors");
}
