// setTimeout(() => {
//     document.getElementById('loader').style.display='none'          
// }, 1500);
console.log('all',document.querySelectorAll('.hidden_container'))
function showPhoto(clickedId) {
    const allHiddenContainer = document.querySelectorAll('.hidden_container')
    for (let i = 0; i < allHiddenContainer.length; i++) {
        allHiddenContainer[i].style.display = "none";
    }
    var historyDiv = document.getElementById('story_' + clickedId)
    document.querySelector('.full_story_container').style.display = "flex";
    if (historyDiv) {
        historyDiv.style.display = "block";
        
    }
}
function hidePhoto(id) {
    document.getElementById(id).style.display='none'
    document.querySelector('.full_story_container').style.display = "none";

    const allHiddenContainer = document.querySelectorAll('.hidden_container')
    for (let i = 0; i < allHiddenContainer.length; i++) {
        allHiddenContainer[i].style.display = "grid";
    }
    
}
