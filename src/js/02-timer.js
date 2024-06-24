import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const uiDays = document.querySelector('[data-days]');
const uiHours = document.querySelector('[data-hours]');
const uiMinutes = document.querySelector('[data-minutes]');
const uiSeconds = document.querySelector('[data-seconds]');
const btnStart = document.querySelector('[data-start]');

let intervalId = null;
let targetDate = null;

btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const dateSelected = new Date(selectedDates[0]);
    const now = new Date();
    const dateNow = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      now.getHours(),
      now.getMinutes()
    );
    if (dateSelected <= dateNow) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight',
      });
      btnStart.disabled = true;
      return;
    }
    if (intervalId) {
      clearInterval(intervalId);
    }
    targetDate = dateSelected;
    btnStart.disabled = false;
  },
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const timer = () => {
  const currentDate = new Date();
  const deltaTime = targetDate - currentDate;
  if (deltaTime <= 0) {
    iziToast.success({
      title: 'Success',
      message: 'Time is up!',
      position: 'topRight',
    });
    clearInterval(intervalId);
    return;
  }
  const { days, hours, minutes, seconds } = convertMs(deltaTime);
  uiDays.textContent = days.toString().padStart(2, '0');
  uiHours.textContent = hours.toString().padStart(2, '0');
  uiMinutes.textContent = minutes.toString().padStart(2, '0');
  uiSeconds.textContent = seconds.toString().padStart(2, '0');
};

btnStart.addEventListener('click', () => {
  intervalId = setInterval(timer, 1000);
});

flatpickr('#datetime-picker', options);
