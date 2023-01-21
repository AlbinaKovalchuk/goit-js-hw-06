const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
// Напиши скрипт, який для кожного елемента масиву ingredients:
// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


const ingredientsContainerEl = document.getElementById('ingredients');

const arrayLi = ingredients.map((ingredient) => {
  const elemLi = document.createElement('li');
  elemLi.textContent = ingredient;
  elemLi.classList.add('item');
  return elemLi;
});

ingredientsContainerEl.append(... arrayLi);