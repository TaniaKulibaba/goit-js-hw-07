const resultEl = document.querySelector('#value');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');
const decrementBtnEl = document.querySelector('button[data-action="decrement"]');


incrementBtnEl.addEventListener('click', increment);
decrementBtnEl.addEventListener('click', decrement);

function increment() {
    const currentValue = Number(resultEl.textContent);
    resultEl.textContent = currentValue + 1;
};


function decrement() {
    const currentValue = Number(resultEl.textContent);
    resultEl.textContent = currentValue - 1;
};