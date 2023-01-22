// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const input = document.getElementById('validation-input');
// const inputAttributeLength = input.getAttribute('data-length'); або так
const inputAttributeLength = input.dataset.length;

 input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  if (String(event.target.value.length) === inputAttributeLength) {
    console.log(input.classList);
    input.classList.add('valid');
    input.classList.remove('invalid');
    return;
  }
  input.classList.remove('valid');
  input.classList.add('invalid');
}
