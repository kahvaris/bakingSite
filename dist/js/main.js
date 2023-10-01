const post = document.querySelector('.post');
const postBtn = document.querySelector('.post-btn');

const buttons = document.querySelectorAll('.recipe');

buttons.forEach(button => {
    button.addEventListener('click', showRecipe)
});

function showRecipe(event) {
    const recipeHeader = event.target.querySelector('.recipe-header');
    
    const time = recipeHeader.querySelector('.time');
    const recipeHead = recipeHeader.querySelector('.recipe-head');

    const recipeText = event.target.querySelector('.recipe-text');
    const recipeImg = event.target.querySelector('.recipe-image');

    const rhContent = recipeHead.textContent;
    const timeContent = time.textContent;
    const tContent = recipeText.textContent;
    const iContent = recipeImg.src;

    const postHead = document.querySelector('.post-header');
    postHead.textContent = rhContent;

    const postDate = document.querySelector('.post-time');
    postDate.textContent = timeContent;

    const postImg = document.querySelector('.post-image')
    postImg.src = iContent;

    const postText = document.querySelector('.post-text');
    postText.textContent = tContent;

    post.classList.add('show');
    postBtn.classList.add('close');
}


postBtn.addEventListener('click', hideRecipe);

function hideRecipe() {
    postBtn.classList.remove('close');
    post.classList.remove('show');
}