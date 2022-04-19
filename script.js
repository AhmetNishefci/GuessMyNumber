"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = (msg) => {
  document.querySelector(".message").textContent = msg;
};

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    displayMessage("⛔ No Number!");
  } else if (guess === secretNumber) {
    displayMessage("✅ Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = "🎉" + secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      let highLow = guess > secretNumber ? "📈 Too High!" : "📉 Too Low!";
      score--;
      displayMessage(highLow);
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💀 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }

  document.querySelector(".again").addEventListener("click", () => {
    score = 20;
    document.querySelector("body").style.backgroundColor = "#222";
    displayMessage("Start guessing...");
    document.querySelector(".score").textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".guess").value = null;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".number").style.width = "12rem";
  });
});
