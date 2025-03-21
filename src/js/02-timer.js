import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

const datePicker = document.querySelector("#datetime-picker");
const startButton = document.querySelector("[data-start]");
const daysEl = document.querySelector("[data-days]");
const hoursEl = document.querySelector("[data-hours]");
const minutesEl = document.querySelector("[data-minutes]");
const secondsEl = document.querySelector("[data-seconds]");

let selectedDate = null;
let intervalId = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < new Date()) {
            Notiflix.Notify.failure("Please choose a date in the future.");
            startButton.disabled = true;
        } else {
            selectedDate = selectedDates[0];
            startButton.disabled = false;
        }
    },
};

flatpickr(datePicker, options);

startButton.addEventListener("click", startCountdown);

function startCountdown() {
    startButton.disabled = true;
    datePicker.disabled = true;

    intervalId = setInterval(() => {
        const currentTime = new Date();
        const timeLeft = selectedDate - currentTime;

        if (timeLeft <= 0) {
            clearInterval(intervalId);
            Notiflix.Notify.success("Time's up!");
            return;
        }

        const { days, hours, minutes, seconds } = convertMs(timeLeft);

        daysEl.textContent = addLeadingZero(days);
        hoursEl.textContent = addLeadingZero(hours);
        minutesEl.textContent = addLeadingZero(minutes);
        secondsEl.textContent = addLeadingZero(seconds);
    }, 1000);
}

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

function addLeadingZero(value) {
    return String(value).padStart(2, "0");
}
