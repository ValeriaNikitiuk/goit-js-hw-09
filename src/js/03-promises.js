import { Notify } from 'notiflix/build/notiflix-notify-aio';
const form = document.querySelector('.form');
form.addEventListener('submit', onSubmitForm);

 

function onSubmitForm (eve) {
  eve.preventDefault()
  const amountValue = Number(eve.currentTarget.amount.value);

  for (let position = 0; position <= amountValue; position += 1){

createPromise(2, 1500)
  .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
   Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });}}


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
