const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
let intervalId = null;

// Funcție pentru generarea unei culori random
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

// Eveniment pentru Start
startBtn.addEventListener("click", () => {
  // Dezactivăm butonul Start și activăm Stop
  startBtn.disabled = true;
  stopBtn.disabled = false;

  // Schimbăm culoarea de fundal la fiecare secundă
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

// Eveniment pentru Stop
stopBtn.addEventListener("click", () => {
  // Oprim schimbarea culorii și activăm Start-ul
  clearInterval(intervalId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
});

// Dezactivăm butonul Stop la început
stopBtn.disabled = true;

