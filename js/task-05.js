// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
//  підставляє його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const ref = {
  input: document.getElementById('name-input'), // поле ввода
  output: document.getElementById('name-output'), // текст спана
};

ref.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value !== '') {
    ref.output.textContent = event.currentTarget.value;
    return;
  }
    ref.output.textContent = 'Anonymous';
}
