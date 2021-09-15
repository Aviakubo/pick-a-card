var deckID;
var shuffle;
var drawCard;
var remainder;

// gets a new deck ID
// =========================================================
$('#open').on('click', consoleLog);

function consoleLog(event) {
    event.preventDefault();
$.ajax({
    url: 'https://deckofcardsapi.com/api/deck/new/'
}).then(
    (data) => {
        deckID = data.deck_id;
        console.log(deckID);
    },
    (error) => {
        console.log('bad request: ', error);
    }
);
}

// sets deck ID so that it can be shuffled
// =========================================================

$('#shuffle').on('click', consoleLog2);

function consoleLog2(event) {
    event.preventDefault();

$.ajax({
    url: `https://deckofcardsapi.com/api/deck/${deckID}/shuffle/`
}).then(
    (data) => {
        shuffle = data.success;
        console.log(shuffle);
    },
    (error) => {
        console.log('bad request: ', error);
    }
);
}

// sets deck ID so that you can draw a card
// =========================================================

$('#draw').on('click', consoleLog3);

function consoleLog3(event) {
    event.preventDefault();

$.ajax({
    url: `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`
}).then(
    (data) => {
        drawCard = data.cards;
        remainder = data.remaining;
        console.log(drawCard);
        console.log(remainder);
    },
    (error) => {
        console.log('bad request: ', error);
    }
);
}
