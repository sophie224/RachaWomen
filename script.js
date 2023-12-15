// setTimeout(() => {
//     document.getElementById('loader').style.display='none'          
// }, 1500);
function showPhoto(clickedId) {
    var historyDiv = document.getElementById('story_' + clickedId)
    if (historyDiv) {
        historyDiv.style.display = "block";
        document.getElementById('mainContainer').style.display='none'
    }
}
function hidePhoto(id) {
    document.getElementById(id).style.display='none'
    document.getElementById('mainContainer').style.display='block'
    
}
