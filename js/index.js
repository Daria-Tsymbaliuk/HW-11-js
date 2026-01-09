const timeEl = document.querySelector(".time");
const startBtn = document.querySelector(".start");

let time = 30000; // 30 секунд у мс
let timerId = null;
let isRunning = false;

function startTimer() {
  if (isRunning) return;

  isRunning = true;
  time = 30000;
  startBtn.disabled = true;
  timeEl.classList.remove("warning");

  timerId = setInterval(() => {
    time -= 10;

    if (time <= 10000) {
      timeEl.classList.add("warning");
    }

    if (time <= 0) {
      clearInterval(timerId);
      isRunning = false;
      startBtn.disabled = false;
      timeEl.textContent = "time: 0.00";
      return;
    }

    timeEl.textContent = `time: ${(time / 1000).toFixed(2)}`;
  }, 10);
}

startBtn.addEventListener("click", startTimer);
