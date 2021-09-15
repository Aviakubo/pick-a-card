var myVariable;

$.ajax({
        url: 'https://deckofcardsapi.com/api/deck/new/'
    }).then(
        (data) => { 
        myVariable = data.deck_id;
        },
        (error) => {
        console.log('bad request: ', error);
        }
    );

$('button').on('click', consoleLog);

    function consoleLog(event) {
        event.preventDefault();
        console.log(myVariable);
    }


// generate new deck ID (does this delete old deck ID?)

// assign deck ID to variable

// use variable to populate shuffle api link

// 