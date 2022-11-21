const gameContainer = document.querySelector(".container");
const allMoleItems = document.querySelectorAll(".item");
let startGame,
  startTime,
  countDown = 60,
  score = 0;

const sound = new Audio("/mole/audio/inecraft_death.wav");
const timeCount = document.getElementById("time-count");
const scoreCount = document.getElementById("score-count");
const cursor = document.querySelector(".cursor");


//Курсор
window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});
window.addEventListener("mousedown", () => {
  cursor.classList.add("active");
});
window.addEventListener("mouseup", () => {
  cursor.classList.remove("active");
});

gameContainer.onclick = function (event) {
  if (event.target.closest(".mole")) {
    score++;
    scoreCount.innerHTML = score;
    sound.play();
    const bushElement = event.target.parentElement.previousElementSibling;
    let textEl = document.createElement("span");
    textEl.setAttribute("class", "bam-text");
    textEl.innerHTML = "БАМ!";
    bushElement.appendChild(textEl);

    setTimeout(() => {
      textEl.remove();
    }, 700);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  //общее время игры 60 сек
  startTime = setInterval(() => {
    timeCount.innerHTML = countDown;
    countDown--;
  }, 1000);
  startGame = setInterval(() => {
    showMole();
  }, 700);
});

//крот виден

function showMole() {
  if (countDown < 0) {
    clearInterval(startGame);
    clearInterval(startTime);
    timeCount.innerHTML = "0";
    alert(`Количество заработаных очков: ${score}`);
  }
  let moleToApper = allMoleItems[getRandomValue()].querySelector(".mole");

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
