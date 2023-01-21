// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника
// та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

// const container = document.querySelector('.js-container');
// container.addEventListener('click', onClick)
// function onClick(event) {
//     // клик не на кнопці ігнорується
//     if (event.target.nodeName !== 'BUTTON') { return; }
//     console.log(event.target.textContent);
// }

const btnDecrement = document.querySelector('[data-action=decrement]');
const btnIncrement = document.querySelector('[data-action=increment]');
const value = document.getElementById('value'); // текст счетчика
let counterValue = 0; // счетчик

btnDecrement.addEventListener('click', (event) => {
  counterValue -= 1;
  value.textContent = counterValue;
});
btnIncrement.addEventListener('click', (event) => {
  counterValue += 1;
  value.textContent = counterValue;
});
