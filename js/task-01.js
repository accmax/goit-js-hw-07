const categoriesRef = document.querySelectorAll('.item');

console.log(`В списке ${categoriesRef.length} категории.`);

categoriesRef.forEach(category => {
    console.log(`Категория: ${category.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${category.querySelectorAll('li').length}`);
});