import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputDateTime = document.querySelector('#datetime-picker');
const buttonStartCount = document.querySelector('[data-start]');
const daysSpanValue = document.querySelector('[data-days]');
const hoursSpanValue = document.querySelector('[data-hours]');
const minutesSpanValue = document.querySelector('[data-minutes]');
const secondsSpanValue = document.querySelector('[data-seconds]');
let timer = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      buttonStartCount.disabled = true;
      window.alert('Wybierz datę z przyszłości!');
    } else {
      buttonStartCount.disabled = false;
    }
  },
};

buttonStartCount.disabled = true;

flatpickr(inputDateTime, options);

buttonStartCount.addEventListener('click', buttonStartClick);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function buttonStartClick() {
  buttonStartCount.disabled = true;
  inputDateTime.disabled = true;

  timer = setInterval(() => {
    const pickedDate = new Date(inputDateTime.value);
    const timeLeft = pickedDate - Date.now();
    const { days, hours, minutes, seconds } = convertMs(timeLeft);
    console.log(convertMs(timeLeft));
    console.log(seconds);
    console.log(addLeadingZero(seconds));

    daysSpanValue.textContent = addLeadingZero(days);
    hoursSpanValue.textContent = addLeadingZero(hours);
    minutesSpanValue.textContent = addLeadingZero(minutes);
    secondsSpanValue.textContent = addLeadingZero(seconds);

    if (timeLeft < 1000) {
      clearInterval(timer);
      inputDateTime.disabled = false;
    }
  }, 1000);
}

function addLeadingZero(str) {
  return `${str}`.padStart(2, '0');
}
