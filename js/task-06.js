const inputTextEl = document.querySelector('#validation-input');

inputTextEl.addEventListener('blur', () => {
  inputTextEl.value.length === Number(inputTextEl.dataset.length) ?
    inputTextEl.classList.add('valid') :
    inputTextEl.classList.add('invalid');
});

inputTextEl.addEventListener('focus', () => {
  inputTextEl.classList.remove('valid');
  inputTextEl.classList.remove('invalid');
});