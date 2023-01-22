// Напиши скрипт, який:
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3
// Category: Animals
// Elements: 4
// Category: Products
// Elements: 3
// Category: Technologies
// Elements: 5
// ================================== кол-во категорий = кол-ву li с класом item =====================================

// // 1 вариант (за ID до батька  та його дітей)
// const elemLiItemsById = document.getElementById('categories');
// console.log('Number of categories:', elemLiItemsById.childElementCount);

// ===============================================================
// 2 вариант как масив елементов
const elemLiItems = document.querySelectorAll('.item');
console.log('Number of categories:', elemLiItems.length);
const arrayLi = elemLiItems.forEach((category) => {
  console.log('Category:', category.firstElementChild.textContent);
  console.log('Elements:', category.querySelectorAll('li').length);
});
