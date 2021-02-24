const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const createLiElement = (ingredient) => {
    const li = document.createElement('li')
    li.textContent = ingredient
    return li
};

const ingredientsLiItems = ingredients.map(createLiElement);

const ingredientsEl = document.querySelector('#ingredients');

ingredientsEl.append(...ingredientsLiItems);