let dbRequest = indexedDB.open('RecordsDB', 1)
let dbInstance = null
let timerInterval = null
let seconds = 0

dbRequest.onupgradeneeded = (event) => {
    let db = event.target.result
    db.createObjectStore('games', { keyPath: 'id', autoIncrement: true })
}

dbRequest.onsuccess = (event) => {
    dbInstance = event.target.result
}


let saveRecord = ( time, attempts) => {
    let tx = dbInstance.transaction('games', 'readwrite')
    let store = tx.objectStore('games')
    store.add({ time: time, attempts: attempts })
}

let redordList = (callback) => {
    let tx = dbInstance.transaction('games', 'readonly')
    let store = tx.objectStore('games')
    let minTime = null
    let minAttempts = null
    store.openCursor().onsuccess = (event) => {
        let cursor = event.target.result
        if (cursor) {
            let record = cursor.value
            if (minTime === null || record.time < minTime) {
                minTime = record.time
            }
            if (minAttempts === null || record.attempts < minAttempts) {
                minAttempts = record.attempts
            }
            cursor.continue()
        } else {
            callback(minTime, minAttempts)
        }
    }
}

const startTimer = () => {
    timerInterval = setInterval(() => {
        seconds++
        document.getElementById('timer').textContent = formatTime(seconds)
    }, 1000)
}
const stopTimer = () => {
    clearInterval(timerInterval)
}
const formatTime = (totalSeconds) => {
    let m = Math.floor(totalSeconds / 60)
    let s = totalSeconds % 60
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
}
let flippedCards = []
let attempts = 0
let pairsFound = 0
let lockBoard = false

function setAllCardsToTicket() {
    let cards = document.querySelectorAll('.carts')
    cards.forEach(card => {
        card.style.backgroundImage = "url('images/ticket-van.png')"
        card.dataset.flipped = "false"
    })
}

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