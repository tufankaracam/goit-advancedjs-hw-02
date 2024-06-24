const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

document.addEventListener('DOMContentLoaded', () => {
  btnStop.disabled = true;
});

let interval = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const intervalToggle = () => {
  if (interval) {
    clearInterval(interval);
    interval = null;
    btnStart.disabled = false;
    btnStop.disabled = true;
  } else {
    interval = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    btnStart.disabled = true;
    btnStop.disabled = false;
  }
};

btnStart.addEventListener('click', intervalToggle);
btnStop.addEventListener('click', intervalToggle);
