//  secretNumber

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
let highscore = 0;

// display Message function

const displayMessage = function (message) {
  document.querySelector(".message-box").textContent = message;
};

document.querySelector(".check-btn").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage("Please Enter A Number!");
    document.querySelector(".message-box").style.color = "red";
  } else if (guess === secretNumber) {
    displayMessage("Correct Answer!");
    document.querySelector(".number-box").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".message-box").style.color = "red";
    // Highscore Add
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    // Score Add
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈To High!" : "📉To Low!");
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message-box").style.color = "red";
    } else {
      displayMessage("You Lost The Game Batter Luck Nest Time!");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "Red";
      document.querySelector(".welcome-text").style.color = "yellow";
    }
  }
});
// Again btn

document.querySelector(".again-btn").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("🤔Start Guessing!..");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number-box").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#ffffed";
  document.querySelector(".guess").textContent = "";
  document.querySelector(".message-box").style.color = "#000000";
});
