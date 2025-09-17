// IndexedDB setup for saving records
let dbRequest = indexedDB.open('memoramaRecords', 1)
let dbInstance = null

dbRequest.onupgradeneeded = function(event) {
    let db = event.target.result
    db.createObjectStore('games', { keyPath: 'id', autoIncrement: true })
}

dbRequest.onsuccess = function(event) {
    dbInstance = event.target.result
}

// Utility to save a finished game
function saveGameRecord(attempts, duration) {
    if (!dbInstance) return
    let tx = dbInstance.transaction('games', 'readwrite')
    let store = tx.objectStore('games')
    store.add({ attempts: attempts, duration: duration })
}

// Utility to get records
function getRecords(callback) {
    if (!dbInstance) return
    let tx = dbInstance.transaction('games', 'readonly')
    let store = tx.objectStore('games')
    let minTime = null
    let minAttempts = null
    store.openCursor().onsuccess = function(e) {
        let cursor = e.target.result
        if (cursor) {
            let data = cursor.value
            if (minTime === null || data.duration < minTime) minTime = data.duration
            if (minAttempts === null || data.attempts < minAttempts) minAttempts = data.attempts
            cursor.continue()
        } else {
            callback(minTime, minAttempts)
        }
    }
}

// Timer logic
let timerInterval = null
let seconds = 0
function startTimer() {
    timerInterval = setInterval(() => {
        seconds++
        document.getElementById('timer').textContent = formatTime(seconds)
    }, 1000)
}
function stopTimer() {
    clearInterval(timerInterval)
}
function formatTime(sec) {
    let m = Math.floor(sec / 60)
    let s = sec % 60
    return `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`
}

// Game state
let flippedCards = []
let attempts = 0
let pairsFound = 0
let lockBoard = false

// Set all cards to ticket-van image at start
function setAllCardsToTicket() {
    let cards = document.querySelectorAll('.carts')
    cards.forEach(card => {
        card.style.backgroundImage = "url('images/ticket-van.png')"
        card.dataset.flipped = "false"
    })
}

// Flip logic
function flipCard(card) {
    if (lockBoard || card.dataset.flipped === "true") return
    card.style.backgroundImage = ""
    card.dataset.flipped = "pending"
    card.classList.forEach(cls => {
        if (cls.startsWith('cart')) {
            card.classList.add('show')
        }
    })
    flippedCards.push(card)
    if (flippedCards.length === 2) {
        attempts++
        document.getElementById('attempts').textContent = `Intentos: ${attempts}`
        checkPair()
    }
}

// Check if two flipped cards are a pair
function checkPair() {
    lockBoard = true
    let [card1, card2] = flippedCards
    if (card1.className === card2.className) {
        card1.dataset.flipped = "true"
        card2.dataset.flipped = "true"
        pairsFound++
        document.getElementById('pairs').textContent = `Parejas: ${pairsFound} / 8`
        flippedCards = []
        lockBoard = false
        if (pairsFound === 8) endGame()
    } else {
        setTimeout(() => {
            card1.style.backgroundImage = "url('images/ticket-van.png')"
            card2.style.backgroundImage = "url('images/ticket-van.png')"
            card1.dataset.flipped = "false"
            card2.dataset.flipped = "false"
            flippedCards = []
            lockBoard = false
        }, 1000)
    }
}

// End game and show overlay
function endGame() {
    stopTimer()
    saveGameRecord(attempts, seconds)
    document.getElementById('final-time').textContent = `Duración de partida: ${formatTime(seconds)}`
    document.getElementById('final-attempts').textContent = `Número de intentos: ${attempts}`
    getRecords((recordTime, recordAttempts) => {
        document.getElementById('record-time').textContent = `Tiempo record: ${formatTime(recordTime || seconds)}`
        document.getElementById('record-attempts').textContent = `Menor número de intentos: ${recordAttempts || attempts}`
    })
    document.getElementById('overlay').classList.remove('hidden')
}

// Play again button
document.getElementById('play-again').onclick = function() {
    window.location.href = 'index.html'
}

// Initialize game
document.addEventListener('DOMContentLoaded', () => {
    setAllCardsToTicket()
    startTimer()
    let cards = document.querySelectorAll('.carts')
    cards.forEach(card => {
        card.onclick = function() {
            flipCard(card)
        }
    })
})