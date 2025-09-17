const startButton = document.forms['start-button'];
const difficultySelect = startButton['difficulty'];

const windowlocation =(number)=>{
    if (number === 4) {
        window.location.href = "game_4x4.html";
    } else if (number === 6) {
        window.location.href = "game_6x6.html";
    } else if (number === 10) {
        window.location.href = "game_10x10.html";
    }
}
startButton.addEventListener('submit', function(e) {
    e.preventDefault()
    const difficulty = parseInt(difficultySelect.value)
    windowlocation(difficulty)
})