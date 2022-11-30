import { Notify } from 'notiflix/build/notiflix-notify-aio';
const form = document.querySelector('.form');
form.addEventListener('submit', onSubmitForm);



function onSubmitForm (eve) {
  eve.preventDefault()
  const amountValue = parseInt(eve.currentTarget.amount.value);
  const stepVal = parseInt(eve.currentTarget.step.value);
let delayVal = parseInt(eve.currentTarget.delay.value);
 

  for (let position = 1; position <= amountValue; position += 1){
    let delay = delayVal += position === 1 ? 0 : stepVal;
  createPromise({ position, delay })

  .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  },)
  .catch(({ position, delay }) => {
   Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  },)
  }  
} 


function createPromise({ position, delay }) {
  
  const shouldResolve = Math.random() > 0.3;
 return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  })
 
};
