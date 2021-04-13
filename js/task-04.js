let counterValue = 0;

const incrementBtn = document.querySelector('.js-increment');
const decrementBtn = document.querySelector('.js-decrement');
const clearBtn = document.querySelector('.js-reset');
const valueEL = document.querySelector('.js-value');

const decrement = () => {
  counterValue -= 1;
  valueEL.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  valueEL.textContent = counterValue;
};

const reset = () => {
  counterValue = 0;
  valueEL.textContent = counterValue;
};

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
clearBtn.addEventListener('click', reset);
