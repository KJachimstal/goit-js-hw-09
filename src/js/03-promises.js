import Notiflix, { Notify } from 'notiflix';

const firstDelay = document.querySelector('[name="delay"]');
const delayStep = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');
const submitCreatePromises = document.querySelector('[type="submit"]');

submitCreatePromises.addEventListener('click', handleSubmitForm);

function handleSubmitForm(event) {
  event.preventDefault();

  if (firstDelay.value < 0 || delayStep.value < 0 || amount.value < 0) {
    Notify.failure('Wprowadź wartości większe lub równe zero!');
    return;
  }

  for (let i = 0; i < amount.value; i++) {
    let position = i + 1;
    let countDelay = Number(firstDelay.value) + Number(delayStep.value) * i;

    createPromise(position, countDelay)
      .then((position, delay) => {
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch((position, delay) => {
        Notify.failure(`Fulfilled promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(position, delay);
      } else {
        reject(position, delay);
      }
    }, delay);
  });
}
