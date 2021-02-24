const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output')
};

const { input, span } = refs;

const defaultName = 'Незнакомец';

input.addEventListener('input', hanleChangeInput);

function hanleChangeInput({ target }) {
    const value = target.value;
    span.textContent = value ? value : defaultName;
};