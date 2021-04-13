const numberInputEl = document.querySelector('#controls input');
const createBoxesButtonEl = document.querySelector('[data-action="render"]');
const destroyBoxesButtonEl = document.querySelector('[data-action="destroy"]');
const boxesContainerEl = document.querySelector('#boxes');

numberInputEl.value = 0;

const createBoxes = (amount) => {
  if (amount === 0) return;
  const tempBoxes = [];
  for (let i = 0; i < amount; i += 1)
  {
    tempBoxes[i] = document.createElement('div');
    tempBoxes[i].style.backgroundColor = `rgb(${Math.round(Math.random() * 255)}, 
      ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
    tempBoxes[i].style.margin = '5px';
    tempBoxes[i].style.width = `${30 + 10 * i}px`;
    tempBoxes[i].style.height = `${30 + 10 * i}px`;
  };
  boxesContainerEl.append(...tempBoxes); 
};

const destroyBoxes = () => {
  boxesContainerEl.innerHTML = '';
};

createBoxesButtonEl.addEventListener('click', () => {
  createBoxes(numberInputEl.value);
});

destroyBoxesButtonEl.addEventListener('click', () => {
  destroyBoxes();
});