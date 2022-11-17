const gameContainer = document.querySelector(".container");

const allMoleItems = document.querySelectorAll(".item");
let startGame,
  startTime,
  countDown = 60,
  score = 0;

const timeCount = document.getElementById("time-count");
const scoreCount = document.getElementById("score-count");

gameContainer.addEventListener("click", function (event) {
  if (event.target.closest(".mole")) {
    score++;
    scoreCount.innerHTML = score;

    const bushElement = event.target.parentElement.previousElementSibling;
    let textEl = document.createElement("span");
    textEl.setAttribute("class", "bam-text");
    textEl.innerHTML = "БАМ!";
    bushElement.appendChild(textEl);
    setTimeout(() => {
      textEl.remove();
    }, 600);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  //общее время игры 60 сек
  startTime = setInterval(() => {
    timeCount.innerHTML = countDown;
    countDown--;
  }, 1000);
  startGame = setInterval(() => {
    showMole();
  }, 600);
});

//крот виден
function showMole() {
  if (countDown <= 0) {
    clearInterval(startGame);
    clearInterval(startTime);
    timeCount.innerHTML = "0";
  }
  let moleToApper = allMoleItems[getRandomValue()].querySelector(".mole");
  console.log(moleToApper);

  moleToApper.classList.add("mole-appear");
  hideMole(moleToApper);
}

function getRandomValue() {
  let rand = Math.random() * allMoleItems.length;
  return Math.floor(rand);
}

//крот спрятан
function hideMole(moleItem) {
  setTimeout(() => {
    moleItem.classList.remove("mole-appear");
  }, 1500);
}
