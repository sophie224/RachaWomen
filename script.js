function showPhoto(clickedId) {
    scrollToTop()
    const allHiddenContainer = document.querySelectorAll('.hidden_container')
    for (let i = 0; i < allHiddenContainer.length; i++) {
        allHiddenContainer[i].style.display = "none";
    }
    const historyDiv = document.getElementById('story_' + clickedId)
    document.querySelector('.full_story_container').style.display = "flex";
    if (historyDiv) {
        historyDiv.style.display = "block";
    }
}
function hidePhoto(id) {
    document.getElementById(id).style.display = 'none'
    document.querySelector('.full_story_container').style.display = "none";
    const allHiddenContainer = document.querySelectorAll('.hidden_container')
    for (let i = 0; i < allHiddenContainer.length; i++) {
        allHiddenContainer[i].style.display = "grid";
    }
}
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'auto'
    });
}

const buttonsWithDataId = document.querySelectorAll('[data-id="backArrow"]');
const mainContainer = document.getElementById('mainContainer')

buttonsWithDataId.forEach(function(button) {
    button.addEventListener('click', function() {
        mainContainer.scrollIntoView({ behavior: 'smooth' });
    });
});