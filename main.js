var rn;
let score = 0;
const bubbles = document.querySelector("#pbtm");
const timerValue = document.querySelector("#timervalue");
let running = false;

function makeBubble() {
  var clutter = "";
  for (var i = 1; i <= 160; i++) {
    rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  bubbles.innerHTML = clutter;
}
var timer = 60;
function runTimer() {
  var timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      timerValue.textContent = timer;
    } else {
      clearInterval(timerInt);
      running = false;
      bubbles.textContent = `Game Over!,
        Your Score is ${score}`;
    }
  }, 1000);
}
function hitValue() {
  rn = Math.floor(Math.random() * 10);
  document.querySelector("#hitnum").innerHTML = rn;
}
function scoreUpdate() {
  score += 10;
  document.querySelector("#scoreValue").innerHTML = score;
}

bubbles.addEventListener("click", function (dets) {
  if (Number(dets.target.innerHTML) === rn) {
    scoreUpdate();
    makeBubble();
    hitValue();
  }
});
const button = document.querySelector("#startbtn");

button.addEventListener("click", function () {
  if (!running) {
    score = 0;
    timer = 60;
    makeBubble();
    hitValue();
    runTimer();
    running = true;
  }
});
