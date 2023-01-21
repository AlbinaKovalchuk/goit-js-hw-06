// Напиши скрипт створення і очищення колекції елементів.
//  Користувач вводить кількість елементів в input і натискає кнопку Створити,
//  після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.
// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
//  Використовуй готову функцію getRandomHexColor для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
// у такий спосіб видаляючи всі створені елементи.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// const divContainerBox = document.getElementById('boxes');
// const btnCreateBox = document.querySelector('[data-create]');
// const btnDestroyBox = document.querySelector('[data-destroy]');

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// btnCreateBox.addEventListener('click', onCreateBoxes);
// btnDestroyBox.addEventListener('click', onDestroyBoxes);

// function onCreateBoxes(amount) {
//   // for (let i = 0; i < amount; i += 1) {
//     const elemDiv = document.createElement('div');
//     elemDiv.style.width = '30px';
//     elemDiv.style.height = '30px';
//     elemDiv.style.backgroundColor = getRandomHexColor();
//     console.log(elemDiv);
//     console.log(divContainerBox);
//     divContainerBox.append(elemDiv);
//     console.log(elemDiv);
//     console.log(divContainerBox);
//   // }

//   // console.log(elemDiv);

//   // console.log(divContainerBox);
// }

// function onDestroyBoxes() {
//   divContainerBox.innerHTML = '';
// }
