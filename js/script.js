// VARIABLES
// =========================================================
var deckID;
var shuffle;
var drawCard;
var remainder;

// GETS A NEW DECK
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

// SHUFFLES THE CARDS
// =========================================================

$('#shuffle').on('click', consoleLog2);

function consoleLog2(event) {
    event.preventDefault();

    $.ajax({
        url: `https://deckofcardsapi.com/api/deck/${deckID}/shuffle/`
    }).then(
        (data) => {
            shuffle = data;
            console.log(`Was it shuffled? ${shuffle.shuffled}`);
            console.log(`Was shuffle successful? ${shuffle.success}`);
            console.log(shuffle.deck_id);
        },
        (error) => {
            console.log('bad request: ', error);
        }
    );
}

// DRAWS A RANDOM CARD
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
