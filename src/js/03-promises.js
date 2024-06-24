import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const handleSubmit = event => {
  event.preventDefault();
  const delay = Number(form.elements['delay'].value);
  const step = Number(form.elements['step'].value);
  const amount = Number(form.elements['amount'].value);

  for (let i = 0; i < amount; i++) {
    createPromise(i + 1, delay + step * i)
      .then(({ position, delay }) => {
        iziToast.success({
          title: 'Promise resolved',
          message: `✅ Fulfilled promise ${position} in ${delay}ms`,
        });
      })
      .catch(({ position, delay }) => {
        iziToast.error({
          title: 'Promise rejected',
          message: `❌ Rejected promise ${position} in ${delay}ms`,
        });
      });
  }
};

form.addEventListener('submit', handleSubmit);
