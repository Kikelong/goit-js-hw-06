const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ul = document.querySelector("#ingredients");

const listIngredients = ingredients.map((ingredient) => {
const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item_task02");
  return li;
});

ul.append(...listIngredients);


