'use strict';

const deck = {
'S': [2, 3, 4, 5, 6, 7, 8, 9, 'T', 'J', 'Q', 'K', 'A' ],
'H': [2, 3, 4, 5, 6, 7, 8, 9, 'T', 'J', 'Q', 'K', 'A' ],
'C': [2, 3, 4, 5, 6, 7, 8, 9, 'T', 'J', 'Q', 'K', 'A' ],
'D': [2, 3, 4, 5, 6, 7, 8, 9, 'T', 'J', 'Q', 'K', 'A' ],
};

let deckCopy = Object.assign({}, deck);

// let deckCopy = { ...deck };

function makeHand () {
    // Pillar un valor de deck por su key y quitar dicho valor de su array para evitar duplicados.
    let hand = [];

    for (let x = 0; x < 7; x++){
        let randomValue = Math.floor(Math.random() * (12 - x) + 1);
        let randomSuit = Math.floor(Math.random() * 4 + 1);
        if (randomSuit === 1) {
            hand.push('S' + deckCopy.S.splice((randomValue > deckCopy.S.length ? (deckCopy.S.length - 1) : randomValue), 1));
        } else if (randomSuit === 2) {
            hand.push('H' + deckCopy.H.splice((randomValue > deckCopy.H.length ? (deckCopy.H.length - 1) : randomValue), 1));
        } else if (randomSuit === 3) {
            hand.push('C' + deckCopy.C.splice((randomValue > deckCopy.C.length ? (deckCopy.C.length - 1) : randomValue), 1));
        } else if (randomSuit === 4) {
            hand.push('D' + deckCopy.D.splice((randomValue > deckCopy.D.length ? (deckCopy.D.length - 1) : randomValue), 1));
        }
    }
    // console.log(hand)
    return hand;
}

let hand = makeHand(1);
// console.log(`Player 1 hand: ${hand}.`);
let handTwo = makeHand(2);
// console.log(`Player 2 hand: ${handTwo}.`);

function resolveHand (hand, handTwo) {
    // Ordenar los arrays de las manos y realizar comprobaciones
}

function sortHands(elem, elem2) {
    // elem[1] sería el segundo caracter del string ej: 'H3' -> '3'
    // console.log(elem[1], elem2[1])
    // console.log(deck.S.indexOf(elem[1]), deck.S.indexOf(elem2[1]))
    if (deck.S.indexOf(elem[1]) < deck.S.indexOf(elem2[1])) { // a es menor que b según criterio de ordenamiento
        return -1;
    }
    if (deck.S.indexOf(elem[1]) > deck.S.indexOf(elem2[1])) { // a es mayor que b según criterio de ordenamiento
        return 1;
    }
    return 0;
}

console.log(`Sorted hand ${hand.sort(sortHands)}`)
console.log('deck', deck)