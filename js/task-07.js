// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input)
//  і змінює інлайн - стиль span#text, оновлюючи властивість font - size.
//  В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// const input = document.getElementById('font-size-control');
// const spanText = document.getElementById('text');
// або
const input = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');


spanText.style.fontSize = `${input.value}px`;

input.addEventListener('input', onInputFont);
// 2 вариант(работает при потере фокуса) подходит для чек-боксов и радио-баттон 
//  input.addEventListener('change', onInputFont);

function onInputFont(event) {
  spanText.style.fontSize = `${event.currentTarget.value}px`;
}
