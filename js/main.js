
const randomBtn = document.querySelector('.random-btn');

randomBtn.addEventListener('click', getRandomRecipe);

function getRandomRecipe() {
    localStorage.setItem('runCode', 'true');
    document.location.href = "recipes.html";
}

document.addEventListener('DOMContentLoaded', function() {
    const toRunOrNot = localStorage.getItem('runCode');

    if (toRunOrNot === 'true') {
        const recipes = document.querySelectorAll('.recipe');
        const recipe = recipes[Math.floor(Math.random()*recipes.length)];
    
        const recipeHeader = recipe.querySelector('.recipe-header');
        
        const recipeHead = recipeHeader.querySelector('.recipe-head');
    
        const recipeText = recipe.querySelector('.recipe-text');
        const recipeImg = recipe.querySelector('.recipe-image');
        const recipeLink = recipe.querySelector('.recipe-link');
    
        const rhContent = recipeHead.textContent;
        const tContent = recipeText.textContent;
        const iContent = recipeImg.src;

        const lContent = recipeLink.href;
        const lContentText = recipeLink.textContent;
    
        const postHead = document.querySelector('.post-header');
        postHead.textContent = rhContent;
    
        const postImg = document.querySelector('.post-image')
        postImg.src = iContent;
    
        const postText = document.querySelector('.post-text');
        postText.textContent = tContent;

        const postLink = document.querySelector('.post-link');
        postLink.href = lContent;
        postLink.textContent = lContentText;

        if (recipe.classList.contains('cursed')) {
            post.classList.add('cursed');
        }
        post.classList.add('show');
        postBtn.classList.add('close');

        localStorage.removeItem('runCode');
    }

});



const post = document.querySelector('.post');
const postBtn = document.querySelector('.post-btn');

const buttons = document.querySelectorAll('.recipe');

buttons.forEach(button => {
    button.addEventListener('click', showRecipe)
});

function showRecipe(event) {
    const recipeHeader = event.target.querySelector('.recipe-header');
    
    const recipeHead = recipeHeader.querySelector('.recipe-head');

    const recipeText = event.target.querySelector('.recipe-text');
    const recipeImg = event.target.querySelector('.recipe-image');
    const recipeLink = event.target.querySelector('.recipe-link');

    const rhContent = recipeHead.textContent;
    const tContent = recipeText.textContent;
    const iContent = recipeImg.src;
    
    const lContent = recipeLink.href;
    const lContentText = recipeLink.textContent;

    const postHead = document.querySelector('.post-header');
    postHead.textContent = rhContent;

    const postImg = document.querySelector('.post-image')
    postImg.src = iContent;

    const postText = document.querySelector('.post-text');
    postText.textContent = tContent;

    const postLink = document.querySelector('.post-link');
    postLink.href = lContent;
    postLink.textContent = lContentText;

    if (event.target.classList.contains('cursed')) {
        post.classList.add('cursed');
    }
    post.classList.add('show');
    postBtn.classList.add('close');
}


postBtn.addEventListener('click', hideRecipe);

function hideRecipe() {
    postBtn.classList.remove('close');
    post.classList.remove('show');
    post.classList.remove('cursed');
}
