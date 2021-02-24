const refs = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text'),
};

const { input, span } = refs;

input.addEventListener('input', hanleChangeInput);

function hanleChangeInput({ currentTarget }) {
    const value = currentTarget.value
    span.style.fontSize = value + 'px'
};