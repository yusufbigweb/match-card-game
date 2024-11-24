const numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]
const flipCards = [];
const matchCards = []
const canFlip = true;

// Create Card

function createCard(number){
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.number= number;
    

}
