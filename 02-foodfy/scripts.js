const modalOverlay = document.querySelector('.modal-overlay');
const recipes = document.querySelectorAll('.recipe');

for (let recipe of recipes) {
    recipe.addEventListener('click', function(){

        const recipeId = recipe.getAttribute('id')

        modalOverlay.classList.add('active');

        modalOverlay.querySelector('img').src = `images/${recipeId}.png`
        modalOverlay.querySelector('.modal-recipe-name').innerHTML = recipe.querySelector('h3').innerHTML
        modalOverlay.querySelector('.modal-recipe-author').innerHTML = recipe.querySelector('p').innerHTML
    })
}

modalOverlay.querySelector('a').addEventListener('click', function(){
    modalOverlay.classList.remove('active');
})