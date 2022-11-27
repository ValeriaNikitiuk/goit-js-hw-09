
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};


btnStart.addEventListener("click", () => {
  timerId = setInterval(() => {
    bgColor(getRandomHexColor());   
  }, 1000);
  btnStart.setAttribute('disabled', true);
   btnStop.removeAttribute('disabled');
});

function bgColor(color) {
  document.body.style.backgroundColor = color;
}


btnStop.addEventListener("click", () => {
  clearInterval(timerId);
  console.log(`Фон зупинено `);
   btnStart.removeAttribute('disabled');
 btnStop.setAttribute('disabled', true);
});
