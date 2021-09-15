var deckID;
var shuffle;
var drawCard;

// gets a new deck ID
$.ajax({
    url: 'https://deckofcardsapi.com/api/deck/new/'
}).then(
    (data) => {
        deckID = data.deck_id;
    },
    (error) => {
        console.log('bad request: ', error);
    }
);

// sets deck ID so that it can be shuffled

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

$('#draw').on('click', consoleLog3);

function consoleLog3(event) {
    event.preventDefault();

$.ajax({
    url: `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`
}).then(
    (data) => {
        drawCard = data.cards;
        console.log(drawCard);
    },
    (error) => {
        console.log('bad request: ', error);
    }
);
}

// pulls deck ID on click
$('#open').on('click', consoleLog);

function consoleLog(event) {
    event.preventDefault();
    console.log(deckID);
}