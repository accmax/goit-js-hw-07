const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

const onInputChange = () => {
    if (inputRef.value !== '') {
        outputRef.textContent = inputRef.value
    }
    else outputRef.textContent = 'незнакомец'
};

inputRef.addEventListener('input', onInputChange);
  