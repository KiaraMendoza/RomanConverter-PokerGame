'use strict';
const fs = require('fs');

const order = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

const deck = {
'S': ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A' ],
'H': ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A' ],
'C': ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A' ],
'D': ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A' ],
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

function sortHands(elem, elem2) {
    // elem[1] sería el segundo caracter del string ej: 'H3' -> '3'
    if (order.indexOf(elem[1]) < order.indexOf(elem2[1])) { // a < b
        return -1;
    }
    if (order.indexOf(elem[1]) > order.indexOf(elem2[1])) { // a > b
        return 1;
    }
    return 0;
}

hand.sort(sortHands);
console.log(`Sorted hand ${hand.sort(sortHands)}`);
handTwo.sort(sortHands)

function resolveHand(hand) {
    // Ordenar los arrays de las manos y realizar comprobaciones
    // Ejemplo de mano ordenada: C3,H5,C6,H8,HQ,CQ,DA // Otra mano: H3,H4,C5,H7,C7,H8,HT
    // Las separo para verificar si existe escalera (5 consecutivas) o escalera de color
    // let handS = [], handH = [], handC = [], handD = [];

    let hands = {
        S: [],
        H: [],
        C: [],
        D: []
    }

    let state = '';
    
    hand.map(card => {
        switch (card[0]) {
            case 'S':
                hands.S.push(card);
                break;
            case 'H':
                hands.H.push(card);
                break;
            case 'C':
                hands.C.push(card);
                break;
            case 'D':
                hands.D.push(card);
                break;
            default:
                console.error('¡Error! Carta no válida');
                return;
        }
    })

    Object.values(hands).map(hand => {
        // Escalera de color Ej: ['D2', 'D3', 'D4', 'D5', 'D6', 'S7', 'HQ']
        if (hand.length == 5) {
            if (hand.every(card => card[1] + 1 == hand[hand.indexOf(card) + 1][1])) {
                state = 'Straight Flash';
            } else {
                state = 'Flush';
            }
            return;
        } 
        return;
    }); 
    
    console.log(hands);
    console.log(state);
    return state;
}

let stateOrder = ['High Card', 'Pair', 'Two pairs', 'Three of a kind', 'Straight', 'Flush', 'Full House', 'Four of a kind', 'Straight Flash'];

let resolvedHand = resolveHand(['D2', 'D3', 'D4', 'D5', 'D6', 'S7', 'HQ']);
let resolvedHandTwo = resolveHand(handTwo);

// Finally, we will write the result's array on another file
fs.writeFileSync('poker-result.txt', 'SYNC: \n' + resolvedHand + '\n' + resolvedHandTwo);

/* Reglas */

/*

    High Card: Carta más alta.
    Pair: Pareja
    Two pairs: Dos parejas
    Three of a kind: Trío
    Straight: Escalera 5 cartas consecutivas
    Flush: Color 5 cartas del mismo palo
    Full House: 1 trío y 1 pareja
    Four of a kind: Póker 4 cartas del mismo valor
    Straight Flash: Escalera de color 5 cartas del mismo palo consecutivas

*/