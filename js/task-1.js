const itemsEl = document.querySelectorAll('.item');
console.log(`В списке ${itemsEl.length} категории.`);

itemsEl.forEach(item => {
    const headerCategory = item.querySelector('h2').textContent;
    const subCategoryElements = item.querySelector('ul').children.length;
    console.log(
        `Категория: ${headerCategory} \nКоличество элементов: ${subCategoryElements}`);
})