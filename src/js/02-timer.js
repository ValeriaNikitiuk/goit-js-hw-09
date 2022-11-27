import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const ref = {
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button'),
  spanDays: document.querySelector('[data-days]'),
  spanHours: document.querySelector('[data-hours]'),
  spanMinutes: document.querySelector('[data-minutes]'),
  spanSeconds: document.querySelector('[data-seconds]'),
};


function pad(value) {
  return String(value).padStart(2, '0');
};




const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < new Date()) {
      ref.startBtn.disabled = true;
      window.alert("Будь ласка, виберіть дату в майбутньому")
    } else {
      ref.startBtn.disabled = false
      ref.startBtn.addEventListener("click", () => timerChanges())
    }
    
  },
};

flatpickr(ref.input, options);

// function onTimerValues({ days, hours, minutes, seconds }){
//   ref.spanDays.textContent = days;
//   ref.spanHours.textContent = hours;
//   ref.spanMinutes.textContent = minutes;
//   ref.spanSeconds.textContent = seconds; }
function timerChanges(){
let timer = setInterval(() => {
  let timerDown = new Date(ref.input.value) - new Date();
  ref.startBtn.disabled = true;
  ref.input.disabled = true;
  console.log(timerDown);
  if (timerDown >= 0) {
    let dataTimer = convertMs(timerDown);
    ref.spanDays.textContent = dataTimer.days;
    ref.spanHours.textContent = dataTimer.hours;
    ref.spanMinutes.textContent = dataTimer.minutes;
    ref.spanSeconds.textContent = dataTimer.seconds
  } else
    clearInterval(timer);
}, 1000); }
  


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

 

  
  
  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
   const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
  return { days, hours, minutes, seconds };
}



  
  
console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}




  
