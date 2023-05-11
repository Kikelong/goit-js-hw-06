
const counter = document.getElementById("counter");
const counterValue = document.getElementById("value");
const incrementBtn = counter.querySelector('[data-action="increment"]');
const decrementBtn = counter.querySelector('[data-action="decrement"]');


let count = 0;
counterValue.textContent = count;


incrementBtn.addEventListener("click", () => {
  count++;
  counterValue.textContent = count;
});

decrementBtn.addEventListener("click", () => {
  count--;
  counterValue.textContent = count;
});