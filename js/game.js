let selectedCards = [];
let currentMove = 0;

const active = (e) => {
    // Busca el div con clase 'cart' (puede venir de un hijo)
    const card = e.currentTarget;
    if (selectedCards.includes(card) || selectedCards.length === 2) return;

    card.classList.add('active');
    selectedCards.push(card);

    if (selectedCards.length === 2) {
        currentMove++;
        // Compara el nombre de la clase del hijo frontal
        const front1 = selectedCards[0].querySelector('div[class^="cart"]');
        const front2 = selectedCards[1].querySelector('div[class^="cart"]');
        if (front1.className === front2.className) {
            selectedCards = [];
        } else {
            setTimeout(() => {
                selectedCards[0].classList.remove('active');
                selectedCards[1].classList.remove('active');
                selectedCards = [];
            }, 1000);
        }
    }
};

// Agrega el evento a todas las cartas con clase 'cart'
cartsArray.forEach(cart => {
    cart.addEventListener('click', active);
});