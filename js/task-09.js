// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль
//  по кліку на button.change - color і виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnChangeColor = document.querySelector('.change-color');
const spanText = document.querySelector('.color');
const bodyElem =document.body

// console.log(btnChangeColor);
// console.log(spanText.textContent);

btnChangeColor.addEventListener('click', onChangeColor);

function onChangeColor(event) {
  bodyElem.style.background = getRandomHexColor();
  spanText.textContent = `${bodyElem.style.background}`;
  console.log(bodyElem.style.background);
}
