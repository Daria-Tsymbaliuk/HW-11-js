let time = 60; 
const timerEl = document.getElementById("timer");

const timerId = setInterval(() => {
  time--;

  timerEl.textContent = `Залишилось: ${time} хв`;

  if (time === 30) {
    alert("Залишилось менше половини часу! ╰(*°▽°*)╯");
  }

  if (time === 0) {
    clearInterval(timerId);
    alert("Час вийшов! ( •̀ ω •́ )✧");
  }
}, 60000); 