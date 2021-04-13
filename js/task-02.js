const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListEl = document.querySelector('#ingredients');

ingredientsListEl.append(...ingredients.map(ingredient => {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = ingredient;
  return ingredientEl;
}));